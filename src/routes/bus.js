import { Router } from "express";
import { createBus, getBus, getOneBus } from "../controllers/bus.controller";

const router = Router();

// /api/bus/
router.post("/", createBus);
router.get("/", getBus);

// /api/bus/:busIid

router.get("/:bus_id", getOneBus);

export default router;
