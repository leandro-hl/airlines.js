import { Repository } from "../moduleManager";

export class AirlinesRepository extends Repository {
  insert(name: string) {
    return this.execScalarId("fn_airlines_insert", [name]);
  }

  getAll() {
    return this.query("SELECT id, name FROM airlines");
  }

  update({ id, name }) {
    return this.execScalarId("fn_airlines_update", [id, name]);
  }

  getBy(id: number) {
    return this.execSingle("fn_airlines_getby_id", [id]);
  }
}
