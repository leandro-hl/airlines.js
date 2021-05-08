import { Repository } from "../moduleManager";

export class FlightsRepository extends Repository {
  insert({
    departure,
    departureDate,
    arrival,
    arrivalDate,
    plane,
    seatsOffered,
    airline
  }) {
    return this.exec("fn_flights_insert", [
      departure,
      departureDate,
      arrival,
      arrivalDate,
      plane,
      seatsOffered,
      airline
    ]);
  }

  getAll() {
    return this.query("flights_view");
  }

  update({
    id,
    departure,
    departureDate,
    arrival,
    arrivalDate,
    plane,
    seatsOffered,
    airline
  }) {
    this.exec("fn_flights_update", [
      id,
      departure,
      departureDate,
      arrival,
      arrivalDate,
      plane,
      seatsOffered,
      airline
    ]);
  }

  getBy(id: number) {
    return this.exec("fn_flights_getby_id", [id]);
  }
}
