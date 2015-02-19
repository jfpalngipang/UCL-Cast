/**
 * Created by jfpalngipang on 2/16/15.
 */
module.exports = function(app, passport, io) {

    app.get('/', function (req, res) {
        res.render('index.ejs');
    });

    app.get('/login', function (req, res) {
        res.render('login.ejs');
    });

    app.get('/display', function (req, res) {
        res.render('display.ejs');
    });

    app.post('/', function (req, res) {
        //io.sockets.on('connection', function (socket) {
        //socket.emit('customText', {'text' : "test text"});
        //console.log("SOCKET SUCCESS!");
        //socket.emit('customText', {'text' : "test text"});
        //console.log("Ting Connected!");
        //console.log("SOCKET CONNECTED!");

        if(req.body.action === "castImage") {
            io.sockets.emit('castImage', {});
        }
        io.sockets.emit('customText', {'text' : req.body.custom_text});
        //res.end('received!');

        console.log(req.body);
    });

    app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email'}));

    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        successRedirect: '/display',
        failureRedirect: '/login'
    }));

};


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}
