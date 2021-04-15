import "./core/extension_methods/String";
import "./core/extension_methods/Moment";

import express from "express";
import { serverPort } from "./config";
import { handleError } from "error-api.hl";
import { BootsTrapper } from "./core/bootstrapper";
import { Service } from "./bll/service";

const app = express();
const bootstrapper = new BootsTrapper();
const repository = bootstrapper.createRepository();
const service = new Service(repository);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("api working");
});

app.post("/busier-airline", async (req, res, next) => {
  const input: { month: number; year: number } = req.body;

  service.busierAirlineIn(input);
});

app.post("/timepopularity", async (req, res, next) => {});

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
