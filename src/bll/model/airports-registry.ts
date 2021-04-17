import { Airport } from "../../moduleManager";

export class AirportsRegistry {
  constructor(private _airports: Array<Airport>) {}

  getAirports() {
    return this._airports;
  }

  getAirportBy(id: number) {
    return this._airports.find(x => x.getId() == id);
  }
}
