import express from "express"
import { connectDB } from "./config/db.js";
import { env } from "./config/env.js";
import { config } from "dotenv";
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

config();

app.use(cors({
    origin: env.clientUrl,
}));

app.use(cookieParser());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/cart", checkAuth, cartRoutes);
app.use("/api/products", checkAuth, productsRoutes);
app.use("/api/agent", checkAuth, agentRoutes);

app.use(globalErrorHandler);

app.listen(4000, () => {
    console.log("Server Started!");
});
