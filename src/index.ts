import express from "express";
import { Routes } from "./routes/routes";
import { initialiseExpressApiRoutes, startServer } from "./middleware";

const app: express.Application = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

initialiseExpressApiRoutes(app, Routes)
startServer(app, 3000)