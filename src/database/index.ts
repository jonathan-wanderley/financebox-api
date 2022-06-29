import Connection from "./Connection";
import ENV from "../infra/config/env";

const mySqlConnection = new Connection(
  ENV.DB_NAME,
  ENV.DB_USER,
  ENV.DB_PASS,
  {
    dialect: "mysql",
    port: ENV.DB_PORT,
    host: ENV.DB_HOST,
  }
);

export { mySqlConnection };
