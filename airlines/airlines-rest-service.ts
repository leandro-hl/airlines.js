import { RestService, buildOptions } from "rest-api.hl";
import { AirlinesRepository } from "./airlines-repository";

export class AirlinesRestService implements RestService<any> {
  constructor(private _rep: AirlinesRepository) {}

  async options() {
    return (await this._rep.getAll()).map(x => buildOptions(x.id, x.name));
  }

  async getAll() {
    return (await this._rep.getAll()).map(x => this.airlineDTO(x));
  }

  async get(id: number) {
    return this.airlineDTO(await this._rep.getBy(id));
  }

  async post(item: any) {
    const id = await this._rep.insert(item.name);

    return await this.get(id);
  }

  async put(item: any) {
    const id = await this._rep.update(item);

    return this.airlineDTO(await this._rep.getBy(id));
  }

  private airlineDTO(x: any) {
    return { id: x.id, name: x.name };
  }
}
