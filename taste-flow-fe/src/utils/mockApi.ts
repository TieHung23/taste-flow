export const menuItemsMock = [
  {
    id: 1,
    name: "Grilled Salmon with Vegetables",
    description: "Fresh Atlantic salmon grilled to perfection with seasonal vegetables and herb butter",
    price: 24.99,
    originalPrice: 29.99,
    image: "https://img.freepik.com/premium-photo/food-photography-4k_839182-2114.jpg",
    rating: 4.8,
    reviews: 156,
    cookTime: "25 min",
    category: "main-course",
    isPopular: true,
    tags: ["Healthy", "Gluten-Free"],
    calories: 320
  },
  {
    id: 2,
    name: "Truffle Mushroom Risotto",
    description: "Creamy arborio rice with wild mushrooms and black truffle oil",
    price: 19.99,
    image: "https://img.freepik.com/premium-photo/food-photography-4k_839182-2114.jpg",
    rating: 4.9,
    reviews: 203,
    cookTime: "30 min",
    category: "main-course",
    isNew: true,
    tags: ["Vegetarian", "Premium"],
    calories: 450
  },
  {
    id: 3,
    name: "Crispy Chicken Wings",
    description: "Buffalo-style wings with blue cheese dip and celery sticks",
    price: 14.99,
    image: "https://img.freepik.com/premium-photo/food-photography-4k_839182-2114.jpg",
    rating: 4.6,
    reviews: 89,
    cookTime: "20 min",
    category: "appetizers",
    tags: ["Spicy", "Crispy"],
    calories: 380
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center, served with vanilla ice cream",
    price: 9.99,
    image: "https://img.freepik.com/premium-photo/food-photography-4k_839182-2114.jpg",
    rating: 4.7,
    reviews: 124,
    cookTime: "15 min",
    category: "desserts",
    tags: ["Sweet", "Hot"],
    calories: 520
  },
  {
    id: 5,
    name: "Fresh Berry Smoothie",
    description: "Blend of strawberries, blueberries, and banana with Greek yogurt",
    price: 7.99,
    image: "https://img.freepik.com/premium-photo/food-photography-4k_839182-2114.jpg",
    rating: 4.5,
    reviews: 67,
    cookTime: "5 min",
    category: "beverages",
    tags: ["Healthy", "Fresh"],
    calories: 180
  },
  {
    id: 6,
    name: "Caesar Salad Supreme",
    description: "Crisp romaine lettuce with parmesan, croutons, and house-made dressing",
    price: 12.99,
    image: "https://img.freepik.com/premium-photo/food-photography-4k_839182-2114.jpg",
    rating: 4.4,
    reviews: 92,
    cookTime: "10 min",
    category: "appetizers",
    tags: ["Fresh", "Classic"],
    calories: 280
  }
];
export const dietaryOptionsMock = [
  'Vegetarian',
  'Vegan',
  'Gluten-Free',
  'Keto',
  'Low-Calorie'
];

export const categoryMock = [
  { id: 'all', name: 'All Items', count: 48 },
  { id: 'appetizers', name: 'Appetizers', count: 12 },
  { id: 'main-course', name: 'Main Course', count: 18 },
  { id: 'desserts', name: 'Desserts', count: 8 },
  { id: 'beverages', name: 'Beverages', count: 10 }
];

export const userMock = [
  {
    id: '1',
    email: 'john.doe@example.com',
    password: '**********',
    name: 'John Doe',
    phone: '123-456-7890',
    address: '123 Main St',
    createdAt: '2025-06-01T00:00:00Z',
    updatedAt: '2025-06-08T00:00:00Z',
    status: 'ACTIVE',
    role: 'CUSTOMER',
  },
  {
    id: '2',
    email: 'jane.smith@example.com',
    password: '**********',
    name: 'Jane Smith',
    phone: '098-765-4321',
    address: '456 Oak St',
    createdAt: '2025-06-02T00:00:00Z',
    updatedAt: '2025-06-07T00:00:00Z',
    status: 'INACTIVE',
    role: 'STAFF',
  },
];

export const dishMock = [
  {
    id: '1',
    name: 'Spaghetti Carbonara',
    price: 12.99,
    status: 'ACTIVE',
    category: ['main-course'],
    receipt: ['Step 1: Cook pasta', 'Step 2: Add sauce'],
    image: 'spaghetti.png',
  },
  {
    id: '2',
    name: 'Chicken Tikka Masala',
    price: 15.50,
    status: 'ACTIVE',
    category: ['main-course', 'appetizers'],
    receipt: ['Step 1: Marinate chicken', 'Step 2: Cook with spices'],
    image: 'chicken.png',
  },
  {
    id: '3',
    name: 'Chocolate Lava Cake',
    price: 8.75,
    status: 'INACTIVE',
    category: ['desserts'],
    receipt: ['Step 1: Mix batter', 'Step 2: Bake'],
    image: 'chocolate.png',
  },
];