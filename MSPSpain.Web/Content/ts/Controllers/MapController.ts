/// <reference path="../imports.ts" />

module Msp {
    'use strict';

    export class MapController {

        private map: any;
        private dataLayer: any;
        private infobox: any;

        public static $inject = [
            '$scope',
            '$http'
        ];

        constructor(
            private $scope: ng.IScope,
            private $http: ng.IHttpService
            ) {

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

        private createMap() {
            return new Microsoft.Maps.Map(
                document.getElementById('mapDiv'),
                {
                    credentials: "AmyNuSSNrpcguvzliPrZ_wxwzej9KiRjvqdGDxwEaD2C0MVATt1Kf1ivwu2bmDRW",
                    center: new Microsoft.Maps.Location(40.417484, -3.800195),
                    mapTypeId: Microsoft.Maps.MapTypeId.road,
                    zoom: 7,

                });
        }

        public addPushpin(options) {
            var pushpin: any = new Microsoft.Maps.Pushpin(options.location, { icon: options.image, width: 48, height: 48 });
            pushpin.Title = options.title;
            pushpin.Description = options.description;
            Microsoft.Maps.Events.addHandler(pushpin, 'click', this.displayInfobox.bind(this));
            this.dataLayer.push(pushpin);
        }

        public displayInfobox(e) {
            if (e.targetType == 'pushpin') {
                this.infobox.setLocation(e.target.getLocation());
                this.infobox.setOptions({ visible: true, title: e.target.Title, description: e.target.Description });
            }
        }

        private addUsersPushpins(usersJSON) {
            var users: any = usersJSON;
            for (var i: number = 0; i < users.length; i++) {

                this.addPushpin({
                    location: new Microsoft.Maps.Location(users[i].location.lon, users[i].location.lat),
                    title: users[i].name + ' ' + users[i].lastname,
                    description: 'MSP: ' + users[i].skills,
                    image: users[i].thumbnail
                });
                
            }
        }
    }
} 