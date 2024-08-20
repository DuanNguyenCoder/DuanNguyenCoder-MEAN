require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const router = require("./routes/route");

const app = express();
const port = process.env.PORT;

const cors = require("cors");
app.use(cors());

//connect database
const start = async () => {
  await connectDB();
  app.listen(port);
};
start();

// alow client send json request
app.use(express.json());

// Cung cấp các tệp tĩnh trong thư mục uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", router);
