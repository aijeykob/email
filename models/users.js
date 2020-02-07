
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeScheme = new Schema(
    {
        username: String,
        password: String
    }
);
module.exports = mongoose.model("Users", placeScheme);