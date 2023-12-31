const mongoose = require("mongoose");

class Database {
  constructor() {
    this.getConnection();
  }

  getConnection() {
    mongoose
      .connect(
        "mongodb+srv://rhino:aliraza@cluster0.uzckkcp.mongodb.net/strugbits?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((error) => {
        console.error("Database connection error:", error);
      });
  }
}

module.exports = Database;
