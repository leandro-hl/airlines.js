import { Airline, AirlinesRepository } from "../moduleManager";
import { RestService, Option } from "./rest-service";

export class AirlinesRestService implements RestService<any> {
  constructor(private _rep: AirlinesRepository) {}

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

  private airlineDTO(x: any) {
    return { id: x.id, name: x.name };
  }
}
