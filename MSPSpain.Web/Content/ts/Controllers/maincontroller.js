/// <reference path="../imports.ts" />
var Msp;
(function (Msp) {
    'use strict';

    var MainController = (function () {
        function MainController($scope) {
            this.$scope = $scope;
        }
        MainController.$inject = [
            '$scope'
        ];
        return MainController;
    })();
    Msp.MainController = MainController;
})(Msp || (Msp = {}));
//# sourceMappingURL=MainController.js.map
