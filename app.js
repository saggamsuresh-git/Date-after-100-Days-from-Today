const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const today = new Date();
  const result = addDays(today, 100);
  response.send(
    `${result.getDate()}/${1 + result.getMonth()}/${result.getFullYear()}`
  );
});

module.exports = app;
