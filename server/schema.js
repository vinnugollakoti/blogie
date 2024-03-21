const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    author: String,
    email: String,
    heading: String,
    blog: String
});

module.exports = mongoose.model("Data", dataSchema);
