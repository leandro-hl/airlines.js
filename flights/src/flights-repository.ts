import { Repository } from "data.hl";

export class FlightsRepository extends Repository {
  insert({
    departureId,
    departureDate,
    arrivalId,
    arrivalDate,
    planeId,
    seatsOffered,
    airlineId
  }) {
    return this.execScalarId("fn_flights_insert", [
      departureId,
      departureDate,
      arrivalId,
      arrivalDate,
      planeId,
      seatsOffered,
      airlineId
    ]);
  }

  getAll() {
    return this.query("SELECT * FROM flights_view");
  }

  update({
    id,
    departureId,
    departureDate,
    arrivalId,
    arrivalDate,
    planeId,
    seatsOffered,
    airlineId
  }) {
    return this.execScalarId("fn_flights_update", [
      id,
      departureId,
      departureDate,
      arrivalId,
      arrivalDate,
      planeId,
      seatsOffered,
      airlineId
    ]);
  }

  getBy(id: number) {
    return this.execSingle("fn_flights_getby_id", [id]);
  }
}
