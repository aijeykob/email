const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require("cors");
const mongoose = require('mongoose');


const http = require('http')
const socketServer = require('socket.io')
const app = express();

var serve = http.createServer(app);
var io = socketServer(serve);
let jwt = require('jsonwebtoken');


let connections = [];
io.on('connection', function (socket) {

  console.log("Connected to Socket!!" + socket.id)
  const token = socket.handshake.query['token']
  const decoded = jwt.verify(token, 'secret');
  connections.push({ socket: socket.id, name: decoded.username })
  socket.on('disconnect', function () {
    connections = connections.filter(el => el.socket !== socket.id);
  });
})


app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  console.log(token + '11111111111111111111')
  if (token == undefined) {
    next();
  }
  else if (token.length > 12) {

    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }
    const decoded = jwt.verify(token, 'secret');
    req.username = decoded.username
    console.log(connections)
    req.connections = connections
    req.io = io;
    next()
  }

  else if (token.length < 12) {
    res.send(403).json({
      success: false,
      message: 'Token is not valid'
    });
  }



});
app.use('/', routes);
mongoose.connect(
  'mongodb://localhost/email',
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) return console.log(err);
    serve.listen(4000, function () {
      console.log('Connected!')
    });
  }
);