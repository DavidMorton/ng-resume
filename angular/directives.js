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
        certifications: '='
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
        skills: '=',
        skillsList: '='
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