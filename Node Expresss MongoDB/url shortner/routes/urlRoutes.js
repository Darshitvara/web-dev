const express = require("express")
const {handleNewUrlEntry,test,handlePageRedict,handleGetAnalysis} = require("../controllers/handleUrl")

const router = express.Router()



// Edit a user by ID
router.post("/",handleNewUrlEntry)
router.post("isok",test)

router.get("/:shortId",handlePageRedict)
router.get("/analytics/:shortId",handleGetAnalysis)

module.exports = router