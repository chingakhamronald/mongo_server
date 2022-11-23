const mongoose = require("mongoose");
const { Schema } = mongoose;

sellerSchema = new Schema({
  order_id: {
    type: Number,
    require: true,
  },
  seller_name: {
    type: String,
    require: true,
  },
  seller_address: {
    type: String,
    require: true,
  },
  phone_no: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Seller", sellerSchema);
