import { Option } from "../moduleManager";
export interface RestService<T> {
  getAll();
  get(id: number);
  post(item: T);
  put(item: T);
  options(): Option[] | Promise<Option[]>;
}
