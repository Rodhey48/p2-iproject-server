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


router.get('/employe/jobs', authenMidlewareManager, ControllerJobs.getJobsEmploye)
router.get('/employe/request', authenMidlewareEmploye, ControllerRequest.getReqEmploye)




module.exports = router