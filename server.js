var express = require("express"),
    http = require("http"),
    mongoose = require("mongoose"),
    path = require('path'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    io = require('socket.io')(http);

var port = process.env.PORT || 8080;                //we use port 3000
mongoose.connect('mongodb://localhost/testdb')      //connect to our local db



var app = express();

emitter();
app.set('htdocs', (path.join(__dirname, 'htdocs')));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(bodyParser());
/*
var vidQueue = require('./videoQueue');
console.log(vidQueue.videoQueue);
console.log(vidQueue.enqueueVideo('sample URL 3'));
//console.log(vidQueue.videoQueue);

*/
var sock;



var server = http.createServer(app).listen(port, function() {
    console.log('Listening on port ' + port);
});
io.listen(server);



app.get('/', function(req,res) {
/*
    Comment.findOne(function (err, doc) {
        res.send(doc.name);
    })
*/
    res.sendFile('index.html',{ root: path.join(__dirname, 'htdocs') });
    console.log("GET test passed");


});

app.get('/config', function(req,res) {
    res.sendFile('config.html',{ root: path.join(__dirname, 'htdocs') });
});

app.post('/', function (req, res) {
    //res.sendFile('config.html',{ root: path.join(__dirname, 'htdocs') });
    io.sockets.on('connection', function (socket) {
        //socket.emit('customText', {'text' : "test text"});
        //console.log("SOCKET SUCCESS!");
        //socket.emit('customText', {'text' : "test text"});
        console.log("Ting Connected!");
        console.log("SOCKET CONNECTED!");
        sock = socket;

        sock.emit('customText', {'text' : req.body.custom_text});
        //console.log(sock);
    });
    console.log(req.body.custom_text);
    console.log(req.body.custom_deadline);

    //res.end("completed!");

    //console.log("SOCKET SUCCESS!");
});
function emitter () {

}





//app.listen(3000);