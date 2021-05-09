import { FlightsRepository } from "../moduleManager";
import { RestService, Option } from "./rest-service";

export class FlightsRestService implements RestService<any> {
  constructor(private _rep: FlightsRepository) {}

  options(): Option[] {
    throw new Error("Method not implemented.");
  }

  async getAll() {
    return (await this._rep.getAll()).map(x => this.flightDTO(x));
  }

  async get(id: number) {
    return this.flightDTO(await this._rep.getBy(id));
  }

  post(item: any) {
    return this._rep.insert(item);
  }

  async put(item: any) {
    const id = await this._rep.update(item);

    return this.flightDTO(await this._rep.getBy(id));
  }

  private flightDTO(x) {
    return {
      id: x.id,
      departureDate: x.departure_date,
      departureId: x.departure_id,
      departure: x.departure_name,
      arrivalId: x.arrival_id,
      arrivalDate: x.arrival_date,
      arrival: x.arrival_name,
      seatsOffered: x.seats_offered,
      airlineId: x.airline_id,
      airlineName: x.airline_name
    };
  }
}
