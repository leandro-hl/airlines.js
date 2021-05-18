import { Airport } from "../../moduleManager";

export class Airports {
  private _airports: Array<Airport> = [];

  constructor(airports?: Array<Airport>) {
    if (airports) this._airports = airports;
  }

  getAll() {
    return this._airports.map(x => this.airportDTO(x));
  }

  getDTOBy(id: number) {
    return this.airportDTO(this.getBy(id));
  }

  getBy(id: number) {
    return this._airports.find(x => x.getId() == id);
  }

  add(airport: Airport) {
    this._airports.push(airport);
    return airport.getId();
  }

  update(airport) {
    this.getBy(airport.id).update(airport);
  }

  private airportDTO(x: Airport) {
    return { id: x.getId(), name: x.getName() };
  }
}
