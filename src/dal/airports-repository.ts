import { Repository } from "../moduleManager";

export class AirportsRepository extends Repository {
  insert(name: string) {
    return this.exec("fn_airports_insert", [name]);
  }

  getAll() {
    return this.query("SELECT id, name FROM airports");
  }

  update(airline) {
    const { id, name } = airline;
    this.exec("fn_airports_update", [id, name]);
  }

  getBy(id: number) {
    return this.exec("fn_airports_getby_id", [id]);
  }
}
