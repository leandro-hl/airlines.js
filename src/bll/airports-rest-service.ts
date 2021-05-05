import { Repository, Airport } from "../moduleManager";
import { RestService } from "./rest-service";

export class AirportsRestService implements RestService<any> {
  constructor(private _rep: Repository) {}

  getAll() {
    return this._rep.getAirports().getAll();
  }
  get(id: number) {
    return this._rep.getAirports().getDTOBy(id);
  }
  post(item: any) {
    return this._rep.getAirports().add(new Airport(item));
  }
  put(item: any) {
    return this._rep.getAirports().update(item);
  }
}
