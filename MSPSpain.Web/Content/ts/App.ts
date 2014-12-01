/// <reference path="imports.ts" />

module Msp {
    'use strict';

    var root = function (page) {
        return page;
    };

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
                templateUrl: root('Views/MainPage.html')
            })
            .when('/ListaMSP', {
                controller: 'mspListController',
                templateUrl: root('Views/MspListPage.html')
            })
            .when('/Proyectos', {
                controller: 'projectsController',
                templateUrl: root('Views/ProjectsPage.html')
            })
            .when('/Mapa', {
                controller: 'mapController',
                templateUrl: root('Views/MapPage.html')
            })
            .otherwise({
                redirectTo: '/'
            });
    }

}
