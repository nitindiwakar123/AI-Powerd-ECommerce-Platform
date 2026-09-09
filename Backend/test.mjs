import mongoose from "mongoose";

await mongoose.connect("mongodb://admin:Nitin2006@localhost:27017/Ecommerce-Platform?replicaSet=myReplicaSet&authSource=admin");

const db = mongoose.connection.db;

const collection = db.collection("products");


try {
    await collection.insertMany([
        {
            title: "Wireless Bluetooth Headphones",
            price: 2499,
            rating: 4.5,
            category: "Electronics",
            stock: 42,
            image: "https://picsum.photos/seed/headphones1/600/600",
            description: "Over-ear wireless headphones with deep bass and long battery life."
        },
        {
            title: "Mechanical Gaming Keyboard",
            price: 3299,
            rating: 4.7,
            category: "Electronics",
            stock: 25,
            image: "https://picsum.photos/seed/keyboard1/600/600",
            description: "RGB mechanical keyboard with tactile switches for gaming and productivity."
        },
        {
            title: "Wireless Gaming Mouse",
            price: 1899,
            rating: 4.4,
            category: "Electronics",
            stock: 38,
            image: "https://picsum.photos/seed/mouse1/600/600",
            description: "Ergonomic wireless gaming mouse with adjustable DPI."
        },
        {
            title: "Smart Watch Series X",
            price: 4999,
            rating: 4.3,
            category: "Electronics",
            stock: 18,
            image: "https://picsum.photos/seed/smartwatch1/600/600",
            description: "Smart watch with fitness tracking, notifications and heart-rate monitoring."
        },
        {
            title: "Portable Bluetooth Speaker",
            price: 1599,
            rating: 4.6,
            category: "Electronics",
            stock: 31,
            image: "https://picsum.photos/seed/speaker1/600/600",
            description: "Compact portable speaker with powerful sound and water resistance."
        },
        {
            title: "USB-C Fast Charger",
            price: 899,
            rating: 4.5,
            category: "Electronics",
            stock: 75,
            image: "https://picsum.photos/seed/charger1/600/600",
            description: "Fast USB-C charger compatible with smartphones, tablets and other devices."
        },
        {
            title: "Laptop Backpack",
            price: 1299,
            rating: 4.4,
            category: "Bags",
            stock: 55,
            image: "https://picsum.photos/seed/backpack1/600/600",
            description: "Water-resistant laptop backpack with multiple compartments."
        },
        {
            title: "Premium Leather Wallet",
            price: 799,
            rating: 4.2,
            category: "Accessories",
            stock: 80,
            image: "https://picsum.photos/seed/wallet1/600/600",
            description: "Compact leather wallet with multiple card and cash compartments."
        },
        {
            title: "Classic Analog Watch",
            price: 2199,
            rating: 4.5,
            category: "Accessories",
            stock: 27,
            image: "https://picsum.photos/seed/watch1/600/600",
            description: "Classic analog wristwatch with a minimalist premium design."
        },
        {
            title: "Polarized Sunglasses",
            price: 999,
            rating: 4.3,
            category: "Accessories",
            stock: 46,
            image: "https://picsum.photos/seed/sunglasses1/600/600",
            description: "Stylish polarized sunglasses offering UV protection."
        },

        {
            title: "Men's Casual T-Shirt",
            price: 599,
            rating: 4.2,
            category: "Clothing",
            stock: 100,
            image: "https://picsum.photos/seed/tshirt1/600/600",
            description: "Soft cotton casual t-shirt suitable for everyday wear."
        },
        {
            title: "Men's Denim Jacket",
            price: 1999,
            rating: 4.5,
            category: "Clothing",
            stock: 35,
            image: "https://picsum.photos/seed/jacket1/600/600",
            description: "Classic denim jacket with a comfortable regular fit."
        },
        {
            title: "Slim Fit Jeans",
            price: 1499,
            rating: 4.4,
            category: "Clothing",
            stock: 62,
            image: "https://picsum.photos/seed/jeans1/600/600",
            description: "Modern slim-fit jeans made from stretch denim."
        },
        {
            title: "Cotton Hoodie",
            price: 1299,
            rating: 4.6,
            category: "Clothing",
            stock: 44,
            image: "https://picsum.photos/seed/hoodie1/600/600",
            description: "Warm cotton hoodie with a soft inner lining."
        },
        {
            title: "Running Shoes",
            price: 2499,
            rating: 4.7,
            category: "Footwear",
            stock: 39,
            image: "https://picsum.photos/seed/runningshoes1/600/600",
            description: "Lightweight running shoes designed for comfort and daily training."
        },
        {
            title: "Classic Sneakers",
            price: 1799,
            rating: 4.5,
            category: "Footwear",
            stock: 51,
            image: "https://picsum.photos/seed/sneakers1/600/600",
            description: "Versatile sneakers suitable for casual everyday outfits."
        },
        {
            title: "Sports Sandals",
            price: 999,
            rating: 4.1,
            category: "Footwear",
            stock: 34,
            image: "https://picsum.photos/seed/sandals1/600/600",
            description: "Comfortable sports sandals designed for outdoor activities."
        },
        {
            title: "Leather Formal Shoes",
            price: 2999,
            rating: 4.6,
            category: "Footwear",
            stock: 22,
            image: "https://picsum.photos/seed/formalshoes1/600/600",
            description: "Premium leather formal shoes for office and special occasions."
        },

        {
            title: "Ceramic Coffee Mug",
            price: 399,
            rating: 4.3,
            category: "Home",
            stock: 90,
            image: "https://picsum.photos/seed/mug1/600/600",
            description: "Minimal ceramic coffee mug with a comfortable handle."
        },
        {
            title: "Stainless Steel Water Bottle",
            price: 699,
            rating: 4.5,
            category: "Home",
            stock: 73,
            image: "https://picsum.photos/seed/bottle1/600/600",
            description: "Insulated stainless steel bottle that keeps drinks hot or cold."
        },
        {
            title: "LED Desk Lamp",
            price: 1099,
            rating: 4.4,
            category: "Home",
            stock: 41,
            image: "https://picsum.photos/seed/desklamp1/600/600",
            description: "Adjustable LED desk lamp with multiple brightness levels."
        },
        {
            title: "Modern Wall Clock",
            price: 899,
            rating: 4.2,
            category: "Home",
            stock: 29,
            image: "https://picsum.photos/seed/wallclock1/600/600",
            description: "Minimal modern wall clock designed for home and office spaces."
        },
        {
            title: "Memory Foam Pillow",
            price: 1299,
            rating: 4.6,
            category: "Home",
            stock: 48,
            image: "https://picsum.photos/seed/pillow1/600/600",
            description: "Ergonomic memory foam pillow designed for comfortable sleep."
        },
        {
            title: "Cotton Bedsheet Set",
            price: 1799,
            rating: 4.5,
            category: "Home",
            stock: 36,
            image: "https://picsum.photos/seed/bedsheet1/600/600",
            description: "Soft breathable cotton bedsheet set with matching pillow covers."
        },

        {
            title: "Face Moisturizer",
            price: 549,
            rating: 4.3,
            category: "Beauty",
            stock: 65,
            image: "https://picsum.photos/seed/moisturizer1/600/600",
            description: "Lightweight daily moisturizer suitable for normal skin."
        },
        {
            title: "Vitamin C Face Serum",
            price: 799,
            rating: 4.6,
            category: "Beauty",
            stock: 52,
            image: "https://picsum.photos/seed/serum1/600/600",
            description: "Vitamin C serum formulated for brighter and healthier-looking skin."
        },
        {
            title: "Shampoo For Daily Use",
            price: 449,
            rating: 4.2,
            category: "Beauty",
            stock: 84,
            image: "https://picsum.photos/seed/shampoo1/600/600",
            description: "Gentle daily-use shampoo suitable for regular hair care."
        },
        {
            title: "Beard Grooming Kit",
            price: 999,
            rating: 4.4,
            category: "Beauty",
            stock: 33,
            image: "https://picsum.photos/seed/beardkit1/600/600",
            description: "Complete beard grooming kit with essential care products."
        },
        {
            title: "Perfume Eau De Parfum",
            price: 1599,
            rating: 4.5,
            category: "Beauty",
            stock: 28,
            image: "https://picsum.photos/seed/perfume1/600/600",
            description: "Long-lasting fragrance with a fresh and sophisticated scent."
        },

        {
            title: "Yoga Mat",
            price: 699,
            rating: 4.5,
            category: "Sports",
            stock: 58,
            image: "https://picsum.photos/seed/yogamat1/600/600",
            description: "Non-slip yoga mat suitable for yoga, stretching and home workouts."
        },
        {
            title: "Adjustable Dumbbells",
            price: 3499,
            rating: 4.6,
            category: "Sports",
            stock: 17,
            image: "https://picsum.photos/seed/dumbbells1/600/600",
            description: "Adjustable dumbbells for strength training at home."
        },
        {
            title: "Football",
            price: 899,
            rating: 4.4,
            category: "Sports",
            stock: 45,
            image: "https://picsum.photos/seed/football1/600/600",
            description: "Durable training football suitable for recreational and competitive play."
        },
        {
            title: "Cricket Bat",
            price: 2499,
            rating: 4.5,
            category: "Sports",
            stock: 24,
            image: "https://picsum.photos/seed/cricketbat1/600/600",
            description: "Balanced cricket bat designed for recreational and club-level cricket."
        },
        {
            title: "Resistance Bands Set",
            price: 799,
            rating: 4.3,
            category: "Sports",
            stock: 67,
            image: "https://picsum.photos/seed/resistance1/600/600",
            description: "Set of resistance bands for strength training and mobility exercises."
        },

        {
            title: "Wireless Earbuds Pro",
            price: 2999,
            rating: 4.6,
            category: "Electronics",
            stock: 43,
            image: "https://picsum.photos/seed/earbuds1/600/600",
            description: "True wireless earbuds with noise isolation and a compact charging case."
        },
        {
            title: "Power Bank 20000mAh",
            price: 1499,
            rating: 4.4,
            category: "Electronics",
            stock: 56,
            image: "https://picsum.photos/seed/powerbank1/600/600",
            description: "High-capacity power bank with fast charging support."
        },
        {
            title: "USB-C Hub",
            price: 1199,
            rating: 4.5,
            category: "Electronics",
            stock: 32,
            image: "https://picsum.photos/seed/usbhub1/600/600",
            description: "Multi-port USB-C hub with HDMI, USB and card reader support."
        },
        {
            title: "1080p Web Camera",
            price: 1799,
            rating: 4.3,
            category: "Electronics",
            stock: 26,
            image: "https://picsum.photos/seed/webcam1/600/600",
            description: "Full HD webcam suitable for video calls, meetings and streaming."
        },
        {
            title: "Portable SSD 1TB",
            price: 6999,
            rating: 4.8,
            category: "Electronics",
            stock: 15,
            image: "https://picsum.photos/seed/ssd1/600/600",
            description: "Fast portable 1TB SSD for backups, media and everyday storage."
        }
    ]);
} catch (error) {
    console.log(error.writeErrors[0].err.errInfo.details.schemaRulesNotSatisfied);
}

mongoose.disconnect();