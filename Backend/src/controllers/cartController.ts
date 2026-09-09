import Cart from "../model/Cart.js"
import type { Request, Response } from "express";
import { updateCartSchema } from "../validators/cart/cart.js";
import { safeParse } from "zod";

export const getCart = async (req: Request, res: Response) => {
    const cartId = req.params.id;
    if(!cartId) return res.status(404).json({success: false, Error: "Cart not found!"});

    const cart = await Cart.findById(cartId).populate('products').lean();

    return res.status(200).json({success: true, data: cart});
}

export const updateCart = async (req: Request, res: Response) => {
    const {data, error} = safeParse(updateCartSchema, req.body);
    const cartId = req.params?.id;

    if(error) {
      return res.status(400).json({success: false, error: "product id is invalid!"});
    }

    const productId = data;

    await Cart.findByIdAndUpdate(cartId, {products: {$push: productId}});

    return res.status(200).json({success: true, data: {
        message: "cart updated!"
    }});
}
