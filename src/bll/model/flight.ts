import { Identifiable } from "../../core/identifiable";
import { Airport } from "./airport";
import { Passenger } from "./passenger";
import { Plane } from "./plane";

export class Flight extends Identifiable {
  private _departure: Airport;
  private _arrival: Airport;
  private _estimatedTimeInMinutes: number;
  private _offeredSeats: number;
  private _plane: Plane;

  constructor(
    private _departureDate: Date,
    private _passengers: Array<Passenger>
  ) {
    super();
  }

  duration() {}

  getPassengersCount() {
    return this._passengers.length;
  }

  getDepartureDate(): Date {
    return this._departureDate;
  }

  getDeparture() {
    return this._departure;
  }

  getArrival() {
    return this._arrival;
  }
}
