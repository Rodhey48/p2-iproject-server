const {
    User
} = require("../models/index")

const {
    verifyPassword
} = require("../helper/bcryptjs")

const {
    signToken
} = require("../helper/jwt")

class ControllerUser {
    static async registerUser(req, res, next) {

        console.log("masuk")
        const {
            name,
            password,
            position,
            email,
            phoneNumber
        } = req.body
        try {
            const result = await User.create({
                name,
                password,
                position,
                email,
                phoneNumber
            });
            res.status(201).json({
                name: result.name,
                position: result.position,
                email: result.email,
                phoneNumber: result.phoneNumber
            })

        } catch (err) {
            // console.log(err)
            next(err)
        }
    }


    static async loginUser(req, res, next) {
        let input = {
            email: req.body.email,
            password: req.body.password
        }

        try {
            const result = await User.findOne({
                where: {
                    email: input.email
                }
            });
            if (!result) {
                throw {
                    name: "User Not Found"
                }
            }
            const flag = verifyPassword(input.password, result.password)
            if (!flag) {
                throw {
                    name: "User Not Found"
                }
            }
            let token = {
                id: result.id,
                name: result.name,
                position: result.position
            }

            token = signToken(token)
            if (!token) throw {
                name: "JsonWebTokenError"
            }
            res.status(200).json({
                access_token: token
            });



        } catch (err) {
            console.log(err)
            next(err)

        }
    }








}


module.exports = ControllerUser