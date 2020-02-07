const express = require('express');
const userController = require('../controllers/userController')
const incomingBasketRouter = express.Router();
incomingBasketRouter.get('/incomingBasket', userController.incomingBasket)
module.exports = incomingBasketRouter;