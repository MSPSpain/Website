/// <reference path="../imports.ts" />

module Msp {
    'use strict';

    export class ProjectsController {

        private projects: Array<Project> = [];

        public static $inject = [
            '$scope',
            '$http'
        ];

        constructor(
            private $scope: IProjectsScope,
            private $http: ng.IHttpService
            ) {

            this.getMspList();
            $scope.projects = this.projects;
        }

        getMspList() {
            this.$http.get('/Content/FakeJSON/Projects.txt').success((projectsJSON: any) => {
                for (var i: number = 0; i < projectsJSON.length; i++) {
                    this.projects[i] = <Project>projectsJSON[i];
                }
            });
        }
    }
} 