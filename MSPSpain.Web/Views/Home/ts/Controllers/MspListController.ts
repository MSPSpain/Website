/// <reference path="../imports.ts" />

module Msp {
    'use strict';

    export class MspListController {

        public static $inject = [
            '$scope'
        ];

        constructor(
            private $scope: ng.IScope
            ) {
        }
    }
} 