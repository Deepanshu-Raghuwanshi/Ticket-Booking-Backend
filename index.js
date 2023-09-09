const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

const ownerRoute = require("./routes/ownerRoutes");
const userRoute = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
const cors = require("cors");
const mySecret = process.env.PASSWORD;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRoute);
app.use("/owner", ownerRoute);
app.use("/movie", movieRoutes);

const mongoUri = `mongodb+srv://dipanshuraghuwanshi:${mySecret}@cluster0.luqz6xt.mongodb.net/TicketBooking?retryWrites=true&w=majority`;

const databaseConnect = () => {
  return mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
databaseConnect().then((data) => {
  console.log("Server started with mongodb atlas");
});

app.listen("8080", () => {
  console.log("Express Server started at port 8080");
});
