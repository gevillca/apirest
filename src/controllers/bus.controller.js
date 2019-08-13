import Bus from "../models/bus";

export async function createBus(req, res) {
  try {
    const { bus_data, bus_empresa_id } = req.body;
    // console.log("data llegada",bus_data,bus_empresa_id)
    
      console.log(req.body);
    //   res.send("valor creado");
    let newbus = await Bus.create(
      {
        bus_data:bus_data,
        bus_empresa_id:bus_empresa_id
      },
      { fields: ['bus_data', 'bus_empresa_id'] }
    );
    console.log(newbus)
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
