// import moment from "moment";
import * as Pg from "pg";
const Pool = Pg.Pool;

const pool = new Pool({
  user: "postgres",
  password: "Kraosoft@min@1",
  database: "ICEFAC_DB_DEV",
  host: "168.63.248.120",
  port: 5432,
});

pool.connect(function (err: any) {
  if (err) {
    console.log(err);
  } else {
    console.log(`ICEFAC Services is Starting ... `);
  }
});

export default pool;
