var express = require('express');
var router = express.Router();

router.use('/javascripts', express.static(__dirname + '/public/javascripts'));
router.use('/angular', express.static(__dirname + '/public/angular'));
router.use('/json', express.static(__dirname + '/public/json'));
router.use('/stylesheets', express.static(__dirname + '/public/stylesheets'));

router.get('/directives/:directive.html', function(req, res, next) { 
 	console.log(req.params.directive);
 	res.render('directives/' + req.params.directive, {});
});

router.get('/resume.html', function(req, res, next) { 
 	console.log(req.params.document);
 	res.render('resume', {});
});

router.get('/', function(req, res, next) {
  	console.log(req.path);
  		res.render('index', { 
   		title: 'David Morton - Software Developer - Resume'}
	);
});

module.exports = router;
