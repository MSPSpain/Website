/// <reference path="../imports.ts" />
var Msp;
(function (Msp) {
    'use strict';
    var Project = (function () {
        function Project() {
        }
        return Project;
    })();
    Msp.Project = Project;
})(Msp || (Msp = {}));
//# sourceMappingURL=project.js.map
/// <reference path="../imports.ts" />
var Msp;
(function (Msp) {
    'use strict';
    var Quote = (function () {
        function Quote() {
        }
        return Quote;
    })();
    Msp.Quote = Quote;
})(Msp || (Msp = {}));
//# sourceMappingURL=quote.js.map
/// <reference path="../imports.ts" />
var Msp;
(function (Msp) {
    'use strict';
    var User = (function () {
        function User() {
        }
        return User;
    })();
    Msp.User = User;
})(Msp || (Msp = {}));
//# sourceMappingURL=user.js.map
/// <reference path="../imports.ts" />
//# sourceMappingURL=imainscope.js.map
/// <reference path="../imports.ts" />
//# sourceMappingURL=imsplistscope.js.map
/// <reference path="../imports.ts" />
//# sourceMappingURL=inavigationscope.js.map
/// <reference path="../imports.ts" />
//# sourceMappingURL=iprojectsscope.js.map
/// <reference path="../imports.ts" />
var Msp;
(function (Msp) {
    'use strict';
    var MainController = (function () {
        function MainController($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            this.quotes = [];
            this.getQuotesList();
            $scope.quotes = this.quotes;
            $scope.randomQuote = "";
        }
        MainController.prototype.getQuotesList = function () {
            var _this = this;
            this.$http.get('/Content/FakeJSON/Quotes.txt').success(function (quotesJSON) {
                for (var i = 0; i < quotesJSON.length; i++) {
                    _this.quotes[i] = quotesJSON[i];
                }
                _this.updateRandomQuote();
            });
        };
        MainController.prototype.getRandomQuote = function () {
            return this.quotes[Math.floor(Math.random() * this.quotes.length)].quote;
        };
        MainController.prototype.updateRandomQuote = function () {
            this.$scope.randomQuote = this.getRandomQuote();
        };
        MainController.$inject = [
            '$scope',
            '$http'
        ];
        return MainController;
    })();
    Msp.MainController = MainController;
})(Msp || (Msp = {}));
//# sourceMappingURL=maincontroller.js.map
/// <reference path="../imports.ts" />
var Msp;
(function (Msp) {
    'use strict';
    var MapController = (function () {
        function MapController($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            this.map = this.createMap();
            var center = this.map.getCenter();
            this.dataLayer = new Microsoft.Maps.EntityCollection();
            this.map.entities.push(this.dataLayer);
            var infoboxLayer = new Microsoft.Maps.EntityCollection();
            this.map.entities.push(infoboxLayer);
            this.infobox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(0, 0), { visible: false, offset: new Microsoft.Maps.Point(0, 20) });
            infoboxLayer.push(this.infobox);
            // Add Microsoft Pushpin
            this.addPushpin({
                location: new Microsoft.Maps.Location(40.417484, -3.800195),
                title: 'Microsoft Ibérica',
                description: 'Sede de Microsoft en España',
                image: 'http://mervingpastor.files.wordpress.com/2012/11/cropped-355088-new-microsoft-logo.jpg'
            });
            // Add Msp Pushpins
            $http.get('/Content/FakeJSON/Msp.txt').success(this.addUsersPushpins.bind(this));
        }
        MapController.prototype.createMap = function () {
            return new Microsoft.Maps.Map(document.getElementById('mapDiv'), {
                credentials: "AmyNuSSNrpcguvzliPrZ_wxwzej9KiRjvqdGDxwEaD2C0MVATt1Kf1ivwu2bmDRW",
                center: new Microsoft.Maps.Location(40.417484, -3.800195),
                mapTypeId: Microsoft.Maps.MapTypeId.road,
                zoom: 7,
            });
        };
        MapController.prototype.addPushpin = function (options) {
            var pushpin = new Microsoft.Maps.Pushpin(options.location, { icon: options.image, width: 48, height: 48 });
            pushpin.Title = options.title;
            pushpin.Description = options.description;
            Microsoft.Maps.Events.addHandler(pushpin, 'click', this.displayInfobox.bind(this));
            this.dataLayer.push(pushpin);
        };
        MapController.prototype.displayInfobox = function (e) {
            if (e.targetType == 'pushpin') {
                this.infobox.setLocation(e.target.getLocation());
                this.infobox.setOptions({ visible: true, title: e.target.Title, description: e.target.Description });
            }
        };
        MapController.prototype.addUsersPushpins = function (usersJSON) {
            var users = usersJSON;
            for (var i = 0; i < users.length; i++) {
                this.addPushpin({
                    location: new Microsoft.Maps.Location(users[i].location.lon, users[i].location.lat),
                    title: users[i].name + ' ' + users[i].lastname,
                    description: 'MSP: ' + users[i].skills,
                    image: users[i].thumbnail
                });
            }
        };
        MapController.$inject = [
            '$scope',
            '$http'
        ];
        return MapController;
    })();
    Msp.MapController = MapController;
})(Msp || (Msp = {}));
//# sourceMappingURL=mapcontroller.js.map
/// <reference path="../imports.ts" />
var Msp;
(function (Msp) {
    'use strict';
    var MspListController = (function () {
        function MspListController($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            this.users = [];
            this.getMspList();
            $scope.users = this.users;
        }
        MspListController.prototype.getMspList = function () {
            var _this = this;
            this.$http.get('/Content/FakeJSON/Msp.txt').success(function (usersJSON) {
                for (var i = 0; i < usersJSON.length; i++) {
                    _this.users[i] = usersJSON[i];
                }
            });
        };
        MspListController.$inject = [
            '$scope',
            '$http'
        ];
        return MspListController;
    })();
    Msp.MspListController = MspListController;
})(Msp || (Msp = {}));
//# sourceMappingURL=msplistcontroller.js.map
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
            this.$http.get('/Content/FakeJSON/Projects.txt').success(function (projectsJSON) {
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
//# sourceMappingURL=projectscontroller.js.map
/// <reference path="imports.ts" />
var Msp;
(function (Msp) {
    'use strict';
    // App configuration object
    Msp.config = {
        api: {},
        viewsPath: '/Content/Views/'
    };
    // Angular App
    angular.module('Msp', ['ngRoute', 'githubRepo']).controller('navigationController', Msp.NavigationController).controller('mainController', Msp.MainController).controller('mapController', Msp.MapController).controller('mspListController', Msp.MspListController).controller('projectsController', Msp.ProjectsController).config(['$routeProvider', routes]).config(['$locationProvider', location]);
    // Router configuration
    function routes($routeProvider) {
        $routeProvider.when('/Inicio', {
            controller: 'mainController',
            templateUrl: Msp.config.viewsPath + 'MainPage.html'
        }).when('/ListaMSP', {
            controller: 'mspListController',
            templateUrl: Msp.config.viewsPath + 'MspListPage.html'
        }).when('/Proyectos', {
            controller: 'projectsController',
            templateUrl: Msp.config.viewsPath + 'ProjectsPage.html'
        }).when('/Mapa', {
            controller: 'mapController',
            templateUrl: Msp.config.viewsPath + 'MapPage.html'
        }).otherwise({
            redirectTo: '/Inicio'
        });
    }
    // Location configuration
    function location($locationProvider) {
        $locationProvider.html5Mode(true);
    }
})(Msp || (Msp = {}));
//# sourceMappingURL=App.js.map