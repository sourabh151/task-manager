const express = require("express");
require("dotenv").config();
const app = express();
const userRoute = require("./routes/User.js");
const mongoose = require("mongoose");

app.use(express.json());

app.use("/api/v1/users", userRoute);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
