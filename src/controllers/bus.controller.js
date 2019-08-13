import Bus from "../models/bus";
import { log } from "util";

export async function getBus(req, res) {
  const buses = await Bus.findAll();
  res.json({
    data: buses
  });
}
export async function createBus(req, res) {
  try {
    const { bus_data, bus_empresa_id } = req.body;
    // console.log("data llegada",bus_data,bus_empresa_id)

    console.log(req.body);
    //   res.send("valor creado");
    let newbus = await Bus.create(
      {
        bus_data: bus_data,
        bus_empresa_id: bus_empresa_id
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
    bus_estado:'inactivo'
  });
  res.json(busDelOne);
}

export async function updateBus(req,res){
  const {bus_id}=req.params;
  const {bus_data,bus_empresa_id}=req.body;

  const bosUpd= await Bus.findAll({
    where:{
      bus_id
    }
  })
  

}
