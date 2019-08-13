import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Asiento = sequelize.define("asiento", {
  asiento_data: {
    type: Sequelize.JSONB
  },
  asiento_pasajero_id: {
    type: Sequelize.INTEGER
  }
});
export default Asiento;
