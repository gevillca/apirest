"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _bus = _interopRequireDefault(require("./bus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Empresa = _database.sequelize.define("empresa", {
  empresa_data: {
    type: _sequelize["default"].JSONB
  }
}); // Empresa.hasMany(Bus, { foreingKey: "bus_empresa_id", sourcekey: "empresa_id" });
// Bus.belongsTo(Empresa, {
//   foreingKey: "empresa_id",
//   sourcekey: "bus_empresa_id"
// });


var _default = Empresa;
exports["default"] = _default;