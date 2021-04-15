import { Repository } from "../core/repository";

export class Service {
  constructor(private rep: Repository) {}

  busierAirlineIn(input: { month: number; year: number }) {
    this.rep.getRegistry().getBusierAirlineIn(input.month, input.year);
  }
}
