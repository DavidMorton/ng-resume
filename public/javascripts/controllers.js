var resumeApp = angular.module('resumeApp', []);

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

resumeApp.directive('experience', function() { return {
    templateUrl: '/directives/experience.html', 
    scope: { 
        contentId: '@', 
        contentTitle: '@', 
        experiences: '='
    },
    replace: true, 
}});

resumeApp.directive('additionalExperience', function() { return {
    templateUrl: '/directives/additionalexperience.html', 
    scope: { 
        contentId: '@', 
        contentTitle: '@', 
        experiences: '='
    },
    replace: true, 
}});


resumeApp.directive('awards', function() { return {
    templateUrl: '/directives/awards.html', 
    scope: { 
        contentId: '@', 
        contentTitle: '@', 
        allAwards: '='
    },
    replace: true, 
}});

resumeApp.directive('header', function() { return { 
    templateUrl: '/directives/header.html', 
    replace: true
}});

resumeApp.directive('techskills', function() { return { 
    templateUrl: '/directives/techskills.html', 
    scope: {
        contentId: '@', 
        contentTitle: '@', 
        skills: '='
    }, 
    replace: true
}});

resumeApp.directive('textContent', function() { return { 
    templateUrl: '/directives/content.html', 
    scope: {
        contentId: '@', 
        contentText: '@', 
        contentTitle: '@'
    }, 
    replace: true
}});












