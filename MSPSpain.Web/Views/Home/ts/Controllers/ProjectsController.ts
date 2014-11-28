/// <reference path="../imports.ts" />

module Msp {
    'use strict';

    export class ProjectsController {

        public static $inject = [
            '$scope'
        ];

        constructor(
            private $scope: ng.IScope
            ) {
        }
    }
} 