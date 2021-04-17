import "../core/extension_methods/String";
import "../core/extension_methods/Moment";

import { expect } from "chai";
import {
  Airline,
  AirlinesRegistry,
  Airport,
  AirportsRegistry,
  Flight,
  Passenger,
  Repository,
  Service,
} from "../moduleManager";

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

describe("service", () => {
  describe("airlines registry", () => {
    it("1. should return passenger count in a flight", () => {
      //Arrange
      const flightId = 1;

      const pass1Flight11 = new Passenger();
      const pass2Flight11 = new Passenger();
      const flight11 = new Flight({
        departureDate: new Date(),
        arrivalDate: new Date(),
        passengers: [pass1Flight11, pass2Flight11],
      });

      const pass1Flight12 = new Passenger();
      const flight12 = new Flight({
        departureDate: new Date(),
        arrivalDate: new Date(),
        passengers: [pass1Flight12],
      });

      const pass2Flight13 = new Passenger();
      const flight13 = new Flight({
        departureDate: new Date(),
        arrivalDate: new Date(),
        passengers: [pass2Flight13],
      });

      const airline1 = new Airline([flight11, flight12, flight13]);

      const pass1Flight21 = new Passenger();
      const flight21 = new Flight({
        departureDate: new Date(),
        arrivalDate: new Date(),
        passengers: [pass1Flight21],
      });

      const airline2 = new Airline([flight21]);

      const registry = new AirlinesRegistry([airline1, airline2]);

      const repository = new Repository().setAirlinesRegistry(registry);

      //Act
      const result = new Service(repository).passengersCountBy(flightId);

      //Assert
      expect(result).to.be.equal(flight11.getPassengersCount());
    });

    it("3. should return departures and arrivals counts for an airport and day", () => {
      //Arrange
      const airPortId = 1;
      const day = new Date(2021, 10, 20);

      const airport1 = new Airport();
      const airport2 = new Airport();

      //arrivals
      airport1
        .addFlight(
          new Flight({
            departureDate: new Date(),
            arrivalDate: day,
            passengers: [],
          }),
          true
        )
        .addFlight(
          new Flight({
            departureDate: new Date(),
            arrivalDate: day,
            passengers: [],
          }),
          true
        )
        .addFlight(
          new Flight({
            departureDate: new Date(),
            arrivalDate: day,
            passengers: [],
          }),
          true
        )
        .addFlight(
          new Flight({
            departureDate: new Date(),
            arrivalDate: new Date(),
            passengers: [],
          }),
          true
        );

      //departures
      airport1
        .addFlight(
          new Flight({
            departureDate: day,
            arrivalDate: new Date(),
            passengers: [],
          }),
          false
        )
        .addFlight(
          new Flight({
            departureDate: day,
            arrivalDate: new Date(),
            passengers: [],
          }),
          false
        )
        .addFlight(
          new Flight({
            departureDate: new Date(),
            arrivalDate: new Date(),
            passengers: [],
          }),
          false
        );

      const airportsRegistry = new AirportsRegistry([airport1, airport2]);

      const repository = new Repository().setAirportsRegistry(airportsRegistry);

      //Act
      const result = new Service(repository).movementsCountOnDay({
        airPortId,
        day,
      });

      //Assert
      expect(result.id).to.be.equal(airport1.getId());
      expect(result.arrivalsCount).to.be.equal(3);
      expect(result.departuresCount).to.be.equal(2);
    });

    it("10. should return busier airline by passengers in an specific month and year", () => {
      //Arrange
      const year = 2021;
      const month = 10;

      const correctDate = new Date(year, month);
      const incorrectDate = new Date();

      const pass1Flight11 = new Passenger();
      const pass2Flight11 = new Passenger();
      const flight11 = new Flight({
        departureDate: correctDate,
        arrivalDate: new Date(),
        passengers: [pass1Flight11, pass2Flight11],
      });

      const pass1Flight12 = new Passenger();
      const flight12 = new Flight({
        departureDate: correctDate,
        arrivalDate: new Date(),
        passengers: [pass1Flight12],
      });

      const pass1Flight13 = new Passenger();
      const pass2Flight13 = new Passenger();
      const flight13 = new Flight({
        departureDate: incorrectDate,
        arrivalDate: new Date(),
        passengers: [pass1Flight13, pass2Flight13],
      });

      const airline1 = new Airline([flight11, flight12, flight13]);

      const pass1Flight21 = new Passenger();
      const flight21 = new Flight({
        departureDate: correctDate,
        arrivalDate: new Date(),
        passengers: [pass1Flight21],
      });

      const pass1Flight22 = new Passenger();
      const flight22 = new Flight({
        departureDate: correctDate,
        arrivalDate: new Date(),
        passengers: [pass1Flight22],
      });

      const airline2 = new Airline([flight21, flight22]);

      const registry = new AirlinesRegistry([airline1, airline2]);

      const repository = new Repository().setAirlinesRegistry(registry);

      //Act
      const result = new Service(repository).busierAirlineIn({ month, year });

      //Assert
      expect(result.getId()).to.be.equal(airline1.getId());

      //await asyncShouldThrow(() => service.timeAt(param), "unknown timezone");
      //expect(result).to.be.equal(date.lxFormat());
    });
  });
});
