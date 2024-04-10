import express from "express";
import { publishRideController } from "../controllers/publishRideController.js";

const router = express.Router();

//register request
router.post('/publish',publishRideController)


export default router;