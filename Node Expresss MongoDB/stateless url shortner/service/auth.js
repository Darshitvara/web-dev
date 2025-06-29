const jwt = require("jsonwebtoken")
const encryptionKey = "e34ncsdrdyptiondfKe44#$#y" 

function setUser(user){
    return jwt.sign({
        _id : user._id,
        email : user.email
    },encryptionKey)
}
function getUser(token){
    try {
        return jwt.verify(token , encryptionKey)
    } catch (error) {
        return null
    }
}

module.exports = {setUser,getUser}

