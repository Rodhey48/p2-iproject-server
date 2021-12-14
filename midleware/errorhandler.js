function errorHandler(err, req, res, next) {
    let status = 500
    let message = "Internal server error"

    if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
        status = 400
        message = err.errors[0].message
    } else if (err.name === "User Not Found") {
        status = 401
        message = "Invalid email/password"
    } else if (err.name === "JsonWebTokenError") {
        status = 401
        message = "Invalid token"
    } else if (err.name === "Unauthorize") {
        status = 400
        message = "Forbiden to Access"
    } else if (err.name === "Job Not Found") {
        status = 404
        message = "Job Not Found"
    }




    res.status(status).json({
        message
    })
}


module.exports = errorHandler