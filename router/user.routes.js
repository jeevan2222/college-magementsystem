const db = require("../database/db.connection");

const express = require("express");
const router = express.Router();
const Model = require("../model/user.model");

router.get("/", async (req, res) => {
  const response = await Model.createUse();
  res.send(response);
});

module.exports = router;
