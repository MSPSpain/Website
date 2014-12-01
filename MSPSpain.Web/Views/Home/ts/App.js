/// <reference path="imports.ts" />
var Msp;
(function (Msp) {
    'use strict';

    Msp.config = {
        api: {}
    };

    angular.module('Msp', ['ngRoute']).controller('navigationController', Msp.NavigationController).controller('mainController', Msp.MainController).controller('mapController', Msp.MapController).controller('mspListController', Msp.MspListController).controller('projectsController', Msp.ProjectsController).config(['$routeProvider', routes]);

    function routes($routeProvider) {
        $routeProvider.when('/', {
            controller: 'mainController',
            templateUrl: 'Views/MainPage.html'
        }).when('/ListaMSP', {
            controller: 'mspListController',
            templateUrl: 'Views/MspListPage.html'
        }).when('/Proyectos', {
            controller: 'projectsController',
            templateUrl: 'Views/ProjectsPage.html'
        }).when('/Mapa', {
            controller: 'mapController',
            templateUrl: 'Views/MapPage.html'
        }).otherwise({
            redirectTo: '/'
        });
    }
})(Msp || (Msp = {}));
//# sourceMappingURL=App.js.map
