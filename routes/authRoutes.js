import express from "express";
import { registerController } from "../controllers/authController";

const router = express.Router();

//register request
router.post('/register',registerController)

//login request
router.post('/login',loginController);


//register request
router.post('/logout',logoutController);

export default router;