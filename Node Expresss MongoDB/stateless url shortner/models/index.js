const mongoose = require("mongoose");
const express = require("express")

   
    // Schema
    const urlSchema = new mongoose.Schema({
        shortId: { type: String, required: true, unique : true },
        redirectURL: { type: String, required: true },
        visitHistory: [ { timestamp : {type : Number}}],
        createdBy : {
            type: mongoose.Schema.ObjectId,
            ref : "users"
        }

    },{timestamps : true});

    // Model
    const URL = mongoose.model("url", urlSchema);

module.exports = {URL}

