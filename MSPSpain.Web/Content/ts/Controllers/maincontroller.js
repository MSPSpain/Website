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