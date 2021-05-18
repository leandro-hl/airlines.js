import { Repository } from "../moduleManager";

export class BootsTrapper {
  createRepository() {
    return new Repository();
  }
}
