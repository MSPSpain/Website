/// <reference path="Microsoft.Maps.d.ts" />

/**
*	NOTE: Before you can access the types found in the Microsoft.Maps.Traffic API, you must first load this module using the loadModule method.
**/
declare module Microsoft.Maps.Traffic {
	/**
    *	This class is @deprecated. Use the TrafficManager Class.
    *	Represents a traffic layer on the map
    **/
    export class TrafficLayer {
    	/**
    	*	Initializes a new instance of the TrafficLayer class.
    	**/
        constructor (map: Map);

        /**
        *	Returns the traffic layer.
        **/
        getTileLayer(): TileLayer;

        /**
        *	Hides the traffic layer.
        **/
        hide(): void;
        
        /**
        *	Displays the traffic layer.
        **/
        show(): void;
    }

    /**
    *	Contains methods that display traffic information on the map.
    **/
    export class TrafficManager {
    	/**
		*	Initializes a new instance of the TrafficManager class.
    	**/
    	constructor(map: Map);

		/**
		*	Hides all traffic data.
		**/
    	hide(): void;
    	
    	/**
		*	Hides the traffic flow layer.
		**/
    	hideFlow(): void;
    	
		/**
		*	Hides all traffic incidents.
		**/
    	hideIncidents(): void;
    	
    	/**
		*	Hides the traffic legend.
		**/
    	hideLegend(): void;
    	
		/**
		*	Displays all traffic data.
		**/
    	show(): void;
    	
		/**
		*	Displays all traffic flow layer.
		**/
    	showFlow(): void;
    	
		/**
		*	Displays all traffic incidents.
		**/
    	showIncidents(): void;
    	
    	/**
		*	Displays the traffic legend.
		**/
		showLegend(): void;
    }
}