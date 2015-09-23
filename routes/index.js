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

module.exports = router;
