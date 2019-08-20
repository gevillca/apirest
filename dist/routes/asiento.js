"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _asiento = require("../controllers/asiento.controller");

var router = (0, _express.Router)();
router.get("/", _asiento.getAsiento);
router.post("/", _asiento.createAsiento); // router.get("/:bus_id", getOneBus);

router.get("/:asiento_id", _asiento.getOneAsiento);
router.patch("/:asiento_id", _asiento.deleteAsiento);
router.put("/:asiento_id", _asiento.updateAsiento);
router.get("/pasajero/:asiento_pasajero_id", _asiento.getPasajeroAsiento);
var _default = router;
exports["default"] = _default;