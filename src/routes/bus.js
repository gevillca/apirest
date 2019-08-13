import { Router } from "express";
import { createBus } from "../controllers/bus.controller";

const router = Router();

// /api/bus/
router.post("/", createBus);

export default router;
