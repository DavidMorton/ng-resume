resumeApp.controller('resumeController', ['$scope', '$timeout', '$http', '$routeParams', '$route', 
    function($scope, $timeout, $http, $routeParams, $route) {
    $http.get('/json/resume.json')
    .then(function(res) {
        $scope.data = res.data;

        $scope.section = '#' + ($routeParams.section || 'profile');
        if ($routeParams.subsection)
            $scope.subsection = '#' + $routeParams.subsection;

        console.log($routeParams);

        ScrollToElement($('.body-content'));

        //$('#profile').collapse('show');

        var lastRoute = $route.current;
        $scope.$on('$locationChangeSuccess', function(event) {
            $route.current = lastRoute;
        });

        $timeout(function() { 

            var section = $($scope.section).not('.in');
            var subsection = $($scope.subsection).not('.in');


            if (subsection.length) {

                section.collapse('show');

                subsection.on('shown.bs.collapse', function () { 
                    $($scope.subsection).off('shown.bs.collapse');
                    ScrollToElement($($scope.subsection).closest('.experience, .section'));
                });

                subsection.collapse('show');

            } else if (section.length) { 

                section.on('shown.bs.collapse', function () { 
                    $($scope.section).off('shown.bs.collapse');
                    ScrollToElement($($scope.section).closest('.experience, .section'));
                });

                section.collapse('show');
            }

            $('.sectionContent, .experienceDetails').on('show.bs.collapse', OnShow);
            $('.sectionContent, .experienceDetails').on('hidden.bs.collapse', OnCollapse);

            $('.wrapper').fadeIn(500);
        });
    });
}]);














