/// <reference path="../imports.ts" />
var Msp;
(function (Msp) {
    'use strict';

    var MapController = (function () {
        function MapController($scope) {
            this.$scope = $scope;
        }
        MapController.$inject = [
            '$scope'
        ];
        return MapController;
    })();
    Msp.MapController = MapController;
})(Msp || (Msp = {}));
//# sourceMappingURL=MapController.js.map
