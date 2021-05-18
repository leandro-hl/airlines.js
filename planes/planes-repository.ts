import { Repository } from "../moduleManager";

export class PlanesRepository extends Repository {
  insert({ model, seats }) {
    return this.execScalarId("fn_planes_insert", [model, seats]);
  }

  getAll() {
    return this.query("SELECT id, model, seats FROM planes");
  }

  update({ id, model, seats }) {
    return this.execScalarId("fn_planes_update", [id, model, seats]);
  }

  getBy(id: number) {
    return this.execSingle("fn_planes_getby_id", [id]);
  }
}
