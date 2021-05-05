import { Repository } from "../moduleManager";

export class Service {
  constructor(private _rep: Repository) {}

  flightOccupiedCapacity(p: { airlineId: number; flightId: number }) {
    return this._rep
      .getAirlines()
      .getBy(p.airlineId)
      .getFlightBy(p.flightId)
      .getOccupiedCapacity();
  }

  estimatedFlightDuration(p: { airlineId: number; flightId: number }) {
    return this._rep
      .getAirlines()
      .getBy(p.airlineId)
      .getFlightBy(p.flightId)
      .getEstimatedDuration();
  }

  movementsCountOnDay(input: { airPortId: number; day: Date }) {
    return this._rep.getAirports().getBy(input.airPortId).getMovementsCountOn(input.day);
  }

  busierAirlineIn(input: { month: number; year: number }) {
    return this._rep.getAirlines().getBusierAirlineIn(input.month, input.year);
  }
}
