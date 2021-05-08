import { Airport, AirportsRepository } from "../moduleManager";
import { RestService, Option } from "./rest-service";

export class AirportsRestService implements RestService<any> {
  constructor(private _rep: AirportsRepository) {}

  async options(): Promise<Option[]> {
    return (await this._rep.getAll()).map(x => {
      return { val: x.id, desc: x.name };
    });
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
