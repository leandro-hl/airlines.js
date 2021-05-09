import { Repository } from "../moduleManager";

export class AirportsRepository extends Repository {
  insert(name: string) {
    return this.execScalarId("fn_airports_insert", [name]);
  }

  getAll() {
    return this.query("SELECT id, name FROM airports");
  }

  update({ id, name }) {
    return this.execScalarId("fn_airports_update", [id, name]);
  }

  getBy(id: number) {
    return this.execSingle("fn_airports_getby_id", [id]);
  }
}
