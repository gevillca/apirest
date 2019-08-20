"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Asiento = _database.sequelize.define("asiento", {
  asiento_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  asiento_data: {
    type: _sequelize["default"].JSONB
  },
  asiento_registrado: {
    type: _sequelize["default"].DATE
  },
  asiento_modificado: {
    type: _sequelize["default"].DATE
  },
  asiento_estado: {
    type: _sequelize["default"].TEXT
  },
  asiento_pasajero_id: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  tableName: "asiento"
});

var _default = Asiento;
exports["default"] = _default;