const {
    verifyToken
} = require('../helper/jwt')
const {
    User,
    Movie
} = require('../models/index')


const authenMidlewareManager = async (req, res, next) => {
    const {
        access_token
    } = req.headers
    try {
        const verify = verifyToken(access_token)
        if (!verify) throw {
            name: 'JsonWebTokenError'
        }
        const user = await User.findByPk(verify.id)
        if (!user) {
            throw {
                name: 'JsonWebTokenError'
            }
        }

        if (user.position !== "Manager") throw {
            name: "Unauthorize"
        }
        req.user = {
            id: user.id,
            username: user.name,
            position: user.position
        }
        next()

    } catch (err) {
        next(err)

    }

}

const authenMidlewareEmploye = async (req, res, next) => {
    const {
        access_token
    } = req.headers
    try {
        const verify = verifyToken(access_token)
        if (!verify) throw {
            name: 'JsonWebTokenError'
        }
        const user = await User.findByPk(verify.id)
        if (!user) {
            throw {
                name: 'JsonWebTokenError'
            }
        }

        if (user.position !== "Employe") throw {
            name: "Unauthorize"
        }
        req.user = {
            id: user.id,
            username: user.name,
            position: user.position
        }
        next()

    } catch (err) {
        next(err)

    }

}




const authorAdminMidleware = async (req, res, next) => {
    try {
        if (req.user.role === "Admin") {
            next()
        } else {
            throw {
                name: 'Only Admin can Update'
            }

        }


    } catch (err) {
        next(err)
    }

}

module.exports = {
    authenMidlewareManager,
    authenMidlewareEmploye,
    authorAdminMidleware
}