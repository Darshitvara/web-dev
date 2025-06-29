const {v4 : uuidv4} = require("uuid")
const {setUser,getUser} = require("../service/auth")

const {User} = require("../models/user");
const { redirect } = require('statuses');

const handleUserSignup =  async (req,res) =>{
    const { name, email, password } = req.body;

    if(!email) return res.status(400).json({error : "email is required."})
    else if(!name) return res.status(400).json({error : "name is required."})
    else if(!password) return res.status(400).json({error : "password is required."})

    await User.create({
        name,
        email ,
        password 
    })

    return res.redirect("/user/login")    
}

const handleUserLogin = async (req,res) =>{
    const { email, password } = req.body;
    
    
    if(!email) return res.status(400).json({error : "email is required."})
        else if(!password) return res.status(400).json({error : "name is required."})
    
    const user = await User.findOne({ email,password });
    
    if(!user) return res.render("error",{
        error : "Invalid Username or password.",
    });   

    // setting the session on client machine
    const token = setUser(user)
    res.cookie("uid",token)
    return res.redirect("/Home")     
}

module.exports = {
handleUserLogin,
handleUserSignup
}