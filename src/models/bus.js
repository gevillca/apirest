import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Pasajero from "./pasajero";

/* 
CREATE TABLE public.bus
(
  bus_id integer NOT NULL DEFAULT nextval('bus_bus_id_seq'::regclass),
  bus_data jsonb,
  bus_registrado timestamp without time zone NOT NULL DEFAULT now(),
  bus_modificado timestamp without time zone NOT NULL DEFAULT now(),
  bus_estado text NOT NULL DEFAULT 'activo'::text,
  bus_empresa_id integer,
  CONSTRAINT bus_pkey PRIMARY KEY (bus_id),
  CONSTRAINT bus_bus_empresa_id_fkey FOREIGN KEY (bus_empresa_id)
      REFERENCES public.empresa (empresa_id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
 */

const Bus = sequelize.define('bu', {
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
},{
  timestamps:false
});

// pasajero_bus_id integer references bus(bus_id)

Bus.hasMany(Pasajero, { foreingKey: "pasajero_bus_id", sourcekey: "bus_id" });
Pasajero.belongsTo(Bus, { foreingKey: "pasajero_bus_id", sourcekey: "bus_id" });

// Bus.hasMany(Pasajero, { foreingKey: "pasajero_bus_id", sourcekey: "bus_id" });
// Pasajero.belongsTo(Bus, { foreingKey: "pasajero_bus_id", sourcekey: "bus_id" });

export default Bus;
