import { Identifiable } from "../../core/identifiable";
import { Flight } from "./flight";

export class Airport extends Identifiable {
  name: string;
  city: any;
  flights: Array<Flight>;

  passengerDeparturesOn(day: Date) {}

  flightDeparturesOn(day: Date) {}

  flightArrivalsOn(day: Date) {}

  passengerArrivalsOn(day: Date) {}
}
