const {
    Request,
    Job
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
            // console.log(err)
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
            // console.log(err)
            next(err)
        }
    }

    static async posReqJob(req, res, next) {
        try {

            const job = await Job.findByPk(+req.params.id)
            if (!job) throw {
                name: "Job Not Found"
            }
            const input = {
                name: req.body.name,
                description: req.body.description,
                JobId: req.params.id,
                EmployeId: req.user.id,
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                status: "Pending",
                authorId: job.authorId
            }
            const request = await Request.create(input)
            res.status(201).json(request)
        } catch (err) {
            // console.log(err)
            next(err)
        }
    }

    static async editStatusJob(req, res, next) {
        try {
            const job = await Job.findByPk(+req.params.id)
            if (!job) throw {
                name: "Job Not Found"
            }
            let updated = await Movie.update({
                status: req.body.status
            }, {
                where: {
                    id: +req.params.id
                }
            });
            if (!updated) {
                throw {
                    name: 'Job Cant updated'
                }
            }
            res.status(201).json({
                message: "Status Updated"
            })
        } catch (err) {
            next(err)
        }
    }

    static async editProgressJob(req, res, next) {
        try {
            const job = await Job.findByPk(+req.params.id)
            if (!job) throw {
                name: "Job Not Found"
            }
            let updated = await Movie.update({
                progress: req.body.progress
            }, {
                where: {
                    id: +req.params.id
                }
            });
            if (!updated) {
                throw {
                    name: 'Job Cant updated'
                }
            }
            res.status(201).json({
                message: "Progress Updated"
            })
        } catch (err) {
            next(err)
        }
    }


}


module.exports = ControllerRequest