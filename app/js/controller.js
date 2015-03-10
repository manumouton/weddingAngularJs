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

weddingApp.controller("navigationButton" ,function ($scope, $location) {
    $scope.getPreviousPage = function(){
        var path = $location.path();
        if(path==='/home'){
            return '#/rsvp';
        }
        else if(path==='/day/ceremony'){
            return '#/home';
        }
        else if(path==='/day/reception'){
            return '#/day/ceremony';
        }
        else if(path==='/list'){
            return '#/day/reception';
        }
        else if(path==='/rsvp'){
            return '#/list';
        }
    };
    $scope.getNextPage = function(){
        var path = $location.path();
        if(path==='/home'){
            return '#/day/ceremony';
        }
        else if(path==='/day/ceremony'){
            return '#/day/reception';
        }
        else if(path==='/day/reception'){
            return '#/list';
        }
        else if(path==='/list'){
            return '#/rsvp';
        }
        else if(path==='/rsvp'){
            return '#/home';
        }
    };
});

weddingApp.controller("mainController" ,function ($scope) {

});

weddingApp.controller("ceremonyController" ,function ($scope) {
    buildScopeForMap($scope, 50.6292333, 5.1148211, 16, false, "Eglise d'Avennes",
        'https://www.google.com/maps/place/Rue+de+la+Justice+de+Paix+3,+4260+Braives,+Belgique/@50.6292333,5.1148211,17z/data=!3m1!4b1!4m2!3m1!1s0x47c10918870b926b:0xa240039843ce73a2');
});

weddingApp.controller("receptionController" ,function ($scope) {
    buildScopeForMap($scope, 50.618876, 5.111879, 16, false, 'Ferme des sources',
        'https://www.google.com/maps/place/Rue+des+Aiwisses+18,+4260+Braives,+Belgique/@50.618876,5.111879,14z/data=!4m2!3m1!1s0x47c109056dca6cc7:0x8df128cc9cc79055');
});

function buildScopeForMap($scope, latitude, longitude, zoom, scrollwheel, title, url){
    $scope.map = { center: { latitude: latitude, longitude: longitude}, zoom: zoom };
    $scope.options = {scrollwheel: scrollwheel};
    $scope.marker = {
        id: 0,
        coords: {
            latitude: latitude,
            longitude: longitude
        },
        options: { draggable: false, title: title }
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

    $scope.title = title;
    $scope.url = url;
}


weddingApp.controller("listController" ,function ($scope) {
    $scope.url = "http://www.kadolog.be/caroetmanusemarient";
});

weddingApp.controller("rsvpController" ,function ($scope) {

});