const express = require("express")
const router = express.Router()
const {URL} = require("../models/index");



router.get("/Home",async (req,res)=>{
    if(!req.user) return res.redirect("/login")
        const allUrl = await URL.find({createdBy : req.user._id });
    console.log(allUrl)

    return res.render('Home',{
        allUrls : allUrl
    })
})


module.exports = router

    