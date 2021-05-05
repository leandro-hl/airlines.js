import { Repository, Airline } from "../moduleManager";
import { RestService } from "./rest-service";

export class AirlinesRestService implements RestService<any> {
  constructor(private _rep: Repository) {}

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
