"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPasajero = getPasajero;
exports.createPasajero = createPasajero;
exports.getOnePasajero = getOnePasajero;
exports.deletePasajero = deletePasajero;
exports.updatePasajero = updatePasajero;
exports.getPasajeroBus = getPasajeroBus;
exports.getNamePasajero = getNamePasajero;

var _pasajero = _interopRequireDefault(require("../models/pasajero"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getPasajero(_x, _x2) {
  return _getPasajero.apply(this, arguments);
}

function _getPasajero() {
  _getPasajero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var pasajeros;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _pasajero["default"].findAll({
              attributes: ["pasajero_id", "pasajero_data", "pasajero_estado", "pasajero_bus_id"],
              where: {
                pasajero_estado: "activo"
              },
              order: [["pasajero_id", "DESC"]]
            });

          case 3:
            pasajeros = _context.sent;
            res.json({
              data: pasajeros
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getPasajero.apply(this, arguments);
}

function createPasajero(_x3, _x4) {
  return _createPasajero.apply(this, arguments);
}

function _createPasajero() {
  _createPasajero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, pasajero_data, pasajero_bus_id, new_pasajero;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, pasajero_data = _req$body.pasajero_data, pasajero_bus_id = _req$body.pasajero_bus_id;
            _context2.next = 3;
            return _pasajero["default"].create({
              pasajero_data: pasajero_data,
              pasajero_bus_id: pasajero_bus_id
            }, {
              fields: ["pasajero_data", "pasajero_bus_id"]
            });

          case 3:
            new_pasajero = _context2.sent;

            if (new_pasajero) {
              res.json({
                message: "pasajero creado correctamente",
                data: new_pasajero
              });
            }

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createPasajero.apply(this, arguments);
}

function getOnePasajero(_x5, _x6) {
  return _getOnePasajero.apply(this, arguments);
}

function _getOnePasajero() {
  _getOnePasajero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var pasajero_id, pasajero;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            pasajero_id = req.params.pasajero_id;
            _context3.next = 3;
            return _pasajero["default"].findOne({
              where: {
                pasajero_id: pasajero_id
              }
            });

          case 3:
            pasajero = _context3.sent;
            res.json({
              pasajero: pasajero
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOnePasajero.apply(this, arguments);
}

function deletePasajero(_x7, _x8) {
  return _deletePasajero.apply(this, arguments);
}

function _deletePasajero() {
  _deletePasajero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var pasajero_id, pasajeroDelOne;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            pasajero_id = req.params.pasajero_id;
            _context4.next = 3;
            return _pasajero["default"].findOne({
              where: {
                pasajero_id: pasajero_id
              }
            });

          case 3:
            pasajeroDelOne = _context4.sent;
            pasajeroDelOne.update({
              pasajero_estado: "inactivo"
            });
            res.json({
              message: "pasajero eliminado correctamente",
              data: pasajeroDelOne
            });

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deletePasajero.apply(this, arguments);
}

function updatePasajero(_x9, _x10) {
  return _updatePasajero.apply(this, arguments);
}

function _updatePasajero() {
  _updatePasajero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var pasajero_id, _req$body2, pasajero_data, pasajero_bus_id, pasajeroUp;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            pasajero_id = req.params.pasajero_id;
            _req$body2 = req.body, pasajero_data = _req$body2.pasajero_data, pasajero_bus_id = _req$body2.pasajero_bus_id;
            _context5.next = 4;
            return _pasajero["default"].findOne({
              where: {
                pasajero_id: pasajero_id
              }
            });

          case 4:
            pasajeroUp = _context5.sent;
            pasajeroUp.update({
              pasajero_data: pasajero_data,
              pasajero_bus_id: pasajero_bus_id
            });
            res.json({
              message: "pasajero actualizado correctamente",
              data: pasajeroUp
            });

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updatePasajero.apply(this, arguments);
}

function getPasajeroBus(_x11, _x12) {
  return _getPasajeroBus.apply(this, arguments);
}

function _getPasajeroBus() {
  _getPasajeroBus = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var pasajero_bus_id, pasajeroBus;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            pasajero_bus_id = req.params.pasajero_bus_id;
            _context6.next = 3;
            return _pasajero["default"].findAll({
              attributes: ["pasajero_id", "pasajero_data", "pasajero_estado", "pasajero_bus_id"],
              where: {
                pasajero_bus_id: pasajero_bus_id
              }
            });

          case 3:
            pasajeroBus = _context6.sent;
            res.json(pasajeroBus);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getPasajeroBus.apply(this, arguments);
}

function getNamePasajero(_x13, _x14) {
  return _getNamePasajero.apply(this, arguments);
}

function _getNamePasajero() {
  _getNamePasajero = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res) {
    var nombre, namePasajero;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            nombre = req.params.nombre; // const { pasajero_data } = req.body;
            // reference->"$.orderItemId" = 2
            //    sequelize.literal('facebook->"$.id"'),

            _context7.next = 3;
            return findOne({
              where: {
                "pasajero_data.nombre": {
                  nombre: nombre
                }
              }
            });

          case 3:
            namePasajero = _context7.sent;
            res.json(namePasajero);

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getNamePasajero.apply(this, arguments);
}