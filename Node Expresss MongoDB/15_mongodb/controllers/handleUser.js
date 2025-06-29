
const {User} = require("../models/index")

const handleGetAllUser = async (req, res) => {
    const allUsers = await User.find({});

    const result = allUsers.map((user) =>{
        console.log("Name : "+user.fname);
        console.log("email : "+user.email);
        console.log("Password : "+user.pass);

        return ({ id : user._id, name : user.fname, email : user.email , password : user.pass})
    })
    return res.json(result);
}

const handleNewUser  = async (req, res) => {
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
}

const handleEditUser = async (req,res)=>{
    console.log(req.params.id);
    try{

        const res = await User.findByIdAndUpdate(req.params.id, { fname : "Jay Joshi"})
        console.log(res);
    }catch(e){
        console.log(e);
    }
    return res.json({message : `User with id ${req.params.id} successfully updated.`})
}

const handleDeleteUser =  async(req, res) => {
    
        await User.findByIdAndDelete(req.params.id)
    
        return res.json({ message: `User with id ${req.params.id} successfully deleted.` });
}

module.exports = {
    handleDeleteUser,
    handleEditUser,
    handleGetAllUser,
    handleNewUser
}