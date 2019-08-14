"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Pasajero from "./pasajero";
var Bus = _database.sequelize.define("bus", {
  bus_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  bus_data: {
    type: _sequelize["default"].JSONB
  },
  bus_registrado: {
    type: _sequelize["default"].DATE
  },
  bus_modificado: {
    type: _sequelize["default"].DATE
  },
  bus_estado: {
    type: _sequelize["default"].TEXT
  },
  bus_empresa_id: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  tableName: "bus"
}); // Bus.hasMany(Pasajero, { foreingKey: "pasajero_bus_id", sourcekey: "bus_id" });
// Pasajero.belongsTo(Bus, { foreingKey: "pasajero_bus_id", sourcekey: "bus_id" });


var _default = Bus;
exports["default"] = _default;