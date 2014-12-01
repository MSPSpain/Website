/// <reference path="../imports.ts" />
var Msp;
(function (Msp) {
    'use strict';

    var NavigationController = (function () {
        function NavigationController($scope, $location) {
            this.$scope = $scope;
            this.$location = $location;
            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };

            $scope.classActive = function (viewLocation) {
                if ($scope.isActive(viewLocation)) {
                    return 'active';
                }
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
//# sourceMappingURL=NavigationController.js.map
