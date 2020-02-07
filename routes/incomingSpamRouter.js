const express = require('express');
const userController = require('../controllers/userController')
const incomingSpamRouter = express.Router();
incomingSpamRouter.get('/incomingSpam', userController.incomingSpam)
module.exports = incomingSpamRouter;