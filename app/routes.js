/**
 * Created by jfpalngipang on 2/16/15.
 */

app.get('/', function(req, res) {
    res.sendFile('index.html',{ root: path.join(__dirname, 'views') });
});

app.get('/login', function(req, res) {
   res.sendFile('login.html', { root: path.join(__dirname, 'views') });
});

app.get('/display', function(req, res) {
    res.sendFile('display.html', { root: path.join(__dirname, 'views')} );
});

app.get('/config', function(req, res) {
   res.sendFile('config.html', { root: path.join(__dirname, 'views')} );
});

app.post('/')