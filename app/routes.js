/**
 * Created by jfpalngipang on 2/16/15.
 */
var Video = require("./models/video");
module.exports = function(app, passport, io, mongoose) {


    app.get('/', function (req, res) {
        res.render('index.ejs');

       if(req.query.action === "getVideoQueue") {
            Video.find({}, function(err, videos){
                if(err) throw err;
                res.send(videos);
            });
        }

        if (req.query.action === "getImageQueue") {

        } if(req.query.action === "getTextQueue") {

        } if(req.query.action === "getCurrentVideo") {

        } if (req.query.action === "getCurrentImage") {

        } if (req.query.action === "getCurrentText") {

        } if (req.query.action === "getCurrentLayout") {

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

        } if (req.body.action === "deleteVideo") {

        } if (req.body.action === "deleteImage") {

        } if (req.body.action === "deleteText") {

        }
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
