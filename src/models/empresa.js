import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Bus from "./bus";

const Empresa = sequelize.define("empresa", {
  empresa_data: {
    type: Sequelize.JSONB
  }
});

// Empresa.hasMany(Bus, { foreingKey: "bus_empresa_id", sourcekey: "empresa_id" });
// Bus.belongsTo(Empresa, {
//   foreingKey: "empresa_id",
//   sourcekey: "bus_empresa_id"
// });

export default Empresa;
