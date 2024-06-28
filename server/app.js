require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const router = require("./routes/route");

const app = express();
const port = process.env.PORT;

//connect database
const start = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`example app is listening on port ${port}`);
  });
};
start();
// alow client send json request
app.use(express.json());

app.use("/api", router);
