import { PlanesRepository } from "../moduleManager";
import { RestService, Option } from "./rest-service";

export class PlanesRestService implements RestService<any> {
  constructor(private _rep: PlanesRepository) {}

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
    return this._rep.insert(item.name);
  }
  put(item: any) {
    return this._rep.update(item);
  }
}
