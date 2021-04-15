import { Identifiable } from "../../core/identifiable";
import { Flight } from "./flight";

export class Airline extends Identifiable {
  constructor(private _flights: Array<Flight>, private _name?: string) {
    super();
  }

  passengersPer(month: number, year: number) {}

  getFlights() {
    return this._flights;
  }
}
