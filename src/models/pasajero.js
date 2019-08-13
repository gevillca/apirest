import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Pasajero = sequelize.define("pasajero", {
  pasajero_id: {
    type: Sequelize.INTEGER,
    primaryKey:true
  },
  pasajero_data: {
    type: Sequelize.JSONB
  },
  pasajero_registrado: {
    type: Sequelize.DATE
  },
  pasajero_modificado: {
    type: Sequelize.DATE
  },
  pasajero_estado: {
    type: Sequelize.TEXT
  },
  pasajero_bus_id: {
    type: Sequelize.INTEGER
  }
},{
  timestamps:false
});

export default Pasajero;
