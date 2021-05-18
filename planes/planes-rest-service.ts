import { RestService, Option } from "rest-api.hl";
import { PlanesRepository } from "./planes-repository";

export class PlanesRestService implements RestService<any> {
  constructor(private _rep: PlanesRepository) {}

  options(): Option[] {
    throw new Error("Method not implemented.");
  }

  async getAll() {
    return (await this._rep.getAll()).map(x => this.planeDTO(x));
  }

  async get(id: number) {
    return this.planeDTO(await this._rep.getBy(id));
  }

  async post(item: any) {
    const id = await this._rep.insert(item);

    return await this.get(id);
  }

  async put(item: any) {
    const id = await this._rep.update(item);

    return await this.get(id);
  }

  private planeDTO(x: any) {
    return { id: x.id, model: x.model, seats: x.seats };
  }
}
