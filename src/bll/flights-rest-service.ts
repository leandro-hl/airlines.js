import { Repository } from "../moduleManager";
import { Flight } from "./model/flight";
import { RestService } from "./rest-service";

export class FlightsRestService implements RestService<any> {
  constructor(private _rep: Repository) {}

  getAll() {
    return this._rep.getFlights().getAll();
  }
  get(id: number) {
    return this._rep.getFlights().getDTOBy(id);
  }
  post(item: any) {
    const flight = new Flight(item);
    const departure = this._rep.getAirports().getBy(item.departure);
    const arrival = this._rep.getAirports().getBy(item.arrival);

    flight.setDeparture(departure).setArrival(arrival);

    return this._rep.getFlights().add(flight);
  }
  put(item: any) {
    return this._rep.getFlights().update(item);
  }
}
