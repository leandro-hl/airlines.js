import { Repository } from "../moduleManager";

export class AirlinesRepository extends Repository {
  insert(name: string) {
    return this.exec("fn_airlines_insert", [name]);
  }

  getAll() {
    return this.query("SELECT id, name FROM airlines");
  }

  update(airline) {
    const { id, name } = airline;
    this.exec("fn_airlines_update", [id, name]);
  }

  getBy(id: number) {
    return this.exec("fn_airlines_getby_id", [id]);
  }
}
