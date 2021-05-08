import { Repository, Airline } from "../moduleManager";
import { RestService, Option } from "./rest-service";

export class AirlinesRestService implements RestService<any> {
  constructor(private _rep: Repository) {}

  options(): Option[] {
    throw new Error("Method not implemented.");
  }

  getAll() {
    return this._rep.getAirlines().getAll();
  }
  get(id: number) {
    return this._rep.getAirlines().getDTOBy(id);
  }
  post(item: any) {
    return this._rep.getAirlines().add(new Airline(null, item.name));
  }
  put(item: any) {
    return this._rep.getAirlines().update(item);
  }
}
