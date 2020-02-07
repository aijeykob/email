require('dotenv').config()
let jwt = require('jsonwebtoken');
let config = require('./config');
const User = require('./models/users');
module.exports = class HandlerGenerator {

    login(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        // For the given username fetch user from DB
        let mockedUsername = process.env.mocked_username;
        let mockedPassword = process.env.mocked_password;

        if (username && password) {
            if (username === mockedUsername && password === mockedPassword) {
                console.log('inHendlerGenerator')
                let token = jwt.sign({ username: username },
                    config.secret,
                    {
                        expiresIn: '24h' // expires in 24 hours
                    }
                );
                // return the JWT token for the future API calls
                res.json({
                    success: true,
                    message: 'Authentication successful!',
                    username: username,
                    token: token,

                });
            } else {
                res.send(403).json({
                    success: false,
                    message: 'Incorrect username or password'
                });
            }
        } else {
            res.send(400).json({
                success: false,
                message: 'Authentication failed! Please check the request'
            });
        }
    };



    async  registration(req, res) {

        const user = req.body;
            console.log('in registration')
        const userfromDb = await User.findOne({ username: user.user.username });
        console.log(userfromDb);
        if (userfromDb == null) {
            const createdUser = await User.create(user.user);
            let token = jwt.sign({ username: user.user.username },
                config.secret,
                {
                    expiresIn: '24h' // expires in 24 hours
                }
            );
            res.status(201).send({
                success: true,
                message: 'Authentication successful!',
                token: token,
                username: user.user.username
            })


        } else if (user.user.password == userfromDb.password) {
            let token = jwt.sign({ username: user.user.username },
                config.secret,
                {
                    expiresIn: '24h' // expires in 24 hours
                }
            );

            res.status(201).send({
                success: true,
                message: 'Authentication successful!',
                token: token,
                username: user.user.username
            })
        }


        else {
            res.status(403).send("This user already exist");

        }

    }
}