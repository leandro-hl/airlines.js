import express from "express";
import { RestService } from "../bll/rest-service";

const generateRestAPI = ({ getAll, get, post, put }: RestService<any>) => {
  const route = express.Router();

  route
    .route("/")
    .get(async (req, res, next) => {
      const items = await getAll();

      res.send(items);
    })
    .post(async (req, res, next) => {
      const id = await post(req.body);

      res.send({ id: id });
    });

  route
    .route("/:id")
    .get(async (req, res, next) => {
      const item = await get(+req.params.id);

      res.send(item);
    })
    .put(async (req, res, next) => {
      const id = await put(req.body);

      res.send({ id: id });
    });

  return route;
};

export { generateRestAPI };
