import { Airline, Airport, Flight, Identifiable } from "../moduleManager";

export class IdGenerator {
  private static _airlinesEnumerator = 0;
  private static _airportsEnumerator = 0;
  private static _flightsEnumerator = 0;

  static getNext(identifiable: Identifiable) {
    if (identifiable instanceof Airline) {
      return ++this._airlinesEnumerator;
    }

    if (identifiable instanceof Airport) {
      return ++this._airportsEnumerator;
    }

    if (identifiable instanceof Flight) {
      return ++this._flightsEnumerator;
    }
  }
}
