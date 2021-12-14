const express = require('express')
const app = express()
const router = express.Router()

const ControllerUser = require('../controller/userController')
const ControllerJobs = require("../controller/jobsController")
const ControllerRequest = require("../controller/requestController")


const {
    authenMidlewareManager,
    authenMidlewareEmploye
} = require('../midleware/midleware')





router.post('/register', ControllerUser.registerUser)
router.post('/login', ControllerUser.loginUser)


router.get('/manager/jobs', authenMidlewareManager, ControllerJobs.getJobsManager)
router.post('/manager/jobs', authenMidlewareManager, ControllerJobs.postJob)
router.put('/manager/jobs/:id', authenMidlewareManager, ControllerJobs.editJob)
router.get('/manager/request', authenMidlewareManager, ControllerRequest.getReqManager)


router.get('/employe/jobs', authenMidlewareEmploye, ControllerJobs.getJobsEmploye)
router.post('/employe/jobs/:id', authenMidlewareEmploye, ControllerRequest.posReqJob)
router.patch('/employe/jobs/status/:id', authenMidlewareEmploye, ControllerRequest.editStatusJob)
router.patch('/employe/jobs/progress/:id', authenMidlewareEmploye, ControllerRequest.editProgressJob)
router.get('/employe/request', authenMidlewareEmploye, ControllerRequest.getReqEmploye)




module.exports = router