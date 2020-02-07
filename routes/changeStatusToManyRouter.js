const express = require('express');
const userController = require('../controllers/userController')
const changeStatusToManyRouter = express.Router();
changeStatusToManyRouter.put('/changeStatusToMany', userController.changeStatusToMany)
module.exports = changeStatusToManyRouter;