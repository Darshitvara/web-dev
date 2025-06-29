const mongoose = require("mongoose");

    // Schema
    const urlSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true ,unique : true},
        password: {type : String, required : true},
    },{timestamps : true});

    // Model
    const User = mongoose.model("user", urlSchema);

module.exports = {User}