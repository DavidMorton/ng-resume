resumeApp.controller('resumeController', ['$scope', '$timeout', '$http', '$routeParams', function($scope, $timeout, $http, $routeParams) {
    $http.get('/json/resume.json')
    .then(function(res) {
        $scope.data = res.data;

        console.log($routeParams);

        ScrollToElement($('.body-content'));

        $('#profile').collapse('show');

        $timeout(function() { 
            $('.sectionContent, .experienceDetails').on('show.bs.collapse', OnShow);
            $('.sectionContent, .experienceDetails').on('hide.bs.collapse', OnCollapse);

            $('.wrapper').fadeIn(500);
        });
    });
}]);














