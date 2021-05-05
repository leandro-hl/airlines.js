import { Repository } from "../moduleManager";
import { RestService } from "./rest-service";

export class PlanesRestService implements RestService<any> {
  constructor(private _rep: Repository) {}
  getAll() {
    throw new Error("Method not implemented.");
  }
  get(id: number) {
    throw new Error("Method not implemented.");
  }
  post(item: any) {
    throw new Error("Method not implemented.");
  }
  put(item: any) {
    throw new Error("Method not implemented.");
  }

  // getAll() {
  //   return this._rep.getPlanesRegistry().getAll();
  // }
  // get(id: number) {
  //   return this._rep.getPlanesRegistry().getBy(id);
  // }
  // post(item: any) {
  //   return this._rep.getPlanesRegistry().add(item);
  // }
  // put(item: any) {
  //   return this._rep.getPlanesRegistry().update(item);
  // }
}
