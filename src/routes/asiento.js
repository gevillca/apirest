import { Router } from "express";
import {
  getAsiento,
  createAsiento,
  getOneAsiento,
  deleteAsiento,
  updateAsiento,
  getPasajeroAsiento
} from "../controllers/asiento.controller";

const router = Router();

router.get("/", getAsiento);
router.post("/", createAsiento);

// router.get("/:bus_id", getOneBus);
router.get("/:asiento_id", getOneAsiento);
router.patch("/:asiento_id", deleteAsiento);
router.put("/:asiento_id", updateAsiento);


router.get("/pasajero/:asiento_pasajero_id", getPasajeroAsiento);

export default router;
