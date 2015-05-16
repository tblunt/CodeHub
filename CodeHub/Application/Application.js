(function () {
    'use strict';

    //deklarerar applikationsmodulen
    var application = angular.module('Application', ['ngRoute']);

    application.run(function(){
        console.log("Application run");
    });

    //Konfigurerar modulen för att använda ngRoute. 
    //ngRoute tar hand om vår navigering och binder våra vyer till url-en 
    application.config(function($routeProvider, $compileProvider, $locationProvider, $sceDelegateProvider) {

        //Binder vyer, med tillhörande controllers (om det behövs), till url:en
        $routeProvider
            .when('/', {
                templateUrl: '/Application/Views/Start/Start.html'
            })
            .when('/Portfolio', {
                templateUrl: '/Application/Views/Portfolio/Portfolio.html',
                controller: 'PortfolioController'
            })
            .when('/Kontakt', {
                templateUrl: '/Application/Views/Contact/Contact.html'
            });

        //om användaren skriver in något knasigt så återgår vi till start
        $routeProvider.otherwise({ redirectTo: '/' });
    });


})();