const serviceRouter = require('express').Router()
const {serviceController} = require("../controller")

serviceRouter.post('/follow', serviceController.follow.post)
serviceRouter.get('/information',serviceController.information.get)

module.exports = serviceRouter