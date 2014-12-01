/// <reference path="../imports.ts" />
var Msp;
(function (Msp) {
    'use strict';

    var ProjectsController = (function () {
        function ProjectsController($scope) {
            this.$scope = $scope;
        }
        ProjectsController.$inject = [
            '$scope'
        ];
        return ProjectsController;
    })();
    Msp.ProjectsController = ProjectsController;
})(Msp || (Msp = {}));
//# sourceMappingURL=ProjectsController.js.map
