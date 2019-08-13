import { Router } from "express";
import { createBus, getBus, getOneBus, deleteBus } from "../controllers/bus.controller";

const router = Router();

// /api/bus/
router.post("/", createBus);
router.get("/", getBus);

// /api/bus/:busIid

router.get("/:bus_id", getOneBus);

router.patch("/:bus_id", deleteBus);

export default router;
