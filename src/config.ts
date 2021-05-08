import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const host = process.env.HOST;
const database = process.env.DATABASE;

export { host, port, database };
