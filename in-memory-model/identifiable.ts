import { IdGenerator } from "../moduleManager";

export class Identifiable {
  private _id: number;

  constructor() {
    this._id = IdGenerator.getNext(this);
  }

  getId() {
    return this._id;
  }
}
