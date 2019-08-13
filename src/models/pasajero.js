import Sequelize from "sequelize";
import { sequelize } from "../database/database";
// import Bus from "./bus"

/* 
CREATE TABLE public.pasajero
(
  pasajero_id integer NOT NULL DEFAULT nextval('pasajero_pasajero_id_seq'::regclass),
  pasajero_data jsonb,
  pasajero_registrado timestamp without time zone NOT NULL DEFAULT now(),
  pasajero_modificado timestamp without time zone NOT NULL DEFAULT now(),
  pasajero_estado text NOT NULL DEFAULT 'activo'::text,
  pasajero_bus_id integer,
  CONSTRAINT pasajero_pkey PRIMARY KEY (pasajero_id),
  CONSTRAINT pasajero_pasajero_bus_id_fkey FOREIGN KEY (pasajero_bus_id)
      REFERENCES public.bus (bus_id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)

*/

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
