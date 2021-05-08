export interface Option {
  val: number;
  desc: string;
}

export interface RestService<T> {
  getAll();
  get(id: number);
  post(item: T);
  put(item: T);
  options(): Option[];
}
