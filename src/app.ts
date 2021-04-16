import "./core/extension_methods/String";
import "./core/extension_methods/Moment";

import express from "express";
import { serverPort } from "./config";
import { handleError } from "error-api.hl";
import { BootsTrapper, Service } from "./moduleManager";

const app = express();
const bootstrapper = new BootsTrapper();
const repository = bootstrapper.createRepository();
const service = new Service(repository);

app.use(express.json());

app.post("/airlines/busier", async (req, res, next) => {
  res.send(service.busierAirlineIn(req.body));
});

app.post("/airports/movements-count", async (req, res, next) => {
  res.send(service.movementsCountOnDay(req.body));
});

// Error handling middleware, we delegate the handling to the centralized error handler
app.use(async (err: Error, req, res, next) => {
  await handleError(err, res);
});

process.on("uncaughtException", (error: Error) => {
  handleError(error);
});

process.on("unhandledRejection", (reason) => {
  handleError(reason);
});

app.listen(serverPort, () => {
  console.log(`Example app listening at http://localhost:${serverPort}`);
});
