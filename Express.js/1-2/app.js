const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Root Route");
});

app.get("/:route", (req, res) => {
  const route = req.params.route.toLowerCase();
  switch (route) {
    case "home":
    case "about":
    case "contact":
      res.send(`${route[0].toUpperCase() + route.slice(1)} Route`);
      break;
    default:
      res.send(`Not Found`);
      break;
  }
});

app.listen(5005);
