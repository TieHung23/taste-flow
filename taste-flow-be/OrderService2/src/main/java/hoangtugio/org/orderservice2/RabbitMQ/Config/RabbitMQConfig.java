package hoangtugio.org.orderservice2.RabbitMQ.Config;


import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {

    public static final String ORDER_EXCHANGE = "order.exchange";

    public static final String PAYMENT_EXCHANGE = "payment.exchange";

    public static final String INVENTORY_EXCHANGE = "inventory.exchange";


    @Bean
    public MessageConverter jsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public AmqpTemplate amqpTemplate(ConnectionFactory connectionFactory) {
        RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(jsonMessageConverter());
        return rabbitTemplate;
    }

    @Bean
    public TopicExchange orderExchange() {
        return new TopicExchange(ORDER_EXCHANGE);
    }

    @Bean
    public TopicExchange paymentExchange() {
        return new TopicExchange(PAYMENT_EXCHANGE);
    }

    @Bean
    public TopicExchange inventoryExchange() {
        return new TopicExchange(INVENTORY_EXCHANGE);
    }

    @Bean
    public Queue orderQueue() {
        return new Queue("order.queue");
    }

    @Bean
    public Queue readyPayment() {
        return new Queue("readyPayment.queue");
    }

    @Bean
    public Queue inventoryQueue() {
        return new Queue("inventoryOfOrder.queue");
    }

    @Bean
    public Queue inventoryUnlockQueue() {
        return new Queue("inventoryUnlock.queue");
    }

    @Bean
    public Binding bindingOrder() {
        return BindingBuilder
                .bind(orderQueue())
                .to(paymentExchange())
                .with("payment.confirmed");
    }

    @Bean
    public Binding bindingInventory() {
        return BindingBuilder
                .bind(inventoryQueue())
                .to(inventoryExchange())
                .with("inventory.checked");
    }

    @Bean
    public Binding bindingUnlockInventory() {
        return BindingBuilder
                .bind(inventoryUnlockQueue())
                .to(inventoryExchange())
                .with("inventory.unlocked");
    }

    @Bean
    public Binding bindingReadyPayment() {
        return BindingBuilder
                .bind(readyPayment())
                .to(paymentExchange())
                .with("payment.ready");
    }
}
