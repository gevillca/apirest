"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _bus = require("../controllers/bus.controller");

var router = (0, _express.Router)(); // /api/bus/

router.post("/", _bus.createBus);
router.get("/", _bus.getBus); // /api/bus/:busIid

router.get("/:bus_id", _bus.getOneBus);
router.patch("/:bus_id", _bus.deleteBus);
router.put("/:bus_id", _bus.updateBus);
var _default = router;
exports["default"] = _default;