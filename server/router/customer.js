const customerRouter = require('express').Router()
const {customerController} = require("../controller")

customerRouter.post('/signup', customerController.signup.post)
customerRouter.post('/signin', customerController.signin.post)
customerRouter.post('/signout',customerController.signout.post)
customerRouter.get('/auth',customerController.auth.get)

module.exports = customerRouter

