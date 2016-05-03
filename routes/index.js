var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'David Morton - Software Developer - Resume'} );
});

router.get('/:directory/:file.html', function(req, res, next) { 
	res.render(__dirname + '/../views/' + req.params.directory + '/' + req.params.file);
});

module.exports = router;
