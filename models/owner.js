const mongoose = require("mongoose");

const { Schema } = mongoose;

const ownerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  token: {
    type: Number,
    required: true
  },

  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  
  date: { type: Date, default: Date.now },
});
const ownerModel = mongoose.model("owner", ownerSchema);
module.exports = ownerModel;
