import {tool} from "langchain";
import * as z from "zod";
import { searchProducts } from "../../services/product.service.js";

export const searchProductsTool = tool(
    async ({
        query,
        category,
        maxPrice,
        minPrice,
        minRating
    }) => {
        const products = await searchProducts({
            query,
            category,
            maxPrice,
            minPrice,
            minRating
        });

        return JSON.stringify({
            success: true,
            products
        });
    },
    {
        name: "search_products",

        description:
            "Search products in the ecommerce store using keywords, category, price and rating filters.",

        schema: z.object({

            query: z
                .string()
                .optional()
                .describe("Product keywords such as laptop, shoes, phone"),

            category: z
                .string()
                .optional()
                .describe("Product category"),

            maxPrice: z
                .number()
                .optional()
                .describe("Maximum product price"),

            minPrice: z
                .number()
                .optional()
                .describe("Minimum product price"),

            minRating: z
                .number()
                .optional()
                .describe("Minimum rating, for example 4")
        })
    }
);
