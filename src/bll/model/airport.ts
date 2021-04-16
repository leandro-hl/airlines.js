import { Flight, Identifiable } from "../../moduleManager";

export class Airport extends Identifiable {
  private _name: string;
  private _city: any;
  private _flights: Array<Flight> = [];

  addFlight(flight: Flight, isArrival: boolean) {
    if (isArrival) {
      flight.setArrival(this);
    } else {
      flight.setDeparture(this);
    }

    this._flights.push(flight);

    return this;
  }

  getMovementsCountOn(day: Date) {
    const departuresCount = this._flights
      .filter((x) => x.getDeparture()?.getId() == this.getId())
      .filter((x) => x.getDepartureDate().getTime() == day.getTime()).length;

    const arrivalsCount = this._flights
      .filter((x) => x.getArrival()?.getId() == this.getId())
      .filter((x) => x.getArrivalDate().getTime() == day.getTime()).length;

    return {
      id: this.getId(),
      departuresCount,
      arrivalsCount,
    };
  }

  getArrivalsCountOn(day: Date) {}

  getPassengerDeparturesCountOn(day: Date) {}

  getPassengerArrivalsCountOn(day: Date) {}
}
