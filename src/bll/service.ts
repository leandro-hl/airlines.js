import { Repository } from "../moduleManager";

export class Service {
  constructor(private _rep: Repository) {}

  busierAirlineIn(input: { month: number; year: number }) {
    return this._rep
      .getAirlinesRegistry()
      .getBusierAirlineIn(input.month, input.year);
  }

  movementsCountOnDay(input: { airPortId: number; day: Date }) {
    return this._rep
      .getAirportsRegistry()
      .getAirportBy(input.airPortId)
      .getMovementsCountOn(input.day);
  }
}
