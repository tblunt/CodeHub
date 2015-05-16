(function () {
    'use strict';

    //hämtar Application-modulen som redan är skapad i Application.js
    var application = angular.module('Application');

    //Binder direktivet till vår modul
    application.directive('header', ['$location', '$route', function ($location, $route) {

        function link($scope, $element, $attrs) {

            //vyn man befinner sig på ('/', '/Portfiolio' eller '/Kontakt')
            $scope.selectedView = $location.path();

            //triggas då användaren klickar i headern
            $scope.$on('$routeChangeStart', function() { 
                $scope.selectedView = $location.path();
            });

        }

        return {
            templateUrl: "Application/Directives/Header/Header.html",
            restrict: 'E',
            link: link
        };
    }])
})();