/// <reference path="../imports.ts" />

module Msp {
    'use strict';

    export class NavigationController {

        public static $inject = [
            '$scope',
            '$location'
        ];

        constructor(
            private $scope: INavigationScope,
            private $location: ng.ILocationService
            ) {

            $scope.classActive = function (viewLocation) {
                if (this.isActive(viewLocation)) {
                    return 'active';
                }
            }
            $scope.isActive = function(viewLocation) {
                return viewLocation === $location.path();
            }
        }

        
    }
} 