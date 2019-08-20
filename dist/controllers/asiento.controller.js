"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAsiento = getAsiento;
exports.createAsiento = createAsiento;
exports.getOneAsiento = getOneAsiento;
exports.deleteAsiento = deleteAsiento;
exports.updateAsiento = updateAsiento;
exports.getPasajeroAsiento = getPasajeroAsiento;

var _asiento = _interopRequireDefault(require("../models/asiento"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getAsiento(_x, _x2) {
  return _getAsiento.apply(this, arguments);
}

function _getAsiento() {
  _getAsiento = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var asientos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _asiento["default"].findAll({
              attributes: ["asiento_id", "asiento_data", "asiento_estado", "asiento_pasajero_id"],
              where: {
                asiento_estado: "activo"
              },
              order: [["asiento_id", "DESC"]]
            });

          case 2:
            asientos = _context.sent;
            res.json(asientos);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAsiento.apply(this, arguments);
}

function createAsiento(_x3, _x4) {
  return _createAsiento.apply(this, arguments);
}

function _createAsiento() {
  _createAsiento = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, asiento_data, asiento_pasajero_id, asiento;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, asiento_data = _req$body.asiento_data, asiento_pasajero_id = _req$body.asiento_pasajero_id;
            _context2.next = 3;
            return _asiento["default"].create({
              asiento_data: asiento_data,
              asiento_pasajero_id: asiento_pasajero_id
            }, {
              fields: ["asiento_data", "asiento_pasajero_id"]
            });

          case 3:
            asiento = _context2.sent;
            res.json({
              message: "asiento creado correctamente",
              data: asiento
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createAsiento.apply(this, arguments);
}

function getOneAsiento(_x5, _x6) {
  return _getOneAsiento.apply(this, arguments);
}

function _getOneAsiento() {
  _getOneAsiento = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var asiento_id, asiento;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            asiento_id = req.params.asiento_id;
            _context3.next = 3;
            return _asiento["default"].findOne({
              where: {
                asiento_id: asiento_id
              },
              attributes: ["asiento_id", "asiento_data"]
            });

          case 3:
            asiento = _context3.sent;
            res.json(asiento);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOneAsiento.apply(this, arguments);
}

function deleteAsiento(_x7, _x8) {
  return _deleteAsiento.apply(this, arguments);
}

function _deleteAsiento() {
  _deleteAsiento = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var asiento_id, asientoDelOne;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            asiento_id = req.params.asiento_id;
            _context4.next = 3;
            return _asiento["default"].findOne({
              where: {
                asiento_id: asiento_id
              }
            });

          case 3:
            asientoDelOne = _context4.sent;
            asientoDelOne.update({
              asiento_estado: "inactivo"
            });
            res.json({
              message: "asiento eliminado correctamente",
              data: asientoDelOne
            });

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteAsiento.apply(this, arguments);
}

function updateAsiento(_x9, _x10) {
  return _updateAsiento.apply(this, arguments);
}

function _updateAsiento() {
  _updateAsiento = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var asiento_id, _req$body2, asiento_data, asiento_pasajero_id, asientoUp;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            asiento_id = req.params.asiento_id;
            _req$body2 = req.body, asiento_data = _req$body2.asiento_data, asiento_pasajero_id = _req$body2.asiento_pasajero_id;
            _context5.next = 4;
            return _asiento["default"].findOne({
              where: {
                asiento_id: asiento_id
              }
            });

          case 4:
            asientoUp = _context5.sent;
            asientoUp.update({
              asiento_data: asiento_data,
              asiento_pasajero_id: asiento_pasajero_id
            });
            res.send(asientoUp);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updateAsiento.apply(this, arguments);
}

function getPasajeroAsiento(_x11, _x12) {
  return _getPasajeroAsiento.apply(this, arguments);
}

function _getPasajeroAsiento() {
  _getPasajeroAsiento = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var asiento_pasajero_id, asientoPasajero;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            asiento_pasajero_id = req.params.asiento_pasajero_id;
            _context6.next = 3;
            return _asiento["default"].findAll({
              where: {
                asiento_pasajero_id: asiento_pasajero_id
              }
            });

          case 3:
            asientoPasajero = _context6.sent;
            res.json(asientoPasajero);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getPasajeroAsiento.apply(this, arguments);
}