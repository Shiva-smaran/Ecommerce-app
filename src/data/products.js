const products = [
  // 📱 Electronics
  {
    id: 1,
    title: "iPhone X",
    description: "iPhone with A13 chip and dual camera.",
    price: 22999,
    category: "Electronics",
    image: "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    specifications: {
      brand: "Apple",
      processor: "A13 Bionic",
      RAM: "8GB",
      storage: "256GB",
      camera: "12MP + 12MP Ultra-wide",
      battery: "3,200 mAh",
    },
  },
  {
    id: 2,
    title: "Samsung Galaxy S23 Ultra",
    description: "Flagship smartphone with 200MP camera and S-Pen.",
    price: 129999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1705585174953-9b2aa8afc174?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specifications: {
      brand: "Samsung",
      processor: "Snapdragon 8 Gen 2",
      RAM: "12GB",
      storage: "512GB",
      camera: "200MP + 12MP Ultra-wide",
      battery: "5,000 mAh",
    },
  },
  {
    id: 3,
    title: "Sony WH-1000XM5 Headphones",
    description: "Industry-leading noise cancellation with 30-hour battery.",
    price: 30000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1733041055704-da53567e49da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specifications: {
      brand: "Sony",
      batteryLife: "30 hours",
      connectivity: "Bluetooth 5.2",
      weight: "250g",
      noiseCancellation: "Yes",
    },
  },

  // 💻 Laptops
  {
    id: 4,
    title: "MacBook Pro 16-inch",
    description: "M2 Max chip with Retina display and 22-hour battery.",
    price: 108000,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1612383401559-c32a290d6b17?q=80&w=2040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specifications: {
      brand: "Apple",
      processor: "M2 Max",
      RAM: "32GB",
      storage: "1TB SSD",
      display: "16-inch Retina XDR",
    },
  },
  {
    id: 5,
    title: "Dell XPS 15",
    description: "Powerful laptop with 4K OLED display and Intel i9.",
    price: 1899,
    category: "Laptops",
    image: "https://images.pexels.com/photos/1266982/pexels-photo-1266982.jpeg?auto=compress&cs=tinysrgb&w=600",
    specifications: {
      brand: "Dell",
      processor: "Intel Core i9",
      RAM: "32GB",
      storage: "1TB SSD",
      display: "15.6-inch 4K OLED",
    },
  },

  // 🎮 Gaming
  {
    id: 6,
    title: "PlayStation 5",
    description: "Next-gen gaming console with ultra-fast SSD.",
    price: 49999,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specifications: {
      brand: "Sony",
      processor: "Custom AMD Zen 2",
      RAM: "16GB GDDR6",
      storage: "825GB SSD",
      resolution: "8K Support",
    },
  },
  {
    id: 7,
    title: "Xbox Series X",
    description: "Powerful console with 12 teraflops of GPU power.",
    price: 89999,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specifications: {
      brand: "Microsoft",
      processor: "AMD Ryzen Zen 2",
      RAM: "16GB GDDR6",
      storage: "1TB SSD",
      resolution: "8K Ready",
    },
  },

  // 🏠 Home Appliances
  {
    id: 8,
    title: "Dyson V15 Cordless Vacuum",
    description: "Powerful vacuum with laser dirt detection.",
    price: 65899,
    category: "Home Appliances",
    image: "https://m.media-amazon.com/images/I/31DMXHLTSWL._SX300_SY300_QL70_FMwebp_.jpg",
    specifications: {
      brand: "Dyson",
      suctionPower: "230AW",
      batteryLife: "60 min",
      weight: "6.8 lbs",
      filtration: "HEPA",
    },
  },
  {
    id: 9,
    title: "Instant Pot Duo 7-in-1",
    description: "Multifunctional cooker with 13 cooking programs.",
    price: 20000,
    category: "Home Appliances",
    image: "https://m.media-amazon.com/images/I/415Qve1z+uS._SY300_SX300_.jpg",
    specifications: {
      brand: "Instant Pot",
      capacity: "6 quarts",
      functions: "Pressure Cooker, Slow Cooker, Rice Cooker",
      safetyFeatures: "10+ safety mechanisms",
    },
  },

  // 👟 Fashion
  {
    id: 10,
    title: "Nike Air Force 1",
    description: "Classic white sneakers for everyday style.",
    price: 12999,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmlrZSUyMEFpciUyMEZvcmNlJTIwMXxlbnwwfHwwfHx8MA%3D%3D",
    specifications: {
      brand: "Nike",
      material: "Leather",
      sole: "Rubber",
      sizes: ["7", "8", "9", "10", "11"],
      gender: "Unisex",
    },
  },
  {
    id: 11,
    title: "Adidas Ultraboost 22",
    description: "High-performance running shoes with Boost technology.",
    price: 180,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1584734484941-1ff360f3e3c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specifications: {
      brand: "Adidas",
      material: "Primeknit",
      Color : "Black",
      sole: "Boost Cushioning",
      sizes: ["6", "7", "8", "9", "10"],
      gender: "Unisex",
    },
  },

  // More products...
];

export default products;
