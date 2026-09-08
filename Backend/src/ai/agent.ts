import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { createAgent, tool } from "langchain";
import { env } from "../config/env.js";
import Product from "../model/Product.js";
import * as z from "zod";

const apikey = env.geminiApiKey || "";

const llm = new ChatGoogleGenerativeAI({
    model: "gemini-3.5-flash-lite",
    apiKey: apikey,
});

const getWeather = tool(
    (city: string) => `It is always sunny in ${city}!`,
    {
        name: "get_weather",
        description: "get the weather details of given city",
        schema: z.string().describe("The city to get weather for")
    }
);

interface Product {
    title: string,
    price: number,
    rating: number,
    description: string
}


const getProducts = tool(
    async ({query}: {}): Promise<Product[]> => {
        const products = await Product.find({query}).select("title price rating category stock description").limit(5).lean();

        return products;
    },
    {
        name: "get_products",
        description: "get the products ",
        schema: z.string().describe("The city to get weather for")
    }
)

const agent = createAgent({
    model: "gemini-3.5-flash-lite",
    tools: [getWeather],
})

