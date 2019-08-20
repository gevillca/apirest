"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Pasajero = _database.sequelize.define("pasajero", {
  pasajero_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  pasajero_data: {
    type: _sequelize["default"].JSONB
  },
  pasajero_registrado: {
    type: _sequelize["default"].DATE
  },
  pasajero_modificado: {
    type: _sequelize["default"].DATE
  },
  pasajero_estado: {
    type: _sequelize["default"].TEXT
  },
  pasajero_bus_id: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  freezeTableName: true,
  // define the table's name
  tableName: "pasajero"
});

var _default = Pasajero;
exports["default"] = _default;