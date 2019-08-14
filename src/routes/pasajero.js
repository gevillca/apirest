import { Router } from "express";
import {
  getPasajero,
  createPasajero,
  getOnePasajero,
  deletePasajero,
  updatePasajero,
  getPasajeroBus,
  getNamePasajero
} from "../controllers/pasajero.controller";

const router = Router();

// /api/pasajeros/
router.get("/", getPasajero);
router.post("/", createPasajero);

// /api/pasajeros/:pasajero_id

router.get("/:pasajero_id", getOnePasajero);
router.patch("/:pasajero_id", deletePasajero);
router.put("/:pasajero_id", updatePasajero);

// router.get("/pasajero_id/:name", getNamePasajero);
// /api/pasajeros/pasajeros/bus/:pasajero_bus_id

router.get("/bus/:pasajero_bus_id", getPasajeroBus);

export default router;
