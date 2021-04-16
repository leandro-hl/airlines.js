import { Airport, Identifiable, Passenger, Plane } from "../../moduleManager";

export class Flight extends Identifiable {
  private _estimatedTimeInMinutes?: number;
  private _offeredSeats?: number;
  private _plane?: Plane;
  private _departure?: Airport;
  private _arrival?: Airport;

  constructor(
    private _departureDate?: Date,
    private _arrivalDate?: Date,
    private _passengers?: Array<Passenger>
  ) {
    super();
  }

  setDeparture(departure: Airport) {
    this._departure = departure;

    return this;
  }

  setArrival(arrival: Airport) {
    this._arrival = arrival;

    return this;
  }

  duration() {}

  getPassengersCount() {
    return this._passengers.length;
  }

  getDepartureDate(): Date {
    return this._departureDate;
  }

  getArrivalDate(): Date {
    return this._arrivalDate;
  }

  getDeparture() {
    return this._departure;
  }

  getArrival() {
    return this._arrival;
  }
}
