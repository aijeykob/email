const express = require('express');
const userController = require('../controllers/userController')
const checkCurrentUserRouter = express.Router();
checkCurrentUserRouter.get('/checkCurrentUser', userController.checkCurrentUser)
module.exports = checkCurrentUserRouter;