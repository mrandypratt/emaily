const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send({hi: "bye"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT);