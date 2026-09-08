import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { createAgent } from "langchain";
import { env } from "../config/env.js";
import { searchProductsTool } from "./tools/searchProductsTool.js";
import { getProductTool } from "./tools/getProductTool.js";

const apikey = env.geminiApiKey || "";

const model = new ChatGoogleGenerativeAI({
    model: "gemini-3.5-flash-lite",
    apiKey: apikey,
});

const agent = createAgent({
    model,
    tools: [searchProductsTool, getProductTool],
    systemPrompt: `
You are an AI shopping assistant for an ecommerce store.

Your job is to help users find products.

Rules:

1. Always use search_products when the user asks to find or search products.
2. Never invent product information.
3. Only recommend products returned by the tools.
4. When showing products, mention:
   - title
   - price
   - rating
5. If the user asks for details about a specific product, use get_product.
6. Keep responses concise and useful.
`
});

export default agent;
