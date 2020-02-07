const express = require('express');
const userController = require('../controllers/userController')
const sendEmailRouter = express.Router();
sendEmailRouter.post('/sendEmail', userController.sendEmail)
module.exports = sendEmailRouter;