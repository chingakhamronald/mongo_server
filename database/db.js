const mongoose = require("mongoose");
const dotenv = require("dotenv");

module.exports = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-e327d1y-shard-00-00.xlq5ggs.mongodb.net:27017,ac-e327d1y-shard-00-01.xlq5ggs.mongodb.net:27017,ac-e327d1y-shard-00-02.xlq5ggs.mongodb.net:27017/?ssl=true&replicaSet=atlas-bf6dmv-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Error while connecting with the database", err);
  }
};
