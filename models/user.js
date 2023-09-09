const mongoose = require("mongoose");

const { Schema } = mongoose;

const usersSchema = new Schema({
  name: {
    type: String,
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
  mobile:{
    type:Number,
    required:true
  },
 
  date: { type: Date, default: Date.now },
});
const userModel = mongoose.model("user", usersSchema);
module.exports = userModel;
