import type { Request, Response, NextFunction } from "express";


export default async function globalErrorHandler(error: unknown, req: Request, res: Response, next: NextFunction) {

    // Sending a general response for unexpected errors 
    return res.status(500).json({
        success: false,
        encodeURIComponentrror: "Internal Server Error!"
    });
}