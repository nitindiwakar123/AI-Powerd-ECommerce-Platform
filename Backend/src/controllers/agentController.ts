import agent from "../ai/agent.js";
import type { Request, Response } from "express";
import { chatWithShoppingAgentSchema } from "../validators/ai/ai.js";
import { safeParse } from "zod";

export const chatWithShoppingAgent = async (req: Request, res: Response) => {
    const { data, error } = safeParse(chatWithShoppingAgentSchema, req.body);

    if (error) {
        return res.status(400).json({ success: false, Error: "Invalid input!" });
    }

    const { message } = data;

    const result = await agent.invoke({
        messages: [
            {
                role: "user",
                content: message
            }
        ]
    });

    const messages = result.messages;

    const lastMessage = messages[messages.length - 1];

    return res.status(200).json({
        success: true,
        data: {
            message: lastMessage?.content,
        }
    });
}