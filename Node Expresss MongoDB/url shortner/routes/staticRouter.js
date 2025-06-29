const express = require("express")
const router = express.Router()
const {URL} = require("../models/index");



router.get("/",async (req,res)=>{
    const allUrl = await URL.find({});

    return res.render('Home',{
        allUrls : allUrl
    })
})


module.exports = router