import * as z from "zod";
import { tool } from "langchain";

import Product from "../../model/Product.js";

export const getProductTool = tool(
    async ({ productId }) => {
        const product = await Product.findById(productId).select("title price rating category stock image description").lean();

        if (!product) {
            return JSON.stringify({
                success: false,
                message: "Prodcut not found!"
            });
        }

        return JSON.stringify({
            success: true,
            product
        });
    },
    {
        name: "get_product",

        description:
            "Get detailed information about a specific product using its product ID.",

        schema: z.object({
            productId: z
                .string()
                .describe("MongoDB objectId of the product")
        })
    }
)