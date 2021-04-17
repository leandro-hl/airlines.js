declare global {
  interface String {
    getRegions(): string[];
  }
}

String.prototype.getRegions = function (this: string) {
  return this.split("/");
};

export {};
