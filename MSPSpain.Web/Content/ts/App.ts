/// <reference path="imports.ts" />

module Msp {
    'use strict';

    // App configuration object
    export var config = {
        api: {
            //baseUrl: <string> 'https://photochat.luisguerrero.net/api/user/',
        },

        viewsPath: '/Content/Views/'
    }

    // Angular App
    angular.module('Msp', ['ngRoute'])
        .controller('navigationController', Msp.NavigationController)
        .controller('mainController', Msp.MainController)
        .controller('mapController', Msp.MapController)
        .controller('mspListController', Msp.MspListController)
        .controller('projectsController', Msp.ProjectsController)
        .config(['$routeProvider', routes]);

    // Router configuration
    function routes($routeProvider: ng.route.IRouteProvider) {
        $routeProvider
            .when('/', {
                controller: 'mainController',
                templateUrl: config.viewsPath + 'MainPage.html'
            })
            .when('/ListaMSP', {
                controller: 'mspListController',
                templateUrl: config.viewsPath + 'MspListPage.html'
            })
            .when('/Proyectos', {
                controller: 'projectsController',
                templateUrl: config.viewsPath + 'ProjectsPage.html'
            })
            .when('/Mapa', {
                controller: 'mapController',
                templateUrl: config.viewsPath + 'MapPage.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

}
