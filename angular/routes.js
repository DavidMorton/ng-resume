resumeApp.config(['$routeProvider',//'$urlMatcherFactoryProvider', 
function($routeProvider, /*$urlMatcherFactoryProvider*/) {
	// $urlMatcherFactoryProvider.strictMode(false)

	$routeProvider

	.when('/', {
		templateUrl: 'resume.html',
		controller: 'resumeController', 
		reloadOnSearch: false
	})

	.when('/:section', {
		templateUrl: 'resume.html', 
		controller: 'resumeController', 
		reloadOnSearch: false
	})

	.when('/:section/:subsection', {
		templateUrl: 'resume.html', 
		controller: 'resumeController', 
		reloadOnSearch: false
	});
}]);

resumeApp.run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
    var original = $location.path;
    $location.path = function (path, reload) {
        if (reload === false) {
            var lastRoute = $route.current;
            var un = $rootScope.$on('$locationChangeSuccess', function () {
                $route.current = lastRoute;
                un();
            });
        }
        return original.apply($location, [path]);
    };
}])