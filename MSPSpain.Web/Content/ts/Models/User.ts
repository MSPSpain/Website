/// <reference path="../imports.ts" />

module Msp {
    'use strict';

    export class User {

        public id: number;
        public isMsp: boolean;
        public name: string;
        public lastname: string;
        public years: number[];
        public city: string;
        public university: string;
        public email: string;
        public skills: string;
        public twitter: string;
        public linkedin: string;
        public website: string;
        public image: string;
        public thumbnail: string;
        public location: any;

        constructor() {
            
        }
    }
}  