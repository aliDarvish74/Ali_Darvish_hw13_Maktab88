const { json } = require("express");
const express = require("express");
const { readFileSync } = require("node:fs");
const app = express();

app.get("/", (req, res) => {
  res.send("Root Route");
});

app.get("/:users", (req, res) => {
  const users = req.params.users;
  switch (users) {
    case "get-all-users":
      res.sendFile(`${__dirname}/user-data.json`);
      break;
    case "admins":
      try {
        let data = readFileSync("./user-data.json", "utf-8");
        data = JSON.parse(data).filter((user) => user.role === "admin");
        res.json(data);
      } catch (error) {
        console.log(error?.message);
      }

      break;
    default:
      res.send(`Not Found`);
      break;
  }
});

app.listen(5005);
