/// <reference path="../imports.ts" />
var Msp;
(function (Msp) {
    'use strict';

    var ProjectsController = (function () {
        function ProjectsController($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            this.projects = [];
            this.getMspList();
            $scope.projects = this.projects;
        }
        ProjectsController.prototype.getMspList = function () {
            var _this = this;
            this.$http.get('/Content/FakeJSON/ProjectsJSON.json').success(function (projectsJSON) {
                for (var i = 0; i < projectsJSON.length; i++) {
                    _this.projects[i] = projectsJSON[i];
                }
            });
        };
        ProjectsController.$inject = [
            '$scope',
            '$http'
        ];
        return ProjectsController;
    })();
    Msp.ProjectsController = ProjectsController;
})(Msp || (Msp = {}));
//# sourceMappingURL=ProjectsController.js.map
