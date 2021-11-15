const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createPool({
  host: "sql11.freemysqlhosting.net",
  user: "sql11447204",
  password: "x6xkUuNNQL",
  database: "sql11447204",
  //port: "3306",
});

app.use(cors());

app.get("/api/get", (req, res) => {
  // const sqlInsert = "SELECT * FROM sensors";
  const sqlInsert =
    "  SELECT temperature FROM sensors ORDER BY id DESC LIMIT 1";
  db.query(sqlInsert, (err, result) => {
    res.send(result);
    console.log(err);
  });
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/insert", (req, res) => {
  const sqlInsert = "INSERT INTO sensors (temperature) VALUES ('30')";
  db.query(sqlInsert, (err, result) => {
    console.log(err);
    res.send("Hello World");
  });
});

app.listen(5000, () => {
  console.log("running on port 5000");
});
