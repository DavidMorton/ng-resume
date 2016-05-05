resumeApp.controller('resumeController', ['$scope', '$timeout', '$http', '$routeParams', '$route', 
    function($scope, $timeout, $http, $routeParams, $route) {

        $scope.scrollToElement = function (jqElement) {

            if (jqElement.length === 0) 
                return;

            var currentPosition = jqElement.offset().top;

            var h1Height = $('div.header').outerHeight();
            
            var scrollElement = null;

            if ($(window).width() >= 850) {
                var scrollElement = $('.wrapper');

                var currentScroll = scrollElement.scrollTop();

                var result = (currentScroll + currentPosition) - h1Height;
            } else {
                var scrollElement = $('body');

                var result = currentPosition - h1Height;
            }

            scrollElement.animate({
                scrollTop: result
            }, 500, 'easeOutQuart');
        };

        $scope.onCollapse = function (e) {
            e.stopPropagation();

            console.log('Collapsing ' + e.currentTarget.id);

            hash = window.location.hash;

            if ($('.sectionContent.collapse.in, .sectionContent.collapsing').length === 0) 
            {
                $scope.scrollToElement($('#profile'));
                $('#profile').collapse('show');
                window.location.hash = hash.substring(0, hash.lastIndexOf('/'));

            } else if ($('#exp').hasClass('in') && $('#exp').find('.collapsing').length === 0)
            {
                $scope.scrollToElement($('#exp-section'));
                window.location.hash = hash.substring(0, hash.lastIndexOf('/'));
            }
        };

        $scope.onShow = function(e) {
            e.stopPropagation();

            $('.section, .experience').off('hidden.bs.collapse');

            console.log('Showing ' + e.currentTarget.id);

            var closest = $(e.currentTarget).closest('.section, .experience');

            if (closest.hasClass('section'))
            {
                $(e.currentTarget).find('.collapse.in').collapse('hide');
                $('.sectionContent.collapse.in').not($(e.currentTarget)).collapse('hide');
            } else {
                $('.experienceDetails.collapse.in').not($(e.currentTarget)).collapse('hide');
            }

            $(e.currentTarget).on('shown.bs.collapse', function() {
                $(e.currentTarget).off('shown.bs.collapse');
                $scope.scrollToElement(closest);
            });

            $('.sectionContent, .experienceDetails').on('hidden.bs.collapse');

            window.location.hash = $(e.currentTarget).closest('.section, .experience').attr('hash');
        };

        $http.get('/json/resume.json')
        .then(function(res) {
            $scope.data = res.data;

            $scope.section = '#' + ($routeParams.section || 'profile');
            if ($routeParams.subsection)
                $scope.subsection = '#' + $routeParams.subsection;

            console.log($routeParams);

            $scope.scrollToElement($('.body-content'));

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
                        $scope.scrollToElement($($scope.subsection).closest('.experience, .section'));
                    });

                    subsection.collapse('show');

                } else if (section.length) { 

                    section.on('shown.bs.collapse', function () { 
                        $($scope.section).off('shown.bs.collapse');
                        $scope.scrollToElement($($scope.section).closest('.experience, .section'));
                    });

                    section.collapse('show');
                }

                $('.sectionContent, .experienceDetails').on('show.bs.collapse', $scope.onShow);
                $('.sectionContent, .experienceDetails').on('hidden.bs.collapse', $scope.onCollapse);

                $('.wrapper').fadeIn(500);
            });
        });
    }
]);














