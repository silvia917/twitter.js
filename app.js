var express = require('express');
var swig = require('swig');
var morgan = require('morgan');
var app = express();
var routes = require('./routes/');


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use (morgan ("dev"));
/*morgan is a module that returns status codes and substituted our previous code:
app.use(function (req, res, next) {
    console.log(req.method + "/" + res.statusCode);
    next();
}) */

app.use(express.static(__dirname + '/public'));
//if a certain file (e.g. index.html) utilizes something else like a stylsheet/style.css file, this line takes statc files and searches for them within our directory and renders it if there is a such file. if not, it will go on to the next app.use and find files there

app.use('/', routes);

/*app.get('/', function(req, res) {
	res.render('index', {title: data.title, people: data.people});
});

app.get('/news', function(req, res) {
	res.send("news!");
});*/

// in some file that is in the root directory of our application
var data = {
    title: 'An Example',
    people: [{
        name: 'Gandalf',
    }, {
        name: 'Frodo'
    }, {
        name: 'Hermione'
    }]
};
swig.renderFile(__dirname + '/views/index.html', data, function (err, output) {
    console.log(output);
});

swig.setDefaults({cache: false});

app.listen(3000);