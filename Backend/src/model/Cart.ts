import { model, Schema } from "mongoose";

const cartSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            unique: true,
            required: [true, "userId is a required field!"]
        },
        products: {
            type: [
                { type: Schema.Types.ObjectId, ref: "Product" }
            ],
            required: [true, "products is required!"]
        }
    },
    {
        strict: "throw",
        timestamps: true
    }
);

const Cart = model("Cart", cartSchema);

export default Cart;