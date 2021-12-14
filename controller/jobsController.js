const {
    Job
} = require("../models/index")


class ControllerJobs {
    static async getJobsManager(req, res, next) {
        try {
            const jobs = await Job.findAll({
                where: {
                    authorId: +req.user.id
                }
            })
            res.status(200).json(jobs)
        } catch (err) {
            next(err)
        }
    }

    static async getJobsEmploye(req, res, next) {
        try {
            const jobs = await Job.findAll({
                where: {
                    EmployeId: +req.user.id
                }
            })
            res.status(200).json(jobs)
        } catch (err) {
            next(err)
        }
    }


    static async postJob(req, res, next) {
        const input = {
            name: req.body.name,
            description: req.body.description,
            dificulty: req.body.dificulty,
            deadline: req.body.deadline,
            EmployeId: req.body.EmployeId,
            authorId: req.user.id,
            status: "Pending",
            progress: 0,
            link: req.body.link
        }
        try {
            const respone = await Job.create(input)
            res.status(201).json(respone)
        } catch (err) {
            // console.log(err)
            next(err)
        }
    }

    static async editJob(req, res, next) {
        console.log(req.user)
        const input = {
            name: req.body.name,
            description: req.body.description,
            dificulty: req.body.dificulty,
            deadline: req.body.deadline,
            EmployeId: req.body.EmployeId,
            authorId: req.user.id,
            status: "Pending",
            progress: 0,
            link: req.body.link
        }
        try {
            const job = await Job.findByPk(+req.params.id)
            if (!job) throw {
                name: "Job Not Found"
            }
            const respone = await Job.update(input, {
                where: {
                    id: +req.params.id
                }
            })
            res.status(201).json({
                message: "Job Edited"
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }




}

module.exports = ControllerJobs