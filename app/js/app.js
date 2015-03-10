"use strict";

var weddingApp = angular.module('weddingApp', ['ngRoute', 'picardy.fontawesome', 'uiGmapgoogle-maps', 'ngAnimate', 'mgcrea.ngStrap']);

weddingApp.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
        })
        .when('/day/ceremony', {
            templateUrl: 'partials/ceremony.html',
            controller: 'ceremonyController'
        })
        .when('/day/reception', {
            templateUrl: 'partials/reception.html',
            controller: 'receptionController'
        })
        .when('/gifts', {
            templateUrl: 'partials/gifts.html',
            controller: 'giftsController'
        })
        .when('/rsvp', {
            templateUrl: 'partials/rsvp.html'
        })
        .when('/dropdown', {

        })
        .otherwise({
            redirectTo: '/home'
        });
});
