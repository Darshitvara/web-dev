const mongoose = require("mongoose");
// // JSON rest api.
const { ClientSession } = require("mongodb");
const express = require("express");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/First-mongodb").then(() => console.log("Mongodb connected.."))
        .catch((err) => console.log("Mongodb Error ", err));


    // Schema
    const userSchema = new mongoose.Schema({
        fname: { type: String, required: true },
        email: { type: String, required: true ,unique : true},
        pass: { type: String, required: true },
    },{timestamps : true});

    // Model
    const User = mongoose.model("user", userSchema);
    


// GET all users
app.get("/users",async (req, res) => {
    const allUsers = await User.find({});

    const result = allUsers.map((user) =>{
        console.log("Name : "+user.fname);
        console.log("email : "+user.email);
        console.log("Password : "+user.pass);

        return ({ id : user._id, name : user.fname, email : user.email , password : user.pass})
    })
    return res.json(result);
});

// POST a new user
app.post("/api/users", async (req, res) => {
    try {
        const { fname, email, pass } = req.body;

        console.log(req.body);
        // Create and save the user
        const newUser = await User.create({ fname, email, pass });

        return res.status(201).json({
            message: "User added successfully.",
            data: newUser,
        });
    } catch (error) {
        console.error("Error saving user:", error);
        return res.status(500).json({ message: "Failed to save user.", error: error.message });
    }
});

// Edit a user by ID
app.patch("/api/users/:id",async (req,res)=>{
    console.log(req.params.id);
    try{

        const res = await User.findByIdAndUpdate(req.params.id, { fname : "Jay Joshi"})
        console.log(res);
    }catch(e){
        console.log(e);
    }
    return res.json({message : `User with id ${req.params.id} successfully updated.`})
})
// DELETE a user by ID
app.delete("/api/users/:id", async(req, res) => {
    
        await User.findByIdAndDelete(req.params.id)
    
        return res.json({ message: `User with id ${req.params.id} successfully deleted.` });
});



// Start server
app.listen(PORT, () => {
    console.log(`Server started on Port : ${PORT}`);
});
