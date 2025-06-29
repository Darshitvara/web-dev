const {getUser} = require("../service/auth")

async function restrictUnloggedUser(req,res,next) {
    // const userUid = req.cookies.uid
    
    const userUid = req.headers['authorization']

    const token = userUid.split("Bearer")[1]

    if(!userUid) return res.redirect("/user/login");
    
    const user = getUser(token)
    
    if(!user) return res.redirect("/user/login");

    req.user = user

    next()

}
async function checkAuth(req,res,next) {

    const userUid = req.headers['authorization']

    const token = userUid.split("Bearer")[1]


    // const userUid = req.cookies.uid
    // const user = getUser(userUid)
    const user = getUser(token)


    
    if(!user) return res.redirect("/user/login");

    req.user = user

    next()

}

module.exports = {restrictUnloggedUser,checkAuth}