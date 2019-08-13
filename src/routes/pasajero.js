import { Router } from "express";
import { getPasajero, createPasajero, getOnePasajero, deletePasajero, updatePasajero } from "../controllers/pasajero.controller";

const router = Router();

// /api/bus/
router.get("/", getPasajero);
router.post("/", createPasajero);

// /api/pasajeros/:busIid

router.get("/:pasajero_id", getOnePasajero);
router.patch("/:pasajero_id", deletePasajero);
router.put("/:pasajero_id", updatePasajero);

export default router;
