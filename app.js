var express = require('express');
var app = express();

app.use(function (req, res, next) {
    // do your logging here
    console.log(req.method + " / " + res.statusCode);
   	next();
})

app.get('/', function(req, res) {
	res.send("hello");
	console.log()
});

app.get('/news', function(req, res) {
	res.send("news!");
});

app.listen(3000);