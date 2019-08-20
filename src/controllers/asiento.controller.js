import Asiento from "../models/asiento";

export async function getAsiento(req, res) {
  const asientos = await Asiento.findAll({
    attributes: [
      "asiento_id",
      "asiento_data",
      "asiento_estado",
      "asiento_pasajero_id"
    ],
    where: {
      asiento_estado: "activo"
    },
    order: [["asiento_id", "DESC"]]
  });
  res.json(asientos);
}
export async function createAsiento(req, res) {
  const { asiento_data, asiento_pasajero_id } = req.body;
  const asiento = await Asiento.create(
    {
      asiento_data,
      asiento_pasajero_id
    },
    { fields: ["asiento_data", "asiento_pasajero_id"] }
  );
  res.json({
    message: "asiento creado correctamente",
    data: asiento
  });
}
export async function getOneAsiento(req, res) {
  const { asiento_id } = req.params;
  const asiento = await Asiento.findOne({
    where: { asiento_id },
    attributes: ["asiento_id", "asiento_data"]
  });
  res.json(asiento);
}

export async function deleteAsiento(req, res) {
  const { asiento_id } = req.params;
  const asientoDelOne = await Asiento.findOne({
    where: {
      asiento_id
    }
  });
  asientoDelOne.update({
    asiento_estado: "inactivo"
  });
  res.json({
    message: "asiento eliminado correctamente",
    data: asientoDelOne
  });
}

export async function updateAsiento(req, res) {
  const { asiento_id } = req.params;
  const { asiento_data, asiento_pasajero_id } = req.body;
  const asientoUp = await Asiento.findOne({
    where: { asiento_id }
  });
  asientoUp.update({
    asiento_data,
    asiento_pasajero_id
  });
  res.send(asientoUp);
}
export async function getPasajeroAsiento(req, res) {
  const { asiento_pasajero_id } = req.params;
  const asientoPasajero = await Asiento.findAll({
    where: {
      asiento_pasajero_id
    }
  });
  res.json(asientoPasajero);
}
