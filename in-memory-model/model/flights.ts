import { Flight } from "../../moduleManager";

export class Flights {
  private _flights: Array<Flight> = [];

  add(flight: Flight) {
    this._flights.push(flight);
  }

  getAll() {
    return this._flights.map(x => this.flightDTO(x));
  }

  update(flight) {
    this.getBy(flight.id).update(flight);
  }

  getDTOBy(id: number) {
    return this.flightDTO(this.getBy(id));
  }

  getBy(id: number) {
    return this._flights.find(x => x.getId() == id);
  }

  private flightDTO(x: Flight) {
    return {
      id: x.getId(),
      departureDate: x.getDepartureDate(),
      departure: x.getDeparture().getName(),
      arrivalDate: x.getArrivalDate(),
      arrival: x.getArrival().getName()
    };
  }
}
