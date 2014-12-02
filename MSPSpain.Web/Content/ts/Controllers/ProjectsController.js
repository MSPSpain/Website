/// <reference path="../imports.ts" />
var Msp;
(function (Msp) {
    'use strict';

    var ProjectsController = (function () {
        function ProjectsController($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            $http.get('/Content/FakeJSON/ProjectsJSON.txt').success(function (projectsJSON) {
                $scope.projects = projectsJSON;
            });
        }
        ProjectsController.$inject = [
            '$scope',
            '$http'
        ];
        return ProjectsController;
    })();
    Msp.ProjectsController = ProjectsController;
})(Msp || (Msp = {}));
//# sourceMappingURL=ProjectsController.js.map
