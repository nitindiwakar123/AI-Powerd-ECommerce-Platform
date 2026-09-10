import * as z from "zod";

export const loginSchema = z.object({
    email: z.email(),
    password: z.string()
});

export const registerSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string()
});

export const decodedSchema = z.object({
    _id: z.string("_id must be valid!"),
    email: z.email("email must be valid!"),
    name: z.string("name must be valid!"),
    iat: z.number("iat must be valid!"),
});