import { Airline } from "../bll/model/airline";
import { Identifiable } from "./identifiable";

export class IdGenerator {
  private static _flightsEnumerator = 0;

  static getNext(identifiable: Identifiable) {
    if (identifiable instanceof Airline) {
      return ++this._flightsEnumerator;
    }
  }
}
