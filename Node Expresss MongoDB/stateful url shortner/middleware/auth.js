const {getUser} = require("../service/auth")

async function restrictUnloggedUser(req,res,next) {
    const userUid = req.cookies.uid

    if(!userUid) return res.redirect("/user/login");
    
    const user = getUser(userUid)
    
    if(!user) return res.redirect("/user/login");

    req.user = user

    next()

}
async function checkAuth(req,res,next) {
    const userUid = req.cookies.uid

    const user = getUser(userUid)

    
    if(!user) return res.redirect("/user/login");

    req.user = user

    next()

}

module.exports = {restrictUnloggedUser,checkAuth}