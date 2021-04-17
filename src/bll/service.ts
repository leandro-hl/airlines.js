import { Repository } from "../moduleManager";

export class Service {
  constructor(private _rep: Repository) {}

  flightOccupiedCapacity(p: { airlineId: number; flightId: number }) {
    return this._rep
      .getAirlinesRegistry()
      .getAirlineBy(p.airlineId)
      .getFlightBy(p.flightId)
      .getOccupiedCapacity();
  }

  estimatedFlightDuration(p: { airlineId: number; flightId: number }) {
    return this._rep
      .getAirlinesRegistry()
      .getAirlineBy(p.airlineId)
      .getFlightBy(p.flightId)
      .getEstimatedDuration();
  }

  movementsCountOnDay(input: { airPortId: number; day: Date }) {
    return this._rep
      .getAirportsRegistry()
      .getAirportBy(input.airPortId)
      .getMovementsCountOn(input.day);
  }

  busierAirlineIn(input: { month: number; year: number }) {
    return this._rep.getAirlinesRegistry().getBusierAirlineIn(input.month, input.year);
  }
}
