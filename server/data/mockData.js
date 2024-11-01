const rewards = [
  { id: 1, name: 'Discount Coupon', points: 100, image: '/images/S__7667726_0.jpg', description: 'Get 10% off on your next purchase', expiryDate: '2024-12-31', availability: true },
  { id: 2, name: 'Gift Voucher', points: 200, image: '/images/S__7667728_0.jpg', description: 'Receive a $20 gift voucher for any purchase', expiryDate: '2024-12-31', availability: true },
  { id: 3, name: 'Free Shipping', points: 150, image: '/images/S__7667729_0.jpg', description: 'Free shipping on your next order', expiryDate: '2024-11-30', availability: true },
  { id: 4, name: 'Exclusive Access', points: 250, image: '/images/S__7667730_0.jpg', description: 'Get early access to our upcoming sales event', expiryDate: '2025-01-15', availability: true },
  { id: 5, name: 'Limited Edition Item', points: 500, image: '/images/S__7667731_0.jpg', description: 'Redeem for a limited edition item only available for top customers', expiryDate: '2025-06-01', availability: false },
  { id: 6, name: 'Luxury Spa Day', points: 1000, image: '/images/S__7667732_0.jpg', description: 'Enjoy a full day of relaxation at a luxury spa', expiryDate: '2025-12-31', availability: true },
  { id: 7, name: 'Weekend Getaway', points: 1500, image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', description: 'Book a weekend stay at a popular destination', expiryDate: '2025-11-30', availability: true },
  { id: 8, name: 'Smartphone Upgrade', points: 2000, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8', description: 'Upgrade to the latest smartphone model of your choice', expiryDate: '2025-10-31', availability: true },
  { id: 9, name: 'Annual Subscription', points: 1200, image: '/images/S__7667733_0.jpg', description: 'Get a one-year subscription to your favorite service', expiryDate: '2025-09-30', availability: true },
  { id: 10, name: 'Fine Dining Experience', points: 800, image: '/images/S__7667734_0.jpg', description: 'Dine at a Michelin-starred restaurant', expiryDate: '2025-08-31', availability: true },
  { id: 11, name: 'Fitness Tracker', points: 900, image: '/images/150.png', description: 'Stay healthy and track your fitness goals', expiryDate: '2025-07-31', availability: true },
  { id: 12, name: 'Concert Tickets', points: 1100, image: '/images/150.png', description: 'Get tickets to a concert of your choice', expiryDate: '2025-06-30', availability: true },
  { id: 13, name: 'Home Appliance Voucher', points: 1300, image: '/images/150.png', description: 'Receive a voucher for home appliances', expiryDate: '2025-05-31', availability: true },
  { id: 14, name: 'Fashion Accessories', points: 1400, image: '/images/150.png', description: 'Choose from a variety of trendy accessories', expiryDate: '2025-04-30', availability: true },
  { id: 15, name: 'Tech Gadget', points: 1600, image: '/images/150.png', description: 'Get the latest tech gadgets available', expiryDate: '2025-03-31', availability: true },
  { id: 16, name: 'Luxury Watch', points: 1800, image: '/images/150.png', description: 'Redeem a high-end luxury watch', expiryDate: '2025-02-28', availability: true },
  { id: 17, name: 'Travel Voucher', points: 2000, image: '/images/150.png', description: 'Use this voucher for your next travel adventure', expiryDate: '2025-01-31', availability: true },
  { id: 18, name: 'Cooking Class', points: 2200, image: '/images/150.png', description: 'Join a cooking class and learn from the best chefs', expiryDate: '2024-12-31', availability: true },
  { id: 19, name: 'Photography Workshop', points: 2400, image: '/images/150.png', description: 'Learn photography skills with a professional', expiryDate: '2024-11-30', availability: true },
  { id: 20, name: 'Personal Training Sessions', points: 2600, image: '/images/150.png', description: 'Get personal training sessions with a certified trainer', expiryDate: '2024-10-31', availability: true }
];


const Product = [
  {
    id: 1,
    name: "Discount Coupon",
    points: 100,
    image: "/images/150.png",
  },
  {
    id: 2,
    name: "Gift Voucher",
    points: 200,
    image: "/images/150.png",
  },
  {
    id: 3,
    name: "Free Shipping",
    points: 150,
    image: "/images/150.png",
  },
  {
    id: 4,
    name: "Loyalty Points Bonus",
    points: 300,
    image: "/images/150.png",
  },
  {
    id: 5,
    name: "Exclusive Access",
    points: 500,
    image: "/images/150.png",
  },
  {
    id: 6,
    name: "Product Sample",
    points: 250,
    image: "/images/150.png",
  },
  { id: 7, name: "Gift Card", points: 400, image: "/images/150.png" },
  {
    id: 8,
    name: "Monthly Subscription",
    points: 600,
    image: "/images/150.png",
  },
  {
    id: 9,
    name: "Early Access to Sales",
    points: 350,
    image: "/images/150.png",
  },
  {
    id: 10,
    name: "Birthday Gift",
    points: 200,
    image: "/images/150.png",
  },
];

const users = [
  {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    password: 'pass1234',
    email: 'john.doe@example.com',
    phoneNumber: '555-1234',
    address: '123 Main St, Springfield, USA',
    points: 1200,
    joinedDate: '2023-05-10',
    tier: 'Gold',
    coupong: []
  },
  {
    id: 2,
    name: 'Jane Smith',
    username: 'janesmith',
    password: 'mypassword',
    email: 'jane.smith@example.com',
    phoneNumber: '555-5678',
    address: '456 Oak Ave, Metropolis, USA',
    points: 800,
    joinedDate: '2022-11-15',
    tier: 'Silver',
    coupong: []
  },
  {
    id: 3,
    name: 'Admin User',
    username: 'admin',
    password: '1234',
    email: 'admin@company.com',
    phoneNumber: '555-0000',
    address: '789 Corporate Blvd, Capital City, USA',
    points: 500,
    joinedDate: '2021-01-01',
    tier: 'Platinum',
    coupong: []
  },
  {
    id: 4,
    name: 'Sarah Connor',
    username: 'sarahc',
    password: 'terminator',
    email: 'sarah.connor@example.com',
    phoneNumber: '555-9876',
    address: '101 Future Lane, Skynet City, USA',
    points: 600,
    joinedDate: '2023-01-22',
    tier: 'Bronze',
    coupong: []
  },
  {
    id: 5,
    name: 'Bruce Wayne',
    username: 'batman',
    password: 'iambatman',
    email: 'bruce.wayne@waynecorp.com',
    phoneNumber: '555-6789',
    address: 'Wayne Manor, Gotham City, USA',
    points: 1500,
    joinedDate: '2023-09-05',
    tier: 'Gold',
    coupong: []
  }
];

module.exports = { rewards, users, Product };
