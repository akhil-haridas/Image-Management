const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const config = require("../config/config");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.database.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

