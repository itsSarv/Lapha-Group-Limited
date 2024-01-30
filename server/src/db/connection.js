const mongoose = require("mongoose");
const connection = async () => {
  try {
    const isConnected = await mongoose.connect(
      "mongodb://127.0.0.1:27017/laphaGroup"
    );
    if (isConnected) {
      console.log("Connected to Mongodb");
    }
  } catch (err) {
    console.log("Error Connecting to Mongodb");
  }
};
module.exports = connection;
