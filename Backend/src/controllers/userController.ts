import User from "../model/User.js";
import jwt from "jsonwebtoken";
import {env} from "../config/env.js";
import mongoose from "mongoose";
import type { Request, Response, NextFunction } from "express";
import { loginSchema, registerSchema } from "../validators/auth/auth.js";
import { safeParse } from "zod";

export const getCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;

    return res.status(200).json({success: true, user});
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const {success, data, error} = safeParse(loginSchema, req.body);

    if(error) {
        return res.status(400).json({success: false, Error: "Invalid Credentials"});
    }

    const {email, password} = data;

    const user = await User.findOne({email, password}).select("email password").lean();

    if(!user) {
        return res.status(401).json({success: false, Error: "user not found"});
    }

    const secret = env.jwtSecret || "";

    const token = jwt.sign(user, secret);
    
    res.cookie('token', token, {
        maxAge: 60 * 60 * 24 * 7 * 1000,
        httpOnly: true,
        secure: true
    });

    return res.status(200).json({success: true, message: "Logged in successfully"});
}

export const register = async (req: Request, res: Response, next: NextFunction) => {
    const {success, data, error} = safeParse(registerSchema, req.body);

    if(error) {
        return res.status(400).json({success: false, Error: "Invalid Credentials"});
    }

    const {name, email, password} = data;

    const user = {
        _id: new mongoose.Types.ObjectId(),
        name,
        email,
        password
    }

    await User.create(user);

    return res.status(201).json({success: true, message: "user created successfully"});
}

export const logout = async (req: Request, res: Response) => {
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    return res.status(200).json({ message: 'Logged out successfully' });
};