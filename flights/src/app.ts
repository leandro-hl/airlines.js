import express from "express";
import { host, port as port } from "./config";
import { handleError } from "error-api.hl";
import { generateRestAPI } from "rest-api.hl";
import { FlightsRestService } from "./flights-rest-service";
import { FlightsRepository } from "./flights-repository";

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
  "/api/v1/flights",
  generateRestAPI(new FlightsRestService(new FlightsRepository("uri")))
);

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
