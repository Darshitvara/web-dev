const express = require("express")
const {handleNewUrlEntry,handlePageRedict,handleGetAnalysis,handleDeleteURL,handleEditURL} = require("../controllers/handleUrl")

const router = express.Router()



// Edit a user by ID
router.post("/",handleNewUrlEntry)
router.get("/:shortId",handlePageRedict)
router.get("/analytics/:shortId",handleGetAnalysis)
// Delete URL route
router.post('/delete/:id', handleDeleteURL);
router.post('/edit/:id', handleEditURL);

module.exports = router