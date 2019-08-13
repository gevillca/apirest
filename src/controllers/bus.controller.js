import Bus from "../models/bus";

export async function getBus(req, res) {
  try {
    const buses = await Bus.findAll({
      attributes: ["bus_id", "bus_data", "bus_estado", "bus_empresa_id"],
      where: {
        bus_estado: "activo"
      },
      order: [["bus_id", "DESC"]]
    });
    res.json({
      data: buses
    });
  } catch (error) {
    console.log(error);
  }
}
export async function createBus(req, res) {
  try {
    const { bus_data, bus_empresa_id } = req.body;
    // console.log("data llegada",bus_data,bus_empresa_id)

    console.log(req.body);
    //   res.send("valor creado");
    let newbus = await Bus.create(
      {
        bus_data,
        bus_empresa_id
      },
      { fields: ["bus_data", "bus_empresa_id"] }
    );
    console.log(newbus);
    if (newbus) {
      res.json({
        message: "Bus creado correctamente",
        data: newbus
      });
    }
  } catch (error) {
    console.log(error);
  }
}
export async function getOneBus(req, res) {
  const { bus_id } = req.params;

  const busOne = await Bus.findOne({
    where: {
      bus_id
    }
  });
  res.json({ data: busOne });
}

export async function deleteBus(req, res) {
  const { bus_id } = req.params;
  // const { bus_estado } = req.body;
  const busDelOne = await Bus.findOne({
    where: {
      bus_id
    }
  });
  busDelOne.update({
    bus_estado: "inactivo"
  });
  res.json(busDelOne);
}

export async function updateBus(req, res) {
  const { bus_id } = req.params;
  const { bus_data, bus_empresa_id } = req.body;

  const busUpdate = await Bus.findOne({
    // attributes: ["bus_data", "bus_empresa_id"],
    where: {
      bus_id
    }
  });

  busUpdate.update({
    bus_data,
    bus_empresa_id
  });
  return res.json({
    message: "bus actualizado",
    data: busUpdate
  });
}
