import * as z from "zod";

export const chatWithShoppingAgentSchema = z.object({
    message: z.string()
});

export const contextSchema = z.object({
    userId: z.string()
});