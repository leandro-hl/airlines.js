import { FlightsRepository } from "../moduleManager";
import { RestService, Option } from "./rest-service";

export class FlightsRestService implements RestService<any> {
  constructor(private _rep: FlightsRepository) {}

  options(): Option[] {
    throw new Error("Method not implemented.");
  }

  getAll() {
    return this._rep.getAll();
  }

  get(id: number) {
    return this._rep.getBy(id);
  }

  post(item: any) {
    return this._rep.insert(item);
  }

  put(item: any) {
    return this._rep.update(item);
  }
}
