/// <reference path="../imports.ts" />

module Msp {
    'use strict';

    export class NavigationController {

        public static $inject = [
            '$scope',
            '$location'
        ];

        constructor(
            private $scope: any,
            private $location: ng.ILocationService
            ) {

            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };

            $scope.classActive = function (viewLocation) {
                if ($scope.isActive(viewLocation)) {
                    return 'active';
                }
            }

        }
    }
} 