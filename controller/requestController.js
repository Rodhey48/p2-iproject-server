const {
    Request
} = require("../models/index")



class ControllerRequest {
    static async getReqEmploye(req, res, next) {
        try {
            const jobs = await Request.findAll({
                where: {
                    EmployeId: +req.user.id
                }
            })
            res.status(200).json(jobs)
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async getReqManager(req, res, next) {
        try {
            const jobs = await Request.findAll({
                where: {
                    authorId: +req.user.id
                }
            })
            res.status(200).json(jobs)
        } catch (err) {
            console.log(err)
            next(err)
        }
    }



}


module.exports = ControllerRequest