import express from "express";

const airlines = express.Router();

type Airline = {
  id: number;
  name: string;
};

airlines
  .route("/")
  .get((req, res, next) => {
    const airlines: Airline[] = [];

    for (let i = 0; i < 10; i++) {
      airlines.push({ id: i, name: i.toString() });
    }

    res.send(airlines);
  })
  .post((req, res, next) => {
    const airline = {
      name: req.body.name,
      id: 15
    };
    res.send({ id: airline.id });
  });

airlines
  .route("/:id")
  .get((req, res, next) => {
    const airline = {
      id: req.params.id,
      name: req.params.id.toString()
    };

    res.send(airline);
  })
  .put((req, res, next) => {
    const airline = {
      name: req.body.name,
      id: 15
    };
    res.send({ id: airline.id });
  });

export default airlines;
