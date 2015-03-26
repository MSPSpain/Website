/// <reference path="../imports.ts" />

module Msp {
    export interface IMspListScope extends ng.IScope {
        users: Array<User>;
    }
} 