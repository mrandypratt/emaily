const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send({hi: "hello"});
});

app.listen(8080);