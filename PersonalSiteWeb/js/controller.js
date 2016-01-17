var MyPersonalSite = angular.module('MyPersonalSite', ['ngRoute']);

MyPersonalSite.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/',{
        templateUrl : 'Partials/home.html',
        controller: 'MyPersonalSiteCtrl'
        })
        .when('/about',{
            templateUrl : 'Partials/about.html',
            controller: 'MyPersonalSiteCtrl'
        })
        .when('/home',{
            templateUrl : 'Partials/home.html',
            controller: 'MyPersonalSiteCtrl'
        })
        .when('/contact',{
            templateUrl : 'Partials/contact.html',
            controller: 'MyPersonalSiteCtrl'
        })
        .otherwise({
            templateUrl : 'Partials/home.html',
            controller: 'MyPersonalSiteCtrl'
        });

    //$locationProvider.html5Mode({enabled:true, requireBase: false});
}]);

MyPersonalSite.controller('MyPersonalSiteCtrl', function($scope){

    $scope.Name = "This is Sample Test";

    $(document).ready(function(){
        $(".button-collapse").sideNav();
        $(".slider").slider({full_width: true});
    });

});