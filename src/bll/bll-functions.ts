import { Option } from "./dtos/option";

const buildOptions = (val, desc): Option => {
  return { val: val, desc: desc };
};

export { buildOptions };
