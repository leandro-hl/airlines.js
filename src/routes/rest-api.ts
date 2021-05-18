import express from "express";
import { RestService } from "../bll/rest-service";

const generateRestAPI = <T>(service: RestService<T>) => {
  const route = express.Router();

  route
    .route("/")
    .get(async (req, res, next) => {
      const items = await service.getAll();

      res.send(items);
    })
    .post(async (req, res, next) => {
      const result = await service.post(req.body);

      res.send(result);
    });

  route.route("/options").get(async (req, res, next) => {
    res.send(await service.options());
  });

  route
    .route("/:id")
    .get(async (req, res, next) => {
      const item = await service.get(+req.params.id);

      res.send(item);
    })
    .put(async (req, res, next) => {
      const id = +req.params.id;

      const result = await service.put({ id, ...req.body });

      res.send(result);
    });

  return route;
};

export { generateRestAPI };
