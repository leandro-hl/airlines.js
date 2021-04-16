import { AirlinesRegistry, AirportsRegistry } from "../moduleManager";

export class Repository {
  private _airlinesRegistry: AirlinesRegistry;
  private _airportRegistry: AirportsRegistry;

  setAirlinesRegistry(reg: AirlinesRegistry) {
    this._airlinesRegistry = reg;

    return this;
  }

  setAirportsRegistry(reg: AirportsRegistry) {
    this._airportRegistry = reg;

    return this;
  }

  getAirlinesRegistry() {
    return this._airlinesRegistry;
  }

  getAirportsRegistry() {
    return this._airportRegistry;
  }
}
