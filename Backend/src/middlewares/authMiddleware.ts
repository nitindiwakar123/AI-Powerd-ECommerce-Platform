import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import type { Request, Response, NextFunction } from "express";

export type AuthPayload = {
    userId: string,
    name: string,
    email: string
}

function isAuthPayload(value: unknown): value is AuthPayload {
    // verify value is an object else return false
    if (typeof value !== "object" || value === null) {
        return false;
    }

    // verify value object contains userId, name, email properties else return false
    if (!("userId" in value) || !("name" in value) || !("email" in value)) {
        return false;
    }

    // verify userId, name and email are string type else return false
    if (typeof value.userId !== "string" || typeof value.name !== "string" || typeof value.email !== "string") {
        return false;
    }

    return true;
}

async function checkAuth(req: Request, res: Response, next: NextFunction) {
    const { token } = req.cookies;

    if (!token) {
        return res.status(400).json({ success: false, Error: "user is not authenticated" });
    }

    try {
        const secret = env.jwtSecret || "nitin-diwakar";
        const decoded: unknown = jwt.verify(token, secret);

        if (!isAuthPayload(decoded)) return res.status(400).json({ success: false, Error: "Invalid token" });

        req.user = decoded;

        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
}

export default checkAuth;