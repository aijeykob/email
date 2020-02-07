let jwt = require('jsonwebtoken');
const config = require('./config.js');

let checkToken = (req, res, next) => {
    console.log('in cheeeeeeeeeeeeeeck')
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase

    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }
    console.log(token + '++++++tokEEEEninMiddle')
    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            console.log('in middleware')

            if (err) {
                return res.send(403).json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                console.log('decoded')
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
};
module.exports = {
    checkToken: checkToken
}