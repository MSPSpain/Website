/// <reference path="../imports.ts" />

module Msp {
    'use strict';

    export class MainController {

        public static $inject = [
            '$scope'
        ];

        constructor(
            private $scope: ng.IScope
            ) {
        }
    }
} 