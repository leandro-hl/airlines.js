import { Registry } from "../bll/model/registry";

export class Repository {
  registry: Registry;

  getRegistry() {
    return this.registry;
  }
}
