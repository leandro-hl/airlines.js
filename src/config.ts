import dotenv from "dotenv";

dotenv.config();

const serverPort = process.env.PORT;

export { serverPort };
