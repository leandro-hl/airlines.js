import { Flight, Identifiable, Scale } from "../../moduleManager";

export class Airport extends Identifiable implements Scale {
  private _name: string;
  private _city: any;
  private _flights: Array<Flight> = [];
  private _estimatedArrivalWaitingTimeInMinutes: number = 0;

  constructor(p?: { estimatedArrivalWaitingTimeInMinutes: number }) {
    super();

    this._estimatedArrivalWaitingTimeInMinutes = p.estimatedArrivalWaitingTimeInMinutes;
  }

  addFlight(flight: Flight, isArrival: boolean) {
    if (isArrival) {
      flight.setArrival(this);
    } else {
      flight.setDeparture(this);
    }

    this._flights.push(flight);

    return this;
  }

  getEstimatedWaitingTimeInMilliseconds(): number {
    return this._estimatedArrivalWaitingTimeInMinutes * 60000;
  }

  getMovementsCountOn(day: Date) {
    const departuresCount = this._flights
      .filter(x => x.getDeparture()?.getId() == this.getId())
      .filter(x => x.getDepartureDate().getTime() == day.getTime()).length;

    const arrivalsCount = this._flights
      .filter(x => x.getArrival()?.getId() == this.getId())
      .filter(x => x.getArrivalDate().getTime() == day.getTime()).length;

    return {
      id: this.getId(),
      departuresCount,
      arrivalsCount
    };
  }

  getArrivalsCountOn(day: Date) {}

  getPassengerDeparturesCountOn(day: Date) {}

  getPassengerArrivalsCountOn(day: Date) {}
}
