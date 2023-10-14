const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "test",
  password: "admin21",
  port: 5432,
});
pool.connect((err, data) => {
  if (!err) console.log("database connected");
  else console.log("connection error>>>", err);
});
module.exports = pool;
