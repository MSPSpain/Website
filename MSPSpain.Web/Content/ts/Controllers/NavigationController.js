/// <reference path="../imports.ts" />
var Msp;
(function (Msp) {
    'use strict';
    var NavigationController = (function () {
        function NavigationController($scope, $location) {
            this.$scope = $scope;
            this.$location = $location;
            $scope.classActive = function (viewLocation) {
                if (this.isActive(viewLocation)) {
                    return 'active';
                }
            };
            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };
        }
        NavigationController.$inject = [
            '$scope',
            '$location'
        ];
        return NavigationController;
    })();
    Msp.NavigationController = NavigationController;
})(Msp || (Msp = {}));
//# sourceMappingURL=navigationcontroller.js.map