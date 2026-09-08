import { Router } from "express";
import { getCurrentUser, login, register } from "../controllers/userController.js";
import checkAuth from "../middlewares/authMiddleware.js";

const router = Router();

router.route("/").get(checkAuth, getCurrentUser);

router.route("/login").post(login);
router.route("/register").post(register);

export default router;