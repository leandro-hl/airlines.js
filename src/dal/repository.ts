import { database } from "../config";

export class Repository {
  private _db;

  constructor() {
    this._db = require("pg-promise")()(database);
  }

  protected async execScalarId(fn: string, params?: any[]) {
    return await this.execScalar(fn, params, "_id");
  }

  protected async execScalar(fn: string, params?: any[], outName?: string) {
    const r = await this.execSingle(fn, params);

    return r[outName ?? fn];
  }

  protected async execSingle(fn: string, params?: any[], outName?: string) {
    const r = await this.execMany(fn, params);

    return r[0];
  }

  protected async execMany(fn: string, params?: any[]) {
    const r = await this._db.func(fn, params);

    return r;
  }

  protected async query(q: string) {
    return await this._db.query(q);
  }
}
