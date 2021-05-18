import { Repository } from "./repository";

export class BootsTrapper {
  createRepository() {
    return new Repository();
  }
}
