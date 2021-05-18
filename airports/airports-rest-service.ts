import { AirportsRepository, RestService } from "../moduleManager";
import { buildOptions } from "./bll-functions";

export class AirportsRestService implements RestService<any> {
  constructor(private _rep: AirportsRepository) {}

  async options() {
    return (await this._rep.getAll()).map(x => buildOptions(x.id, x.name));
  }

  async getAll() {
    return (await this._rep.getAll()).map(x => this.airportDTO(x));
  }

  async get(id: number) {
    return this.airportDTO(await this._rep.getBy(id));
  }

  async post(item: any) {
    const id = await this._rep.insert(item.name);

    return await this.get(id);
  }

  async put(item: any) {
    const id = await this._rep.update(item);

    return await this.get(id);
  }

  private airportDTO(x: any) {
    return { id: x.id, name: x.name };
  }
}
