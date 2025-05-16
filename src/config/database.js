const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://arnegi007:Universe123.@cluster0.dwxqx.mongodb.net/devTinder"
  );
};

module.exports = connectDB;


