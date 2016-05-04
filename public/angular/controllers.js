resumeApp.controller('resumeController', function($scope, $timeout, $http) {
    $http.get('/json/resume.json')
    .then(function(res) {
        $scope.data = res.data;

        ScrollToElement($('.body-content'));

        $('#profile').collapse('show');

        $timeout(function() { 
            $('.sectionContent, .experienceDetails').on('show.bs.collapse', OnShow);
            $('.sectionContent, .experienceDetails').on('hide.bs.collapse', OnCollapse);

            $('.wrapper').fadeIn(500);
        });
    });
});














