/**
 * Created by jfpalngipang on 2/16/15.
 */
module.exports = function(app, passport, io) {

    app.get('/', function (req, res) {
        res.render('index.ejs');

        if(req.body.action === "getVideoQueue") {

        } if (req.body.action === "getImageQueue") {

        } if(req.body.action === "getTextQueue") {

        }

    });

    app.get('/login', function (req, res) {
        res.render('login.ejs');
    });

    app.get('/display', function (req, res) {
        res.render('display.ejs');
    });

    app.post('/', function (req, res) {

        if(req.body.action === "castImage") {
            io.sockets.emit('castImage', {'imageURL':req.body.imageURL});
        } if (req.body.action === "castText") {
            io.sockets.emit('castText', {'customText': req.body.customText});
        } if (req.body.action === "castVideo") {
            io.sockets.emit('castVideo', {'videoID': req.body.videoID});
        } if (req.body.action === "addImage") {

        } if (req.body.action === "addText") {

        } if (req.body.action === "addVideo") {

        }
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
