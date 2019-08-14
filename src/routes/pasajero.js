import { Router } from "express";
import { getPasajero, createPasajero, getOnePasajero, deletePasajero, updatePasajero, getPasajeroBus } from "../controllers/pasajero.controller";

const router = Router();

// /api/bus/
router.get("/", getPasajero);
router.post("/", createPasajero);


// /api/pasajeros/:busIid

router.get("/:pasajero_id", getOnePasajero);
router.patch("/:pasajero_id", deletePasajero);
router.put("/:pasajero_id", updatePasajero);

// /api/pasajeros/pasajero/bus/:pasajero_bus_id

router.get("/bus/:pasajero_bus_id", getPasajeroBus);

export default router;
