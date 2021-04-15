import "../core/extension_methods/String";
import "../core/extension_methods/Moment";

import { expect } from "chai";
import { asyncShouldThrow } from "./helpers";
import { Airline } from "../bll/model/airline";
import { Flight } from "../bll/model/flight";
import { Passenger } from "../bll/model/passenger";
import { Registry } from "../bll/model/registry";

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

describe("service", () => {
  describe("registry", () => {
    it("should return busier airline in an specific month and year", async () => {
      //Arrange
      const year = 2021;
      const month = 10;

      const correctDate = new Date(year, month);
      const incorrectDate = new Date();

      const pass1Flight11 = new Passenger();
      const pass2Flight11 = new Passenger();
      const flight11 = new Flight(correctDate, [pass1Flight11, pass2Flight11]);

      const pass1Flight12 = new Passenger();
      const flight12 = new Flight(correctDate, [pass1Flight12]);

      const pass1Flight13 = new Passenger();
      const pass2Flight13 = new Passenger();
      const flight13 = new Flight(incorrectDate, [
        pass1Flight13,
        pass2Flight13,
      ]);

      const airline1 = new Airline([flight11, flight12, flight13]);

      const pass1Flight21 = new Passenger();
      const flight21 = new Flight(correctDate, [pass1Flight21]);

      const pass1Flight22 = new Passenger();
      const flight22 = new Flight(correctDate, [pass1Flight22]);

      const airline2 = new Airline([flight21, flight22]);

      const registry = new Registry([airline1, airline2]);

      //Act
      const result = registry.getBusierAirlineIn(month, year);

      //Assert
      expect(result.getId()).to.be.equal(airline1.getId());

      //await asyncShouldThrow(() => service.timeAt(param), "unknown timezone");
      //expect(result).to.be.equal(date.lxFormat());
    });
  });
});
