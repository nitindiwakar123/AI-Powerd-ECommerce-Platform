import { model, Schema } from "mongoose";

const productSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required!"]
    },
    price: {
        type: Number,
        required: [true, "price is required!"]
    },
    rating: {
        type: Number,
        required: [true, "rating is required!"]
    },
    category: {
        type: String,
        required: [true, "Category is required!"]
    },
    stock: {
        type: Number,
        required: [true, "stock is a required field!"]
    },
    image: {
        type: String,
        required: [true, "image is a required field!"]
    },
    description: {
        type: String,
        required: [true, "description is required!"]
    }
},
    {
        strict: "throw",
        timestamps: true
    }
);

const Product = model("Product", productSchema);

export default Product;
