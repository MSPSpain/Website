/// <reference path="../imports.ts" />

module Msp {
    'use strict';

    export class ProjectsController {

        public static $inject = [
            '$scope',
            '$http'
        ];

        constructor(
            private $scope: IProjectsScope,
            private $http: ng.IHttpService
            ) {

            $http.get('/Content/FakeJSON/ProjectsJSON.txt').success((projectsJSON: any) => {
                for (var i: number = 0; i < projectsJSON.length; i++) {
                    $scope.projects[i] = <Project>projectsJSON;
                }
            });
        }
    }
} 