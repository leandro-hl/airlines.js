import { Repository } from "../moduleManager";

export class Service {
  constructor(private _rep: Repository) {}

  flightOccupiedCapacity(flightId: number) {
    return this._rep
      .getAirlinesRegistry()
      .getAirlineBy(flightId)
      .getFlightBy(flightId)
      .getOccupiedCapacity();
  }

  estimatedFlightDuration(flightId: number) {
    return this._rep
      .getAirlinesRegistry()
      .getAirlineBy(flightId)
      .getFlightBy(flightId);
  }

  movementsCountOnDay(input: { airPortId: number; day: Date }) {
    return this._rep
      .getAirportsRegistry()
      .getAirportBy(input.airPortId)
      .getMovementsCountOn(input.day);
  }

  busierAirlineIn(input: { month: number; year: number }) {
    return this._rep
      .getAirlinesRegistry()
      .getBusierAirlineIn(input.month, input.year);
  }
}
