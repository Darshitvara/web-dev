const {nanoid} = require('nanoid')
const {URL} = require("../models/index");
const { redirect } = require('statuses');

const handleNewUrlEntry =  async(req, res) => {
        const body = req.body;
        if(!body.url) return res.status(400).json({error : "url is required."})
        const shortId = nanoid(8);

        await URL.create({
                shortId : shortId,
                redirectURL : body.url,
                visitHistory : [],
                createdBy : req.user._id
        })
        return res.json({ id : shortId });
}

const handleDeleteURL = async (req, res) => {
  try {
    const id = req.params.id;
    await URL.findByIdAndDelete(id);
    res.redirect('/home');
  } catch (err) {
    console.error("Delete failed:", err.message);
    res.status(500).render("error", { statusCode: 500, message: "Failed to delete URL" });
  }
}

const handlePageRedict =  async (req,res) =>{

        const shortId = req.params.shortId

        const entry = await URL.findOneAndUpdate({shortId},{
                $push : {
                        visitHistory : {timestamp : Date.now()}
                },

        })
        return res.redirect(entry.redirectURL)
}

const handleGetAnalysis = async (req,res) =>{

        const shortId = req.params.shortId;
        const result = await URL.findOne({ shortId})
        if(!result) return res.json({
                error : "Link doesn't exits."
        })
        return res.json({
                totalClicks : result.visitHistory.length,
                analytics : result.visitHistory
        })
}

const handleEditURL = async (req, res) => {
  const { id } = req.params;
  const { newUrl } = req.body;

  try {
    await URL.findByIdAndUpdate(id, { redirectURL: newUrl });
    res.redirect('/home');
  } catch (err) {
    console.error('Edit failed:', err.message);
    res.status(500).render('error', {
      statusCode: 500,
      message: 'Failed to update URL'
    });
  }
}

module.exports = {
handleNewUrlEntry,
handlePageRedict,
handleGetAnalysis,
handleEditURL,
handleDeleteURL
}