const routes = require('express').Router();
const middleware = require('../middleware');
const allUsersRouter = require('./allUsersRouter')
const sendEmailRouter = require('./sendEmailRouter')
const sendedEmailRouter = require('./sendedEmailRouter')
const incomingEmailRouter = require('./incomingEmailRouter')
const incomingSpamRouter = require('./incomingSpamRouter')
const incomingBasketRouter = require('./incomingBasketRouter')
const checkCurrentUserRouter = require('./checkCurrentUserRouter')
const changeStatusToManyRouter = require('./changeStatusToManyRouter')

const HandlerGenerator = require('../HandlerGenerator');
let handlers = new HandlerGenerator();
routes.post('/register', handlers.registration);
routes.post('/sendEmail', middleware.checkToken, sendEmailRouter);
routes.get('/sendedEmail', middleware.checkToken, sendedEmailRouter);
routes.get('/incomingEmail', middleware.checkToken, incomingEmailRouter)
routes.get('/incomingSpam', middleware.checkToken, incomingSpamRouter)
routes.get('/incomingBasket', middleware.checkToken, incomingBasketRouter)
routes.get('/checkCurrentUser', middleware.checkToken, checkCurrentUserRouter)
routes.get('/allUsers', middleware.checkToken, allUsersRouter)
routes.put('/changeStatusToMany', middleware.checkToken, changeStatusToManyRouter);


module.exports = routes;