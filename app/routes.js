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
            UImage.find({}, function(err, uimages){
                if(err) throw err;
                res.send(uimages);
            });
        }

         if(req.query.action === "getTextQueue") {
            Utext.find({}, function(err, utexts){
                if(err) throw err;
                res.send(utexts);
            });
        }

        if(req.query.action === "getCurrentVideo") {

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
        } if (req.body.action === "addVideo") {
            //priorityEncoder
            var timein = new Date();
            var timeout = new Date(req.body.deadline);
            var mediattl = timeout - timein;
            //end of priorityEncoder
            var newVideo = Video ({
                videoId :   req.body.videoID,
                timeIn  :   timein,
                timeOut :   timeout
            });
            //save to db
            newVideo.save(function(err){
                if(err) throw err;

                console.log(newVideo);
            });





        } if (req.body.action === "addImage") {
            //priorityEncoder
            var timein = new Date();
            var timeout = new Date(req.body.deadline);
            var mediattl = timeout - timein;
            //end of priorityEncoder
            var newImage = UImage ({
                ImageUrl :   req.body.url,
                timeIn  :   timein,
                timeOut :   timeout
            });
            //save to db
            newImage.save(function(err){
            if(err) throw err;

            console.log(newImage);
            });

        } if (req.body.action === "addText"){
            var timein = new Date();
            var timeout = new Date(req.body.deadline);
            var mediattl = timeout - timein;
            //end of priorityEncoder
            var newText = UText ({
                ImageUrl :   req.body.url,
                timeIn  :   timein,
                timeOut :   timeout
            });
            //save to db
            newText.save(function(err){
            if(err) throw err;

            console.log(newText);
            });


        } if (req.body.action === "deleteVideo") {
            Video.findByIdAndRemove(req.body.videoId, function(err){
                if(err) throw err;
            });

        } if (req.body.action === "deleteImage") {
            UImage.findByIdAndRemove(req.body.videoId, function(err){
                if(err) throw err;
            });

        } if (req.body.action === "deleteText") {
            UText.findByIdAndRemove(req.body.videoId, function(err){
                if(err) throw err;
            });

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
