/// <reference path="../imports.ts" />

module Msp {
    'use strict';

    export class MspListController {

        public static $inject = [
            '$scope',
            '$http'
        ];

        constructor(
            private $scope: IMspListScope,
            private $http: ng.IHttpService
            ) {

            // Obtain list of MSP
            $http.get('/Content/FakeJSON/MspJSON.txt').success((usersJSON: any) => {
                for (var i: number = 0; i < usersJSON.length; i++) {
                    $scope.users[i] = <User>usersJSON;
                }
            });
        }
    }
} 