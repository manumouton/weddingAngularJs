"use strict";

weddingApp.controller("navigation" ,function ($scope) {
    $scope.dropdownHtml = [
        {
            text: "Cérémonie",
            href: '#/day/ceremony',
            title: 'Cérémonie'
        },
        {
            text: "Réception",
            href: '#/day/reception',
            title: 'Réception'
        }
    ];
});

weddingApp.controller("ceremonyController" ,function ($scope) {
    $scope.pageClass = 'page-home';
    $scope.map = { center: { latitude: 50.6292333, longitude: 5.1148211 }, zoom: 16 };
    $scope.options = {scrollwheel: false};
    $scope.marker = {
        id: 0,
        coords: {
            latitude: 50.6292333,
            longitude: 5.1148211
        },
        options: { draggable: false, title: "Eglise d'Avennes" }
    };


    $scope.windowOptions = {
        visible: true
    };

    $scope.onClick = function() {
        $scope.windowOptions.visible = !$scope.windowOptions.visible;
    };

    $scope.closeClick = function() {
        $scope.windowOptions.visible = false;
    };

    $scope.title = "Eglise d'Avennes";

    $scope.url = 'https://www.google.com/maps/place/Rue+de+la+Justice+de+Paix+3,+4260+Braives,+Belgique/@50.6292333,5.1148211,17z/data=!3m1!4b1!4m2!3m1!1s0x47c10918870b926b:0xa240039843ce73a2';
});

weddingApp.controller("receptionController" ,function ($scope) {
    $scope.pageClass = 'page-home';
    $scope.map = { center: { latitude: 50.618876, longitude: 5.111879 }, zoom: 16 };
    $scope.options = {scrollwheel: false};
    $scope.marker = {
        id: 0,
        coords: {
            latitude: 50.618876,
            longitude: 5.111879
        },
        options: { draggable: false, title: 'Ferme des Sources' }
    };

    $scope.windowOptions = {
        visible: true
    };

    $scope.onClick = function() {
        $scope.windowOptions.visible = !$scope.windowOptions.visible;
    };

    $scope.closeClick = function() {
        $scope.windowOptions.visible = false;
    };

    $scope.title = 'Ferme des sources';

    $scope.url = 'https://www.google.com/maps/place/Rue+des+Aiwisses+18,+4260+Braives,+Belgique/@50.618876,5.111879,14z/data=!4m2!3m1!1s0x47c109056dca6cc7:0x8df128cc9cc79055';
});


weddingApp.controller("giftsController" ,function ($scope) {
    $scope.url = "http://www.kadolog.be/caroetmanusemarient";
    $scope.pageClass = "page-home";
});

weddingApp.controller("mainController" ,function ($scope) {
    $scope.pageClass = "page-home";
});

weddingApp.controller("rsvpController" ,function ($scope) {
    $scope.pageClass = "page-home";
});