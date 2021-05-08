import { database } from "../config";

export class Repository {
  private _db;

  constructor() {
    this._db = require("pg-promise")()(database);
  }

  protected async exec(fn: string, params?: any[]) {
    return (await this._db.func(fn, params))[0][fn];
  }

  protected async query(q: string) {
    return await this._db.query(q);
  }
}
