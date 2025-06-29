const express = require("express")
const {handleGetAllUser,handleNewUser,handleDeleteUser,handleEditUser} = require("../controllers/handleUser")

const router = express.Router()



// GET all users
router.get("/",handleGetAllUser);

// POST a new user
router.post("/",handleNewUser);

// Edit a user by ID
router.patch("/:id",handleEditUser)

// DELETE a user by ID
router.delete("/:id",handleDeleteUser);


module.exports = router