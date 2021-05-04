import express from "express";

const airlines = express.Router();

airlines.get("/", (req, res, next) => {
  type Airline = {
    id: number;
    name: string;
  };

  const airlines: Airline[] = [];

  for (let i = 0; i < 10; i++) {
    airlines.push({ id: i, name: i.toString() });
  }

  res.send(airlines);
});

airlines
  .route("/:airline")
  .get((req, res, next) => {
    res.send("airline get");
  })
  .put((req, res, next) => {
    res.send("airline put");
  })
  .post((req, res, next) => {
    res.send("airline post");
  });

export default airlines;
