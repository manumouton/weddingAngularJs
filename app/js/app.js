"use strict";

var weddingApp = angular.module('weddingApp', ['ngRoute', 'picardy.fontawesome', 'uiGmapgoogle-maps', 'ngAnimate', 'mgcrea.ngStrap']);

weddingApp.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'mainController'
        })
        .when('/day/ceremony', {
            templateUrl: 'partials/ceremony.html',
            controller: 'ceremonyController'
        })
        .when('/day/reception', {
            templateUrl: 'partials/reception.html',
            controller: 'receptionController'
        })
        .when('/list', {
            templateUrl: 'partials/list.html',
            controller: 'listController'
        })
        .when('/rsvp', {
            templateUrl: 'partials/rsvp.html',
            controller: 'rsvpController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});
