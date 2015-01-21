/// <reference path="../imports.ts" />
var Msp;
(function (Msp) {
    'use strict';
    var NavigationController = (function () {
        function NavigationController($scope, $location) {
            var _this = this;
            this.$scope = $scope;
            this.$location = $location;
            $scope.classActive = function (v) { return _this.classActive(v); };
        }
        NavigationController.prototype.classActive = function (viewLocation) {
            if (this.isActive(viewLocation)) {
                return 'active';
            }
        };
        NavigationController.prototype.isActive = function (viewLocation) {
            return viewLocation === this.$location.path();
        };
        NavigationController.$inject = [
            '$scope',
            '$location'
        ];
        return NavigationController;
    })();
    Msp.NavigationController = NavigationController;
})(Msp || (Msp = {}));
//# sourceMappingURL=navigationcontroller.js.map