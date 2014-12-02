/// <reference path="../imports.ts" />

module Msp {
    'use strict';

    export class ProjectsController {

        public static $inject = [
            '$scope',
            '$http'
        ];

        constructor(
            private $scope: any,
            private $http: ng.IHttpService
            ) {

            $http.get('/Content/FakeJSON/ProjectsJSON.txt').success(function (projectsJSON) {
                $scope.projects = projectsJSON;
            });
        }
    }
} 