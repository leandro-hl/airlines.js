import { Airline } from "../../moduleManager";

export class Airlines {
  private _airlines: Array<Airline> = [];

  constructor(airlines?: Array<Airline>) {
    if (airlines) this._airlines = airlines;
  }

  getBusierAirlineIn(month: number, year: number): Airline {
    const airlinePassenger = this._airlines.map(x => {
      return {
        airline: x,
        passengersCount: x
          .getFlights()
          .filter(y => {
            return (
              y.getDepartureDate().getMonth() == month &&
              y.getDepartureDate().getFullYear() == year
            );
          })
          .map(y => y.getPassengersCount())
          .reduce((sum, current) => (sum += current))
      };
    });

    airlinePassenger.sort(x => x.passengersCount);

    return airlinePassenger[0].airline;
  }

  add(airline: Airline) {
    this._airlines.push(airline);

    return airline.getId();
  }

  getAll() {
    return this._airlines.map(x => this.airlineDTO(x));
  }

  update(airline) {
    this.getBy(airline.id).update(airline);
  }

  getDTOBy(id: number) {
    return this.airlineDTO(this.getBy(id));
  }

  getBy(id: number) {
    return this._airlines.find(x => x.getId() == id);
  }

  private airlineDTO(x: Airline) {
    return { id: x.getId(), name: x.getName() };
  }
}
