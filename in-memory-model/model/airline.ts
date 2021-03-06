import { Flight, Identifiable } from "../../moduleManager";

export class Airline extends Identifiable {
  constructor(private _flights?: Array<Flight>, private _name?: string) {
    super();
  }

  passengersPer(month: number, year: number) {}

  getName() {
    return this._name;
  }

  getFlights() {
    return this._flights;
  }

  getFlightBy(flightId: number) {
    return this._flights?.find(x => x.getId() == flightId);
  }

  hasFlight(flightId: number) {
    return this.getFlightBy(flightId) != undefined;
  }

  update(newValues) {
    this._name = newValues.name;
  }
}
