import { Router } from "express";
import { getCart, updateCart } from "../controllers/cartController.js";

const router = Router();

router.route("/:id").get(getCart).patch(updateCart);

export default router;