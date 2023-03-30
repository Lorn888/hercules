const express = require("express");
const app = express();
const path = require("path");
const Workout = require("./models/workout");

const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

require("dotenv").config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log(
    "MongoDB database connection established successfully http://192.168.0.229:3201/"
  );
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const workouts = await Workout.find({});
  console.log(workouts);
  res.render("home", { workouts });
});

app.listen(3201, () => {
  console.log("Port is working :)");
});
