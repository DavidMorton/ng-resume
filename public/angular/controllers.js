resumeApp.controller('resumeController', ['$scope', '$timeout', '$http', '$routeParams', '$route', 
    function($scope, $timeout, $http, $routeParams, $route) {
    $http.get('/json/resume.json')
    .then(function(res) {
        $scope.data = res.data;

        console.log($routeParams);

        ScrollToElement($('.body-content'));

        $('#profile').collapse('show');

        var lastRoute = $route.current;
        $scope.$on('$locationChangeSuccess', function(event) {
            $route.current = lastRoute;
        });

        $timeout(function() { 
            $('.sectionContent, .experienceDetails').on('show.bs.collapse', OnShow);
            $('.sectionContent, .experienceDetails').on('hide.bs.collapse', OnCollapse);

            $('.wrapper').fadeIn(500);
        });
    });
}]);














