import { Airlines, Airports, Flights } from "./moduleManager";

export class Repository {
  private _airlines: Airlines;
  private _airports: Airports;
  private _flights: Flights;

  constructor() {
    this._airlines = new Airlines();
    this._airports = new Airports();
    this._flights = new Flights();
  }

  setAirlines(reg: Airlines) {
    this._airlines = reg;

    return this;
  }

  setAirports(reg: Airports) {
    this._airports = reg;

    return this;
  }

  getAirlines() {
    return this._airlines;
  }

  getAirports() {
    return this._airports;
  }

  getFlights() {
    return this._flights;
  }
}
