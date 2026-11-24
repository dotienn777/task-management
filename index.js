const express = require("express");
// load environment variables from .env file
require("dotenv").config();

const Task = require("./models/task.model.js");
// 1. connect to mongoose
const database = require("./config/database");
database.connect();
// end 1. connect to mongoose
const app = express();
const port = 3000;

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find({
    deleted: false,
  });
  console.log(tasks);

  res.send("List of tasks");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
