/// <reference path="../imports.ts" />
var Msp;
(function (Msp) {
    'use strict';

    var MspListController = (function () {
        function MspListController($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            $http.get('/Content/FakeJSON/MspJSON.txt').success(function (usersJSON) {
                $scope.users = usersJSON;
            });
        }
        MspListController.$inject = [
            '$scope',
            '$http'
        ];
        return MspListController;
    })();
    Msp.MspListController = MspListController;
})(Msp || (Msp = {}));
//# sourceMappingURL=MspListController.js.map
