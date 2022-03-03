require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json({ limit: "50mb" }));

app.get("/wwget", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.status(200).json({"k1": "v1","k2": "v2",});
  });

app.post("/wwdata", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.status(200).json({"success": true});
  });

module.exports = app;
