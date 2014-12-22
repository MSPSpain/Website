/// <reference path="imports.ts" />
var Msp;
(function (Msp) {
    'use strict';

    // App configuration object
    Msp.config = {
        api: {},
        viewsPath: '/Content/Views/'
    };

    // Angular App
    angular.module('Msp', ['ngRoute', 'githubRepo']).controller('navigationController', Msp.NavigationController).controller('mainController', Msp.MainController).controller('mapController', Msp.MapController).controller('mspListController', Msp.MspListController).controller('projectsController', Msp.ProjectsController).config(['$routeProvider', routes]);

    // Router configuration
    function routes($routeProvider) {
        $routeProvider.when('/', {
            controller: 'mainController',
            templateUrl: Msp.config.viewsPath + 'MainPage.html'
        }).when('/ListaMSP', {
            controller: 'mspListController',
            templateUrl: Msp.config.viewsPath + 'MspListPage.html'
        }).when('/Proyectos', {
            controller: 'projectsController',
            templateUrl: Msp.config.viewsPath + 'ProjectsPage.html'
        }).when('/Mapa', {
            controller: 'mapController',
            templateUrl: Msp.config.viewsPath + 'MapPage.html'
        }).otherwise({
            redirectTo: '/'
        });
    }
})(Msp || (Msp = {}));
//# sourceMappingURL=App.js.map
