const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "notifications_db_udc"
    });

    console.log("MongoDB conectado correctamente");
  } catch (err) {
    console.error("Error conectando a MongoDB:", err);
    process.exit(1);
  }
}

module.exports = connectDB;
