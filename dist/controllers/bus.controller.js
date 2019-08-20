"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBus = getBus;
exports.createBus = createBus;
exports.getOneBus = getOneBus;
exports.deleteBus = deleteBus;
exports.updateBus = updateBus;

var _bus = _interopRequireDefault(require("../models/bus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getBus(_x, _x2) {
  return _getBus.apply(this, arguments);
}

function _getBus() {
  _getBus = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var buses;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _bus["default"].findAll({
              attributes: ["bus_id", "bus_data", "bus_estado", "bus_empresa_id"],
              where: {
                bus_estado: "activo"
              },
              order: [["bus_id", "DESC"]]
            });

          case 3:
            buses = _context.sent;
            res.json({
              data: buses
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
  return _getBus.apply(this, arguments);
}

function createBus(_x3, _x4) {
  return _createBus.apply(this, arguments);
}

function _createBus() {
  _createBus = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, bus_data, bus_empresa_id, newbus;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, bus_data = _req$body.bus_data, bus_empresa_id = _req$body.bus_empresa_id; // console.log("data llegada",bus_data,bus_empresa_id)

            console.log(req.body); //   res.send("valor creado");

            _context2.next = 5;
            return _bus["default"].create({
              bus_data: bus_data,
              bus_empresa_id: bus_empresa_id
            }, {
              fields: ["bus_data", "bus_empresa_id"]
            });

          case 5:
            newbus = _context2.sent;
            console.log(newbus);

            if (newbus) {
              res.json({
                message: "Bus creado correctamente",
                data: newbus
              });
            }

            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return _createBus.apply(this, arguments);
}

function getOneBus(_x5, _x6) {
  return _getOneBus.apply(this, arguments);
}

function _getOneBus() {
  _getOneBus = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var bus_id, busOne;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            bus_id = req.params.bus_id;
            _context3.next = 3;
            return _bus["default"].findOne({
              where: {
                bus_id: bus_id
              }
            });

          case 3:
            busOne = _context3.sent;
            res.json({
              data: busOne
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOneBus.apply(this, arguments);
}

function deleteBus(_x7, _x8) {
  return _deleteBus.apply(this, arguments);
}

function _deleteBus() {
  _deleteBus = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var bus_id, busDelOne;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            bus_id = req.params.bus_id; // const { bus_estado } = req.body;

            _context4.next = 3;
            return _bus["default"].findOne({
              where: {
                bus_id: bus_id
              }
            });

          case 3:
            busDelOne = _context4.sent;
            busDelOne.update({
              bus_estado: "inactivo"
            });
            res.json(busDelOne);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteBus.apply(this, arguments);
}

function updateBus(_x9, _x10) {
  return _updateBus.apply(this, arguments);
} // export async function getPasajeroBus(req,res){
//   const { }
// }


function _updateBus() {
  _updateBus = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var bus_id, _req$body2, bus_data, bus_empresa_id, busUpdate;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            bus_id = req.params.bus_id;
            _req$body2 = req.body, bus_data = _req$body2.bus_data, bus_empresa_id = _req$body2.bus_empresa_id;
            _context5.next = 4;
            return _bus["default"].findOne({
              // attributes: ["bus_data", "bus_empresa_id"],
              where: {
                bus_id: bus_id
              }
            });

          case 4:
            busUpdate = _context5.sent;
            busUpdate.update({
              bus_data: bus_data,
              bus_empresa_id: bus_empresa_id
            });
            return _context5.abrupt("return", res.json({
              message: "bus actualizado",
              data: busUpdate
            }));

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updateBus.apply(this, arguments);
}