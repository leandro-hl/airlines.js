import { Airport, Identifiable, Passenger, Plane } from "../../moduleManager";

export class Flight extends Identifiable {
  private _estimatedTimeInMinutes?: number;
  private _seats?: number;
  private _plane?: Plane;
  private _departure?: Airport;
  private _arrival?: Airport;
  private _departureDate?: Date;
  private _arrivalDate?: Date;
  private _passengers?: Array<Passenger>;

  constructor(p: {
    departureDate?: Date;
    arrivalDate?: Date;
    passengers?: Array<Passenger>;
    seats?: number;
  }) {
    super();

    this._departureDate = p.departureDate;
    this._arrivalDate = p.arrivalDate;
    this._passengers = p.passengers;
    this._seats = p.seats;
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

  getOccupiedCapacity() {
    return `${(this._passengers.length / this._seats) * 100}%`;
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
