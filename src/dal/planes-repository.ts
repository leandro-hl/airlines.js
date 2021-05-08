import { Repository } from "../moduleManager";

export class PlanesRepository extends Repository {
  insert(name: string) {
    return this.exec("fn_planes_insert", [name]);
  }

  getAll() {
    return this.query("SELECT id, name FROM planes");
  }

  update(airline) {
    const { id, name } = airline;
    this.exec("fn_planes_update", [id, name]);
  }

  getBy(id: number) {
    return this.exec("fn_planes_getby_id", [id]);
  }
}
