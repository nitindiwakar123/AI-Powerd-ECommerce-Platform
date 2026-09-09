import Product from "../model/Product.js";
import type { Request, Response } from "express";

export const getAllProducts = async (req: Request, res: Response) => {
    const products = await Product.find().lean();
    return res.status(200).json({
        success: true, data: {
            products
        }
    });
}