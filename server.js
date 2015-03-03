var express = require("express"),
    http = require("http"),
    mongoose = require("mongoose"),
    path = require('path'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    io = require('socket.io')(http);

var cookieParser = require('cookie-parser');
var session = require('express-session');



var port = process.env.PORT || 8080;                //we use port 3000
mongoose.connect('mongodb://localhost/testdb')      //connect to our local db



var app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(bodyParser());
/*
var vidQueue = require('./videoQueue');
console.log(vidQueue.videoQueue);
console.log(vidQueue.enqueueVideo('sample URL 3'));
//console.log(vidQueue.videoQueue);

*/
var sock;

//passport configuration
app.use(session({ secret: 'BBCastUCLfranzPalngipang'}));
app.use(passport.initialize());
app.use(passport.session());



var server = http.createServer(app).listen(port, function() {
    console.log('Listening on port ' + port);
});
io.listen(server);

require('./app/routes')(app, passport, io);
io.sockets.on('connection', function (socket) {
    console.log("a socket connected");
});

