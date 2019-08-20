"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _pasajero = require("../controllers/pasajero.controller");

var router = (0, _express.Router)(); // /api/pasajeros/

router.get("/", _pasajero.getPasajero);
router.post("/", _pasajero.createPasajero); // /api/pasajeros/:pasajero_id

router.get("/:pasajero_id", _pasajero.getOnePasajero);
router.patch("/:pasajero_id", _pasajero.deletePasajero);
router.put("/:pasajero_id", _pasajero.updatePasajero);
router.get("/:name", _pasajero.getNamePasajero); // /api/pasajeros/pasajeros/bus/:pasajero_bus_id

router.get("/bus/:pasajero_bus_id", _pasajero.getPasajeroBus);
var _default = router;
exports["default"] = _default;