/// <reference path="imports.ts" />

module Msp {
    'use strict';

    export var config = {
        api: {
            //baseUrl: <string> 'https://photochat.luisguerrero.net/api/user/',
        }
    }

    angular.module('Msp', ['ngRoute'])
        .controller('navigationController', Msp.NavigationController)
        .controller('mainController', Msp.MainController)
        .controller('mapController', Msp.MapController)
        .controller('mspListController', Msp.MspListController)
        .controller('projectsController', Msp.ProjectsController)
        .config(['$routeProvider', routes]);


    function routes($routeProvider: ng.route.IRouteProvider) {
        $routeProvider
            .when('/', {
                controller: 'mainController',
                templateUrl: 'Views/MainPage.html'
            })
            .when('/ListaMSP', {
                controller: 'mspListController',
                templateUrl: 'Views/MspListPage.html'
            })
            .when('/Proyectos', {
                controller: 'projectsController',
                templateUrl: 'Views/ProjectsPage.html'
            })
            .when('/Mapa', {
                controller: 'mapController',
                templateUrl: 'Views/MapPage.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

}
