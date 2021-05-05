import "./core/extension_methods/String";
import "./core/extension_methods/Number";
import "./core/extension_methods/Moment";

import express from "express";
import { host, port as port } from "./config";
import { handleError } from "error-api.hl";
import { BootsTrapper, Service } from "./moduleManager";
import { generateRestAPI } from "./routes/rest-api";
import { AirportsRestService } from "./bll/airports-rest-service";
import { AirlinesRestService } from "./bll/airlines-rest-service";
import { FlightsRestService } from "./bll/flights-rest-service";
import { PlanesRestService } from "./bll/planes-rest-service";

const app = express();
const bootstrapper = new BootsTrapper();

// One repo and service for all endpoints. Race condition?
const repository = bootstrapper.createRepository();
const service = new Service(repository);

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res, next) => {
  res.send("I'm fucking alive");
});

app.use("/airports", generateRestAPI(new AirportsRestService(repository)));
app.use("/airlines", generateRestAPI(new AirlinesRestService(repository)));
app.use("/flights", generateRestAPI(new FlightsRestService(repository)));
app.use("/planes", generateRestAPI(new PlanesRestService(repository)));

// app.post("/statistics/airlines/:month/:year/busier", (req, res, next) => {
//   res.send(service.busierAirlineIn({ month: +req.params.month, year: +req.params.year }));
// });

// app.get("/statistics/airlines/:airline/flights/:flight/occupation", (req, res, next) => {
//   res.send(
//     service.flightOccupiedCapacity({
//       airlineId: +req.params.airline,
//       flightId: +req.params.flight
//     })
//   );
// });

// app.get("/statistics/airlines/:airline/flights/:flight/duration", (req, res, next) => {
//   res.send(
//     service.estimatedFlightDuration({
//       airlineId: +req.params.airline,
//       flightId: +req.params.flight
//     })
//   );
// });

// app.get("/statistics/airports/:airport/:date/movements-count", (req, res, next) => {
//   res.send(
//     service.movementsCountOnDay({
//       airPortId: +req.params.airport,
//       day: new Date(req.params.date)
//     })
//   );
// });

// Error handling middleware, we delegate the handling to the centralized error handler
app.use(async (err: Error, req, res, next) => {
  await handleError(err, res);
});

process.on("uncaughtException", (error: Error) => {
  handleError(error);
});

process.on("unhandledRejection", reason => {
  handleError(reason);
});

app.listen(port, () => {
  console.log(`App listening at ${host}:${port}`);
});
