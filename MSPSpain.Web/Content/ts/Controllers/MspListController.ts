/// <reference path="../imports.ts" />

module Msp {
    'use strict';

    export class MspListController {

        private users: Array<User> = [];

        public static $inject = [
            '$scope',
            '$http'
        ];

        constructor(
            private $scope: IMspListScope,
            private $http: ng.IHttpService
            ) {

            this.getMspList();
            $scope.users = this.users;          
        }

        getMspList() {
            this.$http.get('/api/msp').success((usersJSON: any) => {
                for (var i: number = 0; i < usersJSON.length; i++) {
                    this.users[i] = <User>usersJSON[i];
                }
            });
        }
    }
} 