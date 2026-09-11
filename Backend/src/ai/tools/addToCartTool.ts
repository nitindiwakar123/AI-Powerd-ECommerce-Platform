import { tool } from "langchain";
import * as z from "zod";
import Cart from "../../model/Cart.js";

export const addToCartTool = tool(
    async ({ productId }, runtime) => {
        const userId = runtime.context?.userId;
        if (!productId) {
            return JSON.stringify({
                success: false,
                message: "productId is invalid!"
            });
        }

        await Cart.updateOne(
            { userId },
            { $push: { products: productId } },
            { upsert: true }).lean();

        return JSON.stringify({
            success: true,
            message: "cart updated"
        });
    },
    {
        name: "add_to_cart",
        description:
            "Adds a product to the user's shopping cart. Requires the user's ID and the product ID.",
        schema: z.object({
            productId: z.string().describe("The ID of the product to add"),
        }),
    }
)