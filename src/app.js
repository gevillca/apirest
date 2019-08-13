import express, { json } from "express";
import morgan from "morgan";
import empresa from "./routes/empresa";
import bus from "./routes/bus";

const app = express();

// middelwares

app.use(morgan("dev"));
app.use(json());

// routes

app.use("/api/empresa", empresa);
app.use("/api/bus", bus);

export default app;
