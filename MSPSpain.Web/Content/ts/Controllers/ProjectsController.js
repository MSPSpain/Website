/// <reference path="../imports.ts" />
var Msp;
(function (Msp) {
    'use strict';

    var ProjectsController = (function () {
        function ProjectsController($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            $http.get('/Content/FakeJSON/ProjectsJSON.txt').success(function (projectsJSON) {
                for (var i = 0; i < projectsJSON.length; i++) {
                    $scope.projects[i] = projectsJSON;
                }
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
