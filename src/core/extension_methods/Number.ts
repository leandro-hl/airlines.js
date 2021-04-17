declare global {
  interface Number {
    msToTime(): string;
  }
}

Number.prototype.msToTime = function (this: number) {
  const minutes = Math.floor((this / (1000 * 60)) % 60);
  const hours = Math.floor((this / (1000 * 60 * 60)) % 24);

  const timehours = hours < 10 ? "0" + hours : hours;
  const timeminutes = minutes < 10 ? "0" + minutes : minutes;

  return `${timehours}:${timeminutes}`;
};

export {};
