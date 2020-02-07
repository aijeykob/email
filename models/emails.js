
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeScheme = new Schema(
  {
    whoSend: String,
    whomSend: String,
    statusRead: String,
    statusSpam: String,
    statusBasket: String,
    text: String,
    subject: String
  }
);
module.exports = mongoose.model("Emails", placeScheme);