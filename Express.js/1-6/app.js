const express = require("express");
const app = express();

app.get("/:page", (req, res) => {
  const page = req.params.page;
  res.sendFile(`${__dirname}/views/${page}.html`);
});

app.listen(5005);
