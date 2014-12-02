/// <reference path="imports.ts" />
var Msp;
(function (Msp) {
    'use strict';

    var root = function (page) {
        return 'Content/' + page;
    };

    Msp.config = {
        api: {},
        viewsPath: '/Content/Views/'
    };

    angular.module('Msp', ['ngRoute']).controller('navigationController', Msp.NavigationController).controller('mainController', Msp.MainController).controller('mapController', Msp.MapController).controller('mspListController', Msp.MspListController).controller('projectsController', Msp.ProjectsController).config(['$routeProvider', routes]);

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
