var express = require('express');
var router = express.Router();
var path = require('path');
var fa = 

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/html/home.html'));
});

module.exports = router;
