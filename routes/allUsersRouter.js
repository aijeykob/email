const express = require('express');
const userController = require('../controllers/userController')
const allUsersRouter = express.Router();
allUsersRouter.get('/allUsers', userController.user)
module.exports = allUsersRouter;