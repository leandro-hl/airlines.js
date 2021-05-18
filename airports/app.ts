import "./core/extension_methods/String";
import "./core/extension_methods/Number";
import "./core/extension_methods/Moment";

import express from "express";
import { host, port as port } from "./config";
import { handleError } from "error-api.hl";
import { generateRestAPI } from "./routes/rest-api";
import {
  PlanesRepository,
  FlightsRepository,
  AirlinesRepository,
  AirportsRepository,
  PlanesRestService,
  FlightsRestService,
  AirportsRestService,
  AirlinesRestService
} from "./moduleManager";

const app = express();

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
app.use((req, res, next) => {
  const setValue = val => {
    if (!val) {
      return null;
    } else if (isNaN(+val)) {
      return val;
    } else {
      return +val;
    }
  };

  Object.keys(req.params).forEach(p => (req.params[p] = setValue(req.params[p])));
  Object.keys(req.body).forEach(p => (req.body[p] = setValue(req.body[p])));

  next();
});

app.get("/", (req, res, next) => {
  res.send("I'm fucking alive");
});

app.use(
  "/api/v1/airports",
  generateRestAPI(new AirportsRestService(new AirportsRepository()))
);
app.use(
  "/api/v1/airlines",
  generateRestAPI(new AirlinesRestService(new AirlinesRepository()))
);
app.use(
  "/api/v1/flights",
  generateRestAPI(new FlightsRestService(new FlightsRepository()))
);
app.use("/api/v1/planes", generateRestAPI(new PlanesRestService(new PlanesRepository())));

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
