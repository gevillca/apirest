import Pasajero from "../models/pasajero";

export async function getPasajero(req, res) {
  try {
    const pasajeros = await Pasajero.findAll({
      attributes:['pasajero_id','pasajero_data','pasajero_estado','pasajero_bus_id'],
      where:{
        pasajero_estado:'activo'
      },
      order:[
        ['pasajero_id','DESC']
      ]
    });
    res.json({ data: pasajeros });
  } catch (error) {
    console.log(error);
  }
}
export async function createPasajero(req, res) {
  const { pasajero_data, pasajero_bus_id } = req.body;
  let new_pasajero = await Pasajero.create(
    { pasajero_data, pasajero_bus_id },
    {
      fields: ["pasajero_data", "pasajero_bus_id"]
    }
  );
  if (new_pasajero) {
    res.json({
      message: "pasajero creado correctamente",
      data: new_pasajero
    });
  }
}
export async function getOnePasajero(req, res) {
  const { pasajero_id } = req.params;
  const pasajero = await Pasajero.findOne({
    where: {
      pasajero_id
    }
  });
  res.json({ pasajero });
}
export async function deletePasajero(req, res) {
  const { pasajero_id } = req.params;
  const pasajeroDelOne = await Pasajero.findOne({
    where: {
      pasajero_id
    }
  });
  pasajeroDelOne.update({
    pasajero_estado: "inactivo"
  });
  res.json({
    message: "pasajero eliminado correctamente",
    data: pasajeroDelOne
  });
}
export async function updatePasajero(req, res) {
  const { pasajero_id } = req.params;
  const { pasajero_data, pasajero_bus_id } = req.body;
  const pasajeroUp = await Pasajero.findOne({
    where: {
      pasajero_id
    }
  });
  pasajeroUp.update({
    pasajero_data,
    pasajero_bus_id
  });
  res.json({
    message: "pasajero actualizado correctamente",
    data: pasajeroUp
  });
}
// export async function getPasajero(req,res){
// }
