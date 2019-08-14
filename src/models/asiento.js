import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Asiento = sequelize.define(
  "asiento",
  {
    asiento_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    asiento_data: {
      type: Sequelize.JSONB
    },
    asiento_registrado: {
      type: Sequelize.DATE
    },
    asiento_modificado: {
      type: Sequelize.DATE
    },
    asiento_estado: {
      type: Sequelize.TEXT
    },
    asiento_pasajero_id: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false,
    tableName: "asiento"
  }
);
export default Asiento;
