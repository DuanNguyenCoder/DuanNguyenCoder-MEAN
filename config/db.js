const mongoose = require("mongoose");

require("dotenv").config();
const databaseStr = process.env.DATABASE;

const connect = () => {
  mongoose
    .connect(databaseStr)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err));
};

module.exports = connect;
