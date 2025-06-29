package tasteflow.paymentservice.controller;


import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tasteflow.paymentservice.model.Payment;
import tasteflow.paymentservice.service.DiscountService;
import tasteflow.paymentservice.service.MomoService;
import tasteflow.paymentservice.service.PaymentService;
import tasteflow.paymentservice.service.VNPAYService;

import java.io.UnsupportedEncodingException;
import java.util.List;

@RestController
@RequestMapping("api/payment")
public class PaymentController {

    @Autowired
    PaymentService paymentService;
    @Autowired
    VNPAYService vnpayService;
    @Autowired
    MomoService momoService;
    @Autowired
    DiscountService discountService;

    @GetMapping
    public List<Payment> getAllPayments() {
        return paymentService.getAllPayments();
    }

    @GetMapping("{id}")
    public Payment getPaymentById(@PathVariable int id) {

        return paymentService.getPaymentById(id);
    }

    @GetMapping("/user/{userId}")
    public List<Payment> getPaymentByUserId(@PathVariable int userId) {
        return paymentService.getPaymentHistoryByUser(userId);
    }

    @PostMapping()
    public String createPayment(@RequestBody Payment payment) throws Exception {
        String url ="";
        int total = payment.getAmount();

        // Cần lấy orderId ra, check xem có phải là KH nó thah toán lại hay ko hay cái này lần đầu xuất hiện dưới DB


        // bỏ vào DB payment trước sau đó mới gọi VNPAY/Momo để tạo url thanh toán
        if (payment.getDiscountId()==0)
        {
            System.out.println("discount deo co");

        }
        else
        {
            //Neu co discountId thi set discount cho cai payment
            payment.setDiscountValue(discountService.getDiscountById(payment.getDiscountId()).getDiscount());
            total = payment.getAmount() - payment.getAmount()/100*discountService.getDiscountById(payment.getDiscountId()).getDiscount();
        }
        paymentService.processPayment(payment);

        if (payment.getPaymentMethod() == Payment.PaymentMethod.VNPAY) {
             url = vnpayService.createVnpayUrl(String.valueOf(payment.getId()), total, "");
        }
        else if (payment.getPaymentMethod() == Payment.PaymentMethod.MOMO)
        {
            url = momoService.createPaymentRequest(total, String.valueOf(payment.getId()));
        }

        return url;
    }

}
