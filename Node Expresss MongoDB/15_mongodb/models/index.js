const mongoose = require("mongoose");
const express = require("express")

   
    // Schema
    const userSchema = new mongoose.Schema({
        fname: { type: String, required: true },
        email: { type: String, required: true ,unique : true},
        pass: { type: String, required: true },
    },{timestamps : true});

    // Model
    const User = mongoose.model("user", userSchema);

module.exports = {User}

