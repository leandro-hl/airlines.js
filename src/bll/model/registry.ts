import { Airline } from "./airline";

export class Registry {
  constructor(private _airlines: Array<Airline>) {}

  getBusierAirlineIn(month: number, year: number): Airline {
    const airlinePassenger = this._airlines.map((x) => {
      return {
        airline: x,
        passengersCount: x
          .getFlights()
          .filter((y) => {
            return (
              y.getDepartureDate().getMonth() == month &&
              y.getDepartureDate().getFullYear() == year
            );
          })
          .map((y) => y.getPassengersCount())
          .reduce((sum, current) => (sum += current)),
      };
    });

    airlinePassenger.sort((x) => x.passengersCount);

    return airlinePassenger[0].airline;
  }
}
