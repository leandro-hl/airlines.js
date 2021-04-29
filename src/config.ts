import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const host = process.env.HOST;

export { host, port };
