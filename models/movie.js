const mongoose = require("mongoose");

const { Schema } = mongoose;

const movieSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
   totalseats: {
    type: Number,
       required: true
  },
   availableseats: {
    type: Number,
       required: true
  },
   showtime: {
    type: String,
       required: true
  },
  ticketprice: {
    type: Number,
       required: true
  },
  rating: {
    type: Number,
    required: true
  },
  poster: 
    {
      type: String,
        required: true

    },
  
 
  date: { type: Date, default: Date.now },
});
const movieModel = mongoose.model("movie", movieSchema);
module.exports = movieModel;
