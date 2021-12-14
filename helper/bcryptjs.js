const bcrypt = require("bcryptjs")


function hashPassword(input) {
    return bcrypt.hashSync(input, 8)
}

function verifyPassword(input, userPassword) {
    return bcrypt.compareSync(input, userPassword)
}

module.exports = {
    hashPassword,
    verifyPassword
}