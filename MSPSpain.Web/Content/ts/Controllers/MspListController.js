/// <reference path="../imports.ts" />
var Msp;
(function (Msp) {
    'use strict';
    var MspListController = (function () {
        function MspListController($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            this.users = [];
            this.getMspList();
            $scope.users = this.users;
        }
        MspListController.prototype.getMspList = function () {
            var _this = this;
            this.$http.get('/api/msp').success(function (usersJSON) {
                for (var i = 0; i < usersJSON.length; i++) {
                    _this.users[i] = usersJSON[i];
                }
            });
        };
        MspListController.$inject = [
            '$scope',
            '$http'
        ];
        return MspListController;
    })();
    Msp.MspListController = MspListController;
})(Msp || (Msp = {}));
//# sourceMappingURL=msplistcontroller.js.map