const express = require("express")
const {handleUserLogin,handleUserSignup} = require("../controllers/handleUser")

const router = express.Router()


// For redirect purpose
router.get("/login",(req,res)=>{
    return res.render('login', { error: null })
})
router.get("/signup",(req,res)=>{
    return res.render('signup', { error: null })
})


router.post("/login",handleUserLogin)
router.post("/signup",handleUserSignup)


module.exports = router