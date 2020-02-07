const User = require('../models/users');
const Email = require('../models/emails')
let jwt = require('jsonwebtoken');

exports.user = async function (req, res) {

    const allUsers = await User.find({ username: { $ne: req.username } });
    res.json({
        users: allUsers
    })
};

exports.sendEmail = async function (req, res) {

    const email = {
        whoSend: req.username,
        whomSend: req.body.whomSend,
        text: req.body.text,
        subject: req.body.subject,
        statusRead: 'false',
        statusBasket: 'false',
        statusSpam: 'false'
    }
    const createEmail = await Email.create(email);
    const socketId = req.connections.find(el => el.name == req.body.whomSend);
    if (socketId !== undefined) {
        req.io.to(`${socketId.socket}`).emit('newMessage', { createEmail });

        res.json({
            createEmail: createEmail
        })
    } else {
        res.json({
            createEmail: createEmail
        })
    }
};


exports.sendedEmail = async function (req, res) {

    const sendedEmail = await Email.find({ whoSend: req.username });
    res.json({
        sendedEmail: sendedEmail
    })

};


exports.checkCurrentUser = async function (req, res) {

    res.json({
        user: req.username,

    })
};

exports.incomingEmail = async function (req, res) {

    const incomingEmail = await Email.find({ whomSend: req.username, statusSpam: 'false', statusBasket: 'false' });
    res.json({
        incomingEmail: incomingEmail
    })
};
exports.incomingSpam = async function (req, res) {

    const incomingSpam = await Email.find({ whomSend: req.username, statusSpam: 'true', statusBasket: 'false' });
    res.json({
        incomingSpam: incomingSpam
    })
};
exports.incomingBasket = async function (req, res) {

    const incomingBasket = await Email.find({ whomSend: req.username, statusBasket: 'true' });
    res.json({
        incomingBasket: incomingBasket
    })
};
exports.changeStatusToMany = async function (req, res) {
    console.log(req.username)
    console.log(req.body.currentTab)

    try {
        if (req.body.action == 'spam') {

            await Email.updateMany(
                {
                    '_id': { $in: [...req.body.id] }
                },
                { statusSpam: 'true' }
            );


        }
        else if (req.body.action == 'noSpam') {

            await Email.updateMany(
                {
                    '_id': { $in: [...req.body.id] }
                },
                { statusSpam: 'false' }
            );

        }
        else if (req.body.action == 'delete') {

            await Email.updateMany(
                {
                    '_id': { $in: [...req.body.id] }
                },
                { statusBasket: 'true' }
            );

        }
        else if (req.body.action == 'noDelete') {

            await Email.updateMany(
                {
                    '_id': { $in: [...req.body.id] }
                },
                { statusBasket: 'false' }
            );

        }
        else if (req.body.action == 'read') {

            await Email.updateMany(
                {
                    '_id': { $in: [...req.body.id] }
                },
                { statusRead: 'true' }
            );
        }
        else if (req.body.action == 'unread') {

            await Email.updateMany(
                {
                    '_id': { $in: [...req.body.id] }
                },
                { statusRead: 'false' }
            );


        }
    }
    catch (err) {
        res.send(err)
    }
    if (req.body.currentTab == 'incomingEmails') {
        const updatedEmails = await Email.find({ whomSend: req.username, statusSpam: 'false', statusBasket: 'false' });
        res.status(201).json({ updatedEmails })

    } else if (req.body.currentTab == 'spamEmails') {
        const updatedEmails = await Email.find({ whomSend: req.username, statusSpam: 'true', statusBasket: 'false' });
        res.status(201).json({ updatedEmails })

    } else if (req.body.currentTab == 'basketEmails') {
        const updatedEmails = await Email.find({ whomSend: req.username, statusBasket: 'true' });
        res.status(201).json({ updatedEmails })
    }

};