var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

/*router.get('/stylesheets/style.css', function (req, res) {
  res.sendFile('/stylesheets/style.css')
});*/

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/stylesheets/style.css'));
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'users', { title: 'Twitter.js - Posts by '+name, list: list } );
});

router.get('/users/:name/tweets/:id', function(req, res) {
	var name = req.params.name;
	var id = Number(req.params.id);
	var list = tweetBank.find({name: name, id: id});
	res.render('users', { title: 'Unique ID - Posts by ' + name, list: list});
});

//The colon : is a trick that Express provides to define particular portions of the URI string as variables. In other words, in users/:name, the :name portion can be anything. Such URL parameters are detected and stored as properties of the req.params object:

module.exports = router;
