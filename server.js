var express = require("express"),
    http = require("http"),
    mongoose = require("mongoose"),
    path = require('path'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    twitter = require('ntwitter'),
    io = require('socket.io')(http);

var cookieParser = require('cookie-parser');
var session = require('express-session');

var port = process.env.PORT || 8080;                //we use port 3000
mongoose.connect('mongodb://localhost/BBCast_test')      //connect to our local db

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

var prio = require('./priorityEncoder');
console.log(prio.getLifeTime());
//passport configuration
app.use(session({ secret: 'BBCastUCLfranzPalngipang'}));
app.use(passport.initialize());
app.use(passport.session());

//var twit = new twitter(config.twitter);



var server = http.createServer(app).listen(port, function() {
    console.log('Listening on port ' + port);
});
io.listen(server);

require('./app/routes')(app, passport, io, mongoose);
io.sockets.on('connection', function (socket) {
    console.log("a socket connected");
});

