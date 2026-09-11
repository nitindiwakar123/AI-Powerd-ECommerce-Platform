import * as z from "zod";

export const updateCartSchema = z.object({
    productId: z.string(),
});