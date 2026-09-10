import mongoose from "mongoose";

await mongoose.connect("mongodb://admin:Nitin2006@localhost:27017/Ecommerce-Platform?replicaSet=myReplicaSet&authSource=admin");

const db = mongoose.connection.db;

const collection = db.collection("products");

const products = [
    {
        title: "Wireless Bluetooth Headphones",
        price: 2499,
        rating: 4.5,
        category: "Electronics",
        stock: 42,
        image: "https://www.boat-lifestyle.com/cdn/shop/products/main2_b66dce6b-710d-49cb-9d1c-2bc8c9c0ab15_600x.png?v=1645698328",
        description: "Over-ear wireless headphones with deep bass and long battery life."
    },
    {
        title: "Mechanical Gaming Keyboard",
        price: 3299,
        rating: 4.7,
        category: "Electronics",
        stock: 25,
        image: "https://static1.industrybuying.com/products/it-security/computer-accessories/keyboard/ITS.KEY.639308931_1772111084724.webp",
        description: "RGB mechanical keyboard with tactile switches for gaming and productivity."
    },
    {
        title: "Wireless Gaming Mouse",
        price: 1899,
        rating: 4.4,
        category: "Electronics",
        stock: 38,
        image: "https://m.media-amazon.com/images/I/61Mk3YqYHpL.jpg",
        description: "Ergonomic wireless gaming mouse with adjustable DPI."
    },
    {
        title: "Smart Watch Series X",
        price: 4999,
        rating: 4.3,
        category: "Electronics",
        stock: 18,
        image: "https://media.tatacroma.com/Croma%20Assets/Communication/Wearable%20Devices/Images/300978_1_s6ene2.png",
        description: "Smart watch with fitness tracking, notifications and heart-rate monitoring."
    },
    {
        title: "Portable Bluetooth Speaker",
        price: 1599,
        rating: 4.6,
        category: "Electronics",
        stock: 31,
        image: "https://static1.industrybuying.com/products/it-electronics/audio/speakers/portable-bluetooth-speakers/ITE.POR.26448808_1672732255563.webp",
        description: "Compact portable speaker with powerful sound and water resistance."
    },
    {
        title: "USB-C Fast Charger",
        price: 899,
        rating: 4.5,
        category: "Electronics",
        stock: 75,
        image: "https://m.media-amazon.com/images/I/51SrWaH8JTL._SX569_.jpg",
        description: "Fast USB-C charger compatible with smartphones, tablets and other devices."
    },
    {
        title: "Laptop Backpack",
        price: 1299,
        rating: 4.4,
        category: "Bags",
        stock: 55,
        image: "https://loremflickr.com/600/600/laptop,backpack",
        description: "Water-resistant laptop backpack with multiple compartments."
    },
    {
        title: "Premium Leather Wallet",
        price: 799,
        rating: 4.2,
        category: "Accessories",
        stock: 80,
        image: "https://loremflickr.com/600/600/leather,wallet",
        description: "Compact leather wallet with multiple card and cash compartments."
    },
    {
        title: "Classic Analog Watch",
        price: 2199,
        rating: 4.5,
        category: "Accessories",
        stock: 27,
        image: "https://loremflickr.com/600/600/analog,wristwatch",
        description: "Classic analog wristwatch with a minimalist premium design."
    },
    {
        title: "Polarized Sunglasses",
        price: 999,
        rating: 4.3,
        category: "Accessories",
        stock: 46,
        image: "https://loremflickr.com/600/600/sunglasses",
        description: "Stylish polarized sunglasses offering UV protection."
    },
    {
        title: "Men's Casual T-Shirt",
        price: 599,
        rating: 4.2,
        category: "Clothing",
        stock: 100,
        image: "https://loremflickr.com/600/600/mens,tshirt",
        description: "Soft cotton casual t-shirt suitable for everyday wear."
    },
    {
        title: "Men's Denim Jacket",
        price: 1999,
        rating: 4.5,
        category: "Clothing",
        stock: 35,
        image: "https://loremflickr.com/600/600/denim,jacket",
        description: "Classic denim jacket with a comfortable regular fit."
    },
    {
        title: "Slim Fit Jeans",
        price: 1499,
        rating: 4.4,
        category: "Clothing",
        stock: 62,
        image: "https://loremflickr.com/600/600/jeans,denim",
        description: "Modern slim-fit jeans made from stretch denim."
    },
    {
        title: "Cotton Hoodie",
        price: 1299,
        rating: 4.6,
        category: "Clothing",
        stock: 44,
        image: "https://loremflickr.com/600/600/hoodie",
        description: "Warm cotton hoodie with a soft inner lining."
    },
    {
        title: "Running Shoes",
        price: 2499,
        rating: 4.7,
        category: "Footwear",
        stock: 39,
        image: "https://loremflickr.com/600/600/running,shoes",
        description: "Lightweight running shoes designed for comfort and daily training."
    },
    {
        title: "Classic Sneakers",
        price: 1799,
        rating: 4.5,
        category: "Footwear",
        stock: 51,
        image: "https://loremflickr.com/600/600/sneakers",
        description: "Versatile sneakers suitable for casual everyday outfits."
    },
    {
        title: "Sports Sandals",
        price: 999,
        rating: 4.1,
        category: "Footwear",
        stock: 34,
        image: "https://loremflickr.com/600/600/sports,sandals",
        description: "Comfortable sports sandals designed for outdoor activities."
    },
    {
        title: "Leather Formal Shoes",
        price: 2999,
        rating: 4.6,
        category: "Footwear",
        stock: 22,
        image: "https://loremflickr.com/600/600/leather,formal,shoes",
        description: "Premium leather formal shoes for office and special occasions."
    },
    {
        title: "Ceramic Coffee Mug",
        price: 399,
        rating: 4.3,
        category: "Home",
        stock: 90,
        image: "https://loremflickr.com/600/600/ceramic,mug",
        description: "Minimal ceramic coffee mug with a comfortable handle."
    },
    {
        title: "Stainless Steel Water Bottle",
        price: 699,
        rating: 4.5,
        category: "Home",
        stock: 73,
        image: "https://loremflickr.com/600/600/steel,waterbottle",
        description: "Insulated stainless steel bottle that keeps drinks hot or cold."
    },
    {
        title: "LED Desk Lamp",
        price: 1099,
        rating: 4.4,
        category: "Home",
        stock: 41,
        image: "https://loremflickr.com/600/600/led,desklamp",
        description: "Adjustable LED desk lamp with multiple brightness levels."
    },
    {
        title: "Modern Wall Clock",
        price: 899,
        rating: 4.2,
        category: "Home",
        stock: 29,
        image: "https://loremflickr.com/600/600/wallclock",
        description: "Minimal modern wall clock designed for home and office spaces."
    },
    {
        title: "Memory Foam Pillow",
        price: 1299,
        rating: 4.6,
        category: "Home",
        stock: 48,
        image: "https://loremflickr.com/600/600/pillow,bedroom",
        description: "Ergonomic memory foam pillow designed for comfortable sleep."
    },
    {
        title: "Cotton Bedsheet Set",
        price: 1799,
        rating: 4.5,
        category: "Home",
        stock: 36,
        image: "https://loremflickr.com/600/600/bedsheet,bedding",
        description: "Soft breathable cotton bedsheet set with matching pillow covers."
    },
    {
        title: "Face Moisturizer",
        price: 549,
        rating: 4.3,
        category: "Beauty",
        stock: 65,
        image: "https://loremflickr.com/600/600/moisturizer,skincare",
        description: "Lightweight daily moisturizer suitable for normal skin."
    },
    {
        title: "Vitamin C Face Serum",
        price: 799,
        rating: 4.6,
        category: "Beauty",
        stock: 52,
        image: "https://loremflickr.com/600/600/serum,skincare",
        description: "Vitamin C serum formulated for brighter and healthier-looking skin."
    },
    {
        title: "Shampoo For Daily Use",
        price: 449,
        rating: 4.2,
        category: "Beauty",
        stock: 84,
        image: "https://loremflickr.com/600/600/shampoo,bottle",
        description: "Gentle daily-use shampoo suitable for regular hair care."
    },
    {
        title: "Beard Grooming Kit",
        price: 999,
        rating: 4.4,
        category: "Beauty",
        stock: 33,
        image: "https://loremflickr.com/600/600/beard,grooming",
        description: "Complete beard grooming kit with essential care products."
    },
    {
        title: "Perfume Eau De Parfum",
        price: 1599,
        rating: 4.5,
        category: "Beauty",
        stock: 28,
        image: "https://loremflickr.com/600/600/perfume,bottle",
        description: "Long-lasting fragrance with a fresh and sophisticated scent."
    },
    {
        title: "Yoga Mat",
        price: 699,
        rating: 4.5,
        category: "Sports",
        stock: 58,
        image: "https://loremflickr.com/600/600/yogamat",
        description: "Non-slip yoga mat suitable for yoga, stretching and home workouts."
    },
    {
        title: "Adjustable Dumbbells",
        price: 3499,
        rating: 4.6,
        category: "Sports",
        stock: 17,
        image: "https://loremflickr.com/600/600/dumbbells",
        description: "Adjustable dumbbells for strength training at home."
    },
    {
        title: "Football",
        price: 899,
        rating: 4.4,
        category: "Sports",
        stock: 45,
        image: "https://loremflickr.com/600/600/soccer,football",
        description: "Durable training football suitable for recreational and competitive play."
    },
    {
        title: "Cricket Bat",
        price: 2499,
        rating: 4.5,
        category: "Sports",
        stock: 24,
        image: "https://loremflickr.com/600/600/cricket,bat",
        description: "Balanced cricket bat designed for recreational and club-level cricket."
    },
    {
        title: "Resistance Bands Set",
        price: 799,
        rating: 4.3,
        category: "Sports",
        stock: 67,
        image: "https://loremflickr.com/600/600/resistance,bands,fitness",
        description: "Set of resistance bands for strength training and mobility exercises."
    },
    {
        title: "Wireless Earbuds Pro",
        price: 2999,
        rating: 4.6,
        category: "Electronics",
        stock: 43,
        image: "https://loremflickr.com/600/600/wireless,earbuds",
        description: "True wireless earbuds with noise isolation and a compact charging case."
    },
    {
        title: "Power Bank 20000mAh",
        price: 1499,
        rating: 4.4,
        category: "Electronics",
        stock: 56,
        image: "https://loremflickr.com/600/600/powerbank",
        description: "High-capacity power bank with fast charging support."
    },
    {
        title: "USB-C Hub",
        price: 1199,
        rating: 4.5,
        category: "Electronics",
        stock: 32,
        image: "https://loremflickr.com/600/600/usb,hub",
        description: "Multi-port USB-C hub with HDMI, USB and card reader support."
    },
    {
        title: "1080p Web Camera",
        price: 1799,
        rating: 4.3,
        category: "Electronics",
        stock: 26,
        image: "https://loremflickr.com/600/600/webcam",
        description: "Full HD webcam suitable for video calls, meetings and streaming."
    },
    {
        title: "Portable SSD 1TB",
        price: 6999,
        rating: 4.8,
        category: "Electronics",
        stock: 15,
        image: "https://loremflickr.com/600/600/ssd,harddrive",
        description: "Fast portable 1TB SSD for backups, media and everyday storage."
    }
];

try {
    await collection.insertMany(products);
} catch (error) {
    console.log(error.writeErrors[0].err.errInfo.details.schemaRulesNotSatisfied);
}

mongoose.disconnect();