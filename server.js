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



emitter();
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

var routes = require('./app/routes')(app, passport);

var server = http.createServer(app).listen(port, function() {
    console.log('Listening on port ' + port);
});
io.listen(server);


app.post('/', function (req, res) {
    io.sockets.on('connection', function (socket) {
        //socket.emit('customText', {'text' : "test text"});
        //console.log("SOCKET SUCCESS!");
        //socket.emit('customText', {'text' : "test text"});
        console.log("Ting Connected!");
        console.log("SOCKET CONNECTED!");
        sock = socket;

        sock.emit('customText', {'text' : req.body});
        //console.log(sock);
    });
    console.log(req.body);
    //console.log(req.body.custom_deadline);

    //res.end("completed!");

    //console.log("SOCKET SUCCESS!");
});
function emitter () {

}





//app.listen(3000);