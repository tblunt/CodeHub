(function () {
    'use strict';

    //hämtar Application-modulen som redan är skapad i Application.js
    var application = angular.module('Application');

    ////binder på controllern på modulen
    application.controller('PortfolioController', ['$scope', '$timeout', function ($scope, $timeout) {
        
        //privata variabler
        var views = [];
        var keyframes = [0];
        var pauseAtBeginning = 500;

        //När man lämnar denna vy
        $scope.$on('$destroy', function () { $("body").css({"height": "auto"}); });

        //start
        $timeout(function () {
            $timeout(function () {
                initPortfolio();
            }, 0);
        }, 0);
       

        /*********** privata funktioner ***********/
        function initPortfolio() {
            getKeyframes();
            animateViews();
           
            initSkrollr();
        }

        //lagrar start-tid för varje vy som finns i portfolion
        function getKeyframes() {
            
            views = angular.element(".view");
            var viewHeight;

            _.each(views, function(view, index)  {
               
                if ($(view).height() < $(window).height()) {
                    viewHeight = $(window).height();
                }
                else {
                    viewHeight = $(view).height();
                } 

                //egna höjden + föregående vy start-tid + hur länge vyn ska ligga stilla i början
                var nextViewKeyFrame = viewHeight + keyframes[index] + pauseAtBeginning;
               
                keyframes.push(nextViewKeyFrame);

            });
           
            $("body").height(keyframes[(keyframes.length - 1)]);
        }

        function animateViews() {
           
            var windowHeight = $(window).height();

            _.each(views, function (view, index) {
                //värden som hämtas från html:en, finns det inga värden sätts transform:translateY
                var beforeEnterCssClass = ($(view).attr("before-enter")) ? $(view).attr("before-enter") : "transform:translateY(100%);";
                var afterEnterCssClass = ($(view).attr("after-enter")) ? $(view).attr("after-enter") : "transform:translateY(0%);";

                var beforeLeaveCssClass = ($(view).attr("before-leave")) ? $(view).attr("before-leave") : "transform:translateY(0%);";
                var afterLeaveCssClass = ($(view).attr("after-leave")) ? $(view).attr("after-leave") : "transform:translateY(-100%);";

                //vilken tid det ska ta att animera in och animera ut
                //har den inte specificerats i html:en sätts den til 300
                var enterDuration = ($(view).attr("enter-duration")) ? parseInt($(view).attr("enter-duration")) : 300;
                var leaveDuration = ($(view).attr("leave-duration")) ? parseInt($(view).attr("leave-duration")) : 300;

                //sätter på skrollr-klasser efter keyframesen
                //init values 
                $(view).attr("data-0", "top:0px;");

                //animate in
                $(view).attr("data-" + (keyframes[index] - enterDuration), beforeEnterCssClass + "top:0px;");
                $(view).attr("data-" + (keyframes[index]), afterEnterCssClass + "top:0px;");
                $(view).attr("data-" + (keyframes[index] + pauseAtBeginning), afterEnterCssClass + "top:0px;");

                //animate out
                //om vyn är större än fönsterhöjden så ska  man kunna skrolla i den
                if ($(view).height() > windowHeight) {
                    $(view).attr("data-" + (keyframes[(index + 1)] - leaveDuration), beforeLeaveCssClass + "top:" + (-($(view).height())) + "px;");
                }
                else {
                    $(view).attr("data-" + (keyframes[(index + 1)] - leaveDuration), beforeLeaveCssClass);
                }
              
                $(view).attr("data-" + (keyframes[(index + 1)]), afterLeaveCssClass);

                //animerar tillhörande meny-plupp, med samma tid-värden som själva vyn
                animateMenuItem(index, $(view).attr("id"), enterDuration, leaveDuration);
            });
           
        }

        function animateMenuItem(index,itemId, enterDuration, leaveDuration) {
           
            $("#menu-" + itemId).attr("data-" + (keyframes[index] - (enterDuration)), "padding-left:5px;");
            $("#menu-" + itemId).attr("data-" + (keyframes[index]), "padding-left:25px;");

            //animate out
            $("#menu-" + itemId).attr("data-" + (keyframes[(index + 1)] - (leaveDuration)), "padding-left:25px;");
            $("#menu-" + itemId).attr("data-" + (keyframes[(index + 1)]), "padding-left:5px;");
           
        }
          

        function initSkrollr() {
            //Kollar att skrollr inte redan är definierad
            if (!skrollr.get()) {
                skrollr.init({
                    forceHeight: false,
                    mobileDeceleration: 0.004,
                    mobileCheck: function () {
                        return false;
                    }
                });
            }
            else {
                skrollr.get().refresh();
            }
          
          
        }


        /*********** publika funktioner, $scope-funktioner ***********/
        $scope.goToView = function(nr) {
            
            $('html,body').animate({
                scrollTop: keyframes[nr]
            }, 1000);
        
        }
        

       
    }]);

})();