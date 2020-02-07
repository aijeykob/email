const express = require('express');
const userController = require('../controllers/userController')
const incomingEmailRouter = express.Router();
incomingEmailRouter.get('/incomingEmail', userController.incomingEmail)
module.exports = incomingEmailRouter;