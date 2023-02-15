const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.sendFile(`${__dirname}/views/home.html`);
});
app.get("/picture", (req, res) => {
  res.sendFile(`${__dirname}/resources/image.png`);
});

app.listen(5005);
