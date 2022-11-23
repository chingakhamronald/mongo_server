const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  order_id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", userSchema);
