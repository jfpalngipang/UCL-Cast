/**
 * Created by jfpalngipang on 2/16/15.
 */
module.exports = function(app, passport) {
    app.get('/', function (req, res) {
        res.render('index.html');
    });

    app.get('/login', function (req, res) {
        res.sendFile('login.html', {root: path.join(__dirname, 'views')});
    });

    app.get('/display', function (req, res) {
        res.sendFile('display.html', {root: path.join(__dirname, 'views')});
    });

    app.get('/config', function (req, res) {
        res.sendFile('config.html', {root: path.join(__dirname, 'views')});
    });

    app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email'}));

    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));

};


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}
