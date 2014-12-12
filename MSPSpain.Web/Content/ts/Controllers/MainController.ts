/// <reference path="../imports.ts" />

module Msp {
    'use strict';

    export class MainController {

        private quotes: Array<Quote> = [];

        public static $inject = [
            '$scope',
            '$http'
        ];

        constructor(
            private $scope: IMainScope,
            private $http: ng.IHttpService
            ) {

            this.getQuotesList();
            $scope.quotes = this.quotes;
            $scope.randomQuote = "";
        }

        getQuotesList() {
            this.$http.get('/Content/FakeJSON/QuotesJSON.txt').success((quotesJSON: any) => {
                for (var i: number = 0; i < quotesJSON.length; i++) {
                    this.quotes[i] = <Quote>quotesJSON[i];
                }

                this.updateRandomQuote();
            });
        }

        getRandomQuote() {
            return this.quotes[Math.floor(Math.random() * this.quotes.length)].quote;
        }

        updateRandomQuote() {
            this.$scope.randomQuote = this.getRandomQuote();
        }
    }
} 