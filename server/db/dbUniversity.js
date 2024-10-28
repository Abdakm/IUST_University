const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "akmik",
  host: "localhost",
  port: 5432,
  database: "iust",
});

pool.connect((err) => {
  if (err) console.log(err);
  console.log("done connection to the iust database");
});

module.exports = pool;
