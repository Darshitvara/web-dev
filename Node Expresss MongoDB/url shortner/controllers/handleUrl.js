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
                visitHistory : []
        })
        return res.json({ id : shortId });
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
const test = (req,res) =>{
        return res.json({
                status : "high"
        })
}



module.exports = {
handleNewUrlEntry,
test,
handlePageRedict,
handleGetAnalysis
}