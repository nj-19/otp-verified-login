'use strict';


angular.module('poleTestApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');
    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: '/views/about.html',
            controller:'MainCtrl'
        })
        .state('main', {
            url: '/main',
            templateUrl: '/views/main.html',
            controller:'MainCtrl'
        });
    }]);