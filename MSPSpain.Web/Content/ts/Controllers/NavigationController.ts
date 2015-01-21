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
            $scope.classActive = v => this.classActive(v);
        }

        classActive(viewLocation: string) { 
            if (this.isActive(viewLocation)) {
                return 'active';
            }
        }

        isActive(viewLocation: string) { 
            return viewLocation === this.$location.path();
        }

        
    }
} 