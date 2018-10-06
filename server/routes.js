import express from "express";
import * as userController from "./controllers/user";
const router = express.Router();


router.post("/register", userController.userSignup);
router.get("/login", userController.userLogin);

export default router;
