/// <reference path="../imports.ts" />

module Msp {
    export interface IMainScope extends ng.IScope {
        quotes: Array<Quote>;
        randomQuote: string;
    }
} 