import Sequelize from "sequelize";
import { sequelize } from "../database/database";
// import Pasajero from "./pasajero";

const Bus = sequelize.define(
  "bus",
  {
    bus_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    bus_data: {
      type: Sequelize.JSONB
    },
    bus_registrado: {
      type: Sequelize.DATE
    },
    bus_modificado: {
      type: Sequelize.DATE
    },
    bus_estado: {
      type: Sequelize.TEXT
    },
    bus_empresa_id: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false,
    tableName: "bus"
  }
);

// Bus.hasMany(Pasajero, { foreingKey: "pasajero_bus_id", sourcekey: "bus_id" });
// Pasajero.belongsTo(Bus, { foreingKey: "pasajero_bus_id", sourcekey: "bus_id" });

export default Bus;

