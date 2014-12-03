/// <reference path="../imports.ts" />

module Msp {
    'use strict';

    export class MspListController {

        public static $inject = [
            '$scope',
            '$http'
        ];

        constructor(
            private $scope: any,
            private $http: ng.IHttpService
            ) {

            // Obtain list of MSP
            $http.get('/Content/FakeJSON/MspJSON.txt').success(function (usersJSON) {
                $scope.users = usersJSON;
            });
        }
    }
} 