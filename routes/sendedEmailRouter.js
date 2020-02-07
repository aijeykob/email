const express = require('express');
const userController = require('../controllers/userController')
const sendedEmailRouter = express.Router();
sendedEmailRouter.get('/sendedEmail', userController.sendedEmail)
module.exports = sendedEmailRouter;