const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.port || 8080;
const route = require("./router/user.routes");
const db = require("./database/db.connection");

app.use("/api/route", route);

app.listen(port, () => {
  console.log("server running", port);
});
