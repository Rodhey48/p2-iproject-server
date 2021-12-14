// require('dotenv').config()
const jwt = require("jsonwebtoken")
const SECRETKEY = process.env.SECRETKEY || "INIRAHASIA"


function signToken(payload) {
    return jwt.sign(payload, SECRETKEY)
}

function verifyToken(token) {
    return jwt.verify(token, SECRETKEY)
}


module.exports = {
    signToken,
    verifyToken
}