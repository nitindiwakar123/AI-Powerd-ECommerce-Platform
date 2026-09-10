import * as z from "zod";

const envSchema = z.object({
    PORT: z.string().transform((val) => parseInt(val, 1000)).default(4000),
    CLIENT_URL: z.url("CLIENT_URL must be a valid connection string!"),
    DB_URL: z.url("DB_URL must be a valid connection string!"),
    JWT_SECRET: z.string("JWT_SECRET must be a valid password!"),
    GEMINI_API_KEY: z.string("Gemini_API_KEY must be valid string"),
});

const _env = envSchema.safeParse(process.env);

if(!_env.success) {
    console.error("Invalid enviroment variables", _env.error);
    process.exit(1);
}

export const env = _env.data;