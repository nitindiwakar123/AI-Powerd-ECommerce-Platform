import {Router} from "express";
import { chatWithShoppingAgent } from "../controllers/agentController.js";

const router = Router();

router.route("/chat").post(chatWithShoppingAgent);

export default router;