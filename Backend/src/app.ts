import express from "express"
import 'dotenv/config'; 
import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
import cookieParser, {} from "cookie-parser";
import cartRoutes from "./routes/cartRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import agentRoutes from "./routes/agentRoutes.js";
import checkAuth from "./middlewares/authMiddleware.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";

await connectDB();

const app = express();

app.use(cors({
    origin: env.CLIENT_URL,
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/cart", checkAuth, cartRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/agent", checkAuth, agentRoutes);

app.use(globalErrorHandler);

app.listen(4000, () => {
    console.log("Server Started!");
});
