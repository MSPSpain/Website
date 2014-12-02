/// <reference path="Microsoft.Maps.d.ts" />

/**
*	NOTE: Before you can access the types found in the Microsoft.Maps.Directions API, you must first load this module using the loadModule method.
**/
declare module Microsoft.Maps.Directions {

	/**
	*	Contains business details for a waypoint.
	**/
	export class BusinessDetails {
		/**
		*	The business name of the waypoint.
		**/
		businessName: string;

		/**
		*	The Bing Maps entity ID of the business.
		**/
		entityId: string;

		/**
		*	The phone number of the business.
		**/
		phoneNumber: string;

		/**
		*	The URL of the business’ website.
		**/
		website: string;
	}

	/**
	*	Contains a possible business result returned from geocoding a specified waypoint address or location.
	**/
	export class BusinessDisambiguationSuggestion {
		/**
		*	The address of the business result.
		**/
		address: string;

		/**
		*	The distance of the business result from the originally specified waypoint address or location.
		**/
		distance: number;

		/**
		*	The Yellow Pages ID for the business.
		**/
		entityId: string;

		/**
		*	The index of this suggestion within the business suggestion array.
		**/
		index: number;

		/**
		*	A boolean indicating whether the result location is approximate.
		**/
		isApproximate: boolean;

		/**
		*	The location of the business suggestion.
		**/
		location: Location;

		/**
		*	The name of the business.
		**/
		name: string;

		/**
		*	The phone number of the business suggestion.
		**/
		phoneNumber: string;

		/**
		*	The URL of a photo of the business suggestion.
		**/
		photoUrl: string;

		/**
		*	The rooftop location of the business suggestion.
		**/
		rooftopLocation: Location;

		/**
		*	The URL of the business result’s website.
		**/
		website: string;
	}

	/**
	*	Contains arguments for directions error events.
	**/
	export interface DirectionsErrorEventArgs {

		/**
		*	The code which identifies the error that occurred.
		**/
		responseCode?: RouteResponseCode;

		/**
		*	The error message.
		**/
		message?: string;
	}

	/**
	*	Contains the arguments for directions events.
	**/
	export interface DirectionsEventArgs {

		/**
		*	The route summary (or summaries) of the route(s) defined in the route property.
		**/
		routeSummary?: RouteSummary[];

		/**
		*	The calculated route (or routes, if the route mode is transit).
		**/
		route?: Route[];
	}

	/**
	*	Contains methods for calculating directions and displaying a route on a map.
	**/
	export class DirectionsManager {

		/**
		*	Initializes a new instance of the DirectionsManager class.
		**/
		constructor(map: Map);

		/**
		*	Adds a waypoint to the route at the given index, if specified. If an index is not specified the waypoint is added as the last waypoint in the route.
		*	To recalculate the route, use calculateDirections.
		*	The maximum number of walking or driving waypoints is 25. The maximum number of transit waypoints is 2.
		*	Up to 10 via points are allowed between two stop waypoints.
		**/
		addWaypoint(waypoint: Waypoint, index: number): void;

		/**
		*	Calculates directions based on request and render options set (setRequestOptions, setRenderOptions) and the waypoints added (addWaypoint). The directionsUpdated event fires when the calculation is complete and the route is displayed on the map.
		*	You must call this method after making any changes to the route options or waypoints.
		**/
		calculateDirections(): void;

		/**
		*	Clears the directions displayed and removes the route line from the map. This method does not remove waypoints from the route and retains all calculated direction information and option settings. To clear the calculated directions and options, use resetDirections.
		**/
		clearDisplay(): void;

		/**
		*	Deletes the DirectionsManager object and releases any associated resources.
		**/
		dispose(): void;

		/**
		*	Returns the waypoints for the route.
		**/
		getAllWaypoints(): Waypoint[];

		/**
		*	Returns the map object associated with the directions manager.
		**/
		getMap(): Map;

		//TODO: KM - the documentation for this is extremely weak, need to find out what these callbacks return.
		/**
		*	Searches around the specified location for nearby major roads and returns them as an object to the callback function.
		**/
		getNearbyMajorRoads(location: Location, callback: (nearbyMajorRoads: any) => void, errorCallback: () => void, userData: Object): void;

		/**
		*	Returns the route render options.
		**/
		getRenderOptions(): DirectionsRenderOptions;

		/**
		*	Returns the directions request options.
		**/
		getRequestOptions(): DirectionsRequestOptions;

		/**
		*	Returns the current calculated route(s). If the route was not successfully calculated, null is returned.
		**/
		getRouteResult(): Route[];

		/**
		*	Removes the given waypoint or the waypoint identified by the given index from the route. Use calculateDirections to update the route once a waypoint has been removed.
		**/
		removeWaypoint(waypoint: Waypoint): void;

		/**
		*	Removes the given waypoint or the waypoint identified by the given index from the route. Use calculateDirections to update the route once a waypoint has been removed.
		**/
		removeWaypoint(index: number): void;

		/**
		*	If no options object is supplied, clears the directions request and render options and removes all waypoints.
		**/
		resetDirections(options: ResetDirectionsOptions): void;

		//TODO: KM - the documentation for this is extremely weak, need to find out what these callbacks return.	
		/**
		*	Matches the specified location to an address and returns the address to the specified callback function.
		**/
		reverseGeocode(location: Location, callback: (address : any) => void, errorCallback: () => void, userData: Object): void;

		/**
		*	Sets the map view based on the current route index.
		**/
		setMapView(): void;

		/**
		*	Sets the specified render options for the route.
		**/
		setRenderOptions(options: DirectionsRenderOptions): void;

		/**
		*	Sets the specified route calculation options.
		**/
		setRequestOptions(options: DirectionsRequestOptions): void;

		/**
		*	Occurs after the route selector has fully rendered.
		**/
		afterRouteSelectorRender: (eventArgs: RouteSelectorRenderEventArgs) => any;

		/**
		*	Occurs after each step in the itinerary has fully rendered.
		**/
		afterStepRender: (eventArgs: DirectionsStepRenderEventArgs) => any;

		/**
		*	Occurs after the route summary has fully rendered.
		**/
		afterSummaryRender: (eventArgs: RouteSummaryRenderEventArgs) => any;

		/**
		*	Occurs after each route waypoint has fully rendered.
		**/
		afterWaypointRender: (eventArgs: WaypointRenderEventArgs) => any;

		/**
		*	Occurs before the waypoint disambiguation element is rendered. Use the autoDisplayDisambiguation directions render option to automatically display waypoint disambiguation.
		**/
		beforeDisambiguationRender: (eventArgs: DisambiguationRenderEventArgs) => any;

		/**
		*	Occurs just before the route selector renders.
		**/
		beforeRouteSelectorRender: (eventArgs: RouteSelectorRenderEventArgs) => any;

		/**
		*	Occurs just before each step in the itinerary renders.
		**/
		beforeStepRender: (eventArgs: DirectionsStepRenderEventArgs) => any;

		/**
		*	Occurs just before the route summary renders.
		**/
		beforeSummaryRender: (eventArgs: RouteSummaryRenderEventArgs) => any;

		/**
		*	Occurs just before each route waypoint renders.
		**/
		beforeWaypointRender: (eventArgs: WaypointRenderEventArgs) => any;

		/**
		*	Occurs when calculating the directions caused an error.
		**/
		directionsError: (eventArgs: DirectionsErrorEventArgs) => any;

		/**
		*	Occurs when the directions calculation was successful and the itinerary and route on the map have been updated.
		**/
		directionsUpdated: (eventArgs: DirectionsEventArgs) => any;

		/**
		*	Occurs when the drag of a waypoint or route is completed.
		**/
		dragDropCompleted: () => void;

		/**
		*	Occurs when a step in the itinerary is clicked.
		**/
		itineraryStepClicked: (eventArgs: DirectionsStepEventArgs) => any;

		/**
		*	Occurs when the mouse cursor is over the route selector.
		**/
		mouseEnterRouteSelector: (eventArgs: RouteSelectorEventArgs) => any;

		/**
		*	Occurs when the mouse cursor is over a directions step.
		**/
		mouseEnterStep: (eventArgs: DirectionsStepEventArgs) => any;

		/**
		*	Occurs when the mouse cursor leaves the route selector.
		**/
		mouseLeaveRouteSelector: (eventArgs: RouteSelectorEventArgs) => any;

		/**
		*	Occurs when the mouse cursor leaves a directions step.
		**/
		mouseLeaveStep: (eventArgs: DirectionsStepEventArgs) => any;

		/**
		*	Occurs when the route selector is clicked.
		**/
		routeSelectorClicked: (eventArgs: RouteSelectorEventArgs) => any;

		/**
		*	Occurs when a new waypoint is added to the route.
		**/
		waypointAdded: (eventArgs: WaypointEventArgs) => any;

		/**
		*	Occurs when a waypoint is removed from the route.
		**/
		waypointRemoved: (eventArgs: WaypointEventArgs) => any;
	}

	/**
	*	Represents render options for a route.
	**/
	export interface DirectionsRenderOptions {

		/**
		*	A boolean indicating whether to automatically display a disambiguation dialog for waypoints. The default value is true.
		*	If this value is set to true, a directionsError event caused by waypoint disambiguation is not thrown.
		**/
		autoDisplayDisambiguation?: boolean;

		/**
		*	A boolean indicating whether to automatically set the map view to the best map view of the calculated route. The default value is true.
		**/
		autoUpdateMapView?: boolean;

		/**
		*	The options that define the pushpin to use for disambiguation.
		**/
		disambiguationPushpinOptions?: Microsoft.Maps.PushpinOptions;

		/**
		*	A boolean indicating whether to display the disclaimer about the accuracy of the directions. The default value is false.
		**/
		displayDisclaimer?: boolean;

		/**
		*	A boolean indicating whether to display the icons for each direction maneuver. The default value is true.
		**/
		displayManeuverIcons?: boolean;

		/**
		*	A boolean indicating whether to display the icons for each direction maneuver. The default value is true.
		**/
		displayPostItineraryItemHints?: boolean;

		/**
		*	A boolean indicating whether to display direction hints that describe what to look for before you come to the next direction step. The default value is true.
		**/
		displayPreItineraryItemHints?: boolean;

		/**
		*	A boolean indicating whether to display the route selector control. The default value is true.
		**/
		displayRouteSelector?: boolean;

		/**
		*	A boolean indicating whether to display direction warnings. The default value is true.
		**/
		displayStepWarnings?: boolean;

		/**
		*	A boolean indicating whether to display the control that allows the user to choose to avoid traffic. The default value is true.
		**/
		displayTrafficAvoidanceOption?: boolean;

		/**
		*	A boolean indicating whether to display a warning about walking directions. The default value is true.
		**/
		displayWalkingWarning?: boolean;

		/**
		*	The options that define how to draw the route line on the map, if the @see RouteMode is driving.
		**/
		drivingPolylineOptions?: PolylineOptions;

		/**
		*	The DOM element inside which the directions itinerary will be rendered.
		**/
		itineraryContainer?: HTMLElement;

		/**
		*	The URL of the icon to use for the end waypoint.
		**/
		lastWaypointIcon?: string;

		/**
		*	The URL of the icon to use for intermediate waypoints.
		**/
		middleWaypointIcon?: string;

		/**
		*	The options that define the pushpin to use for each direction step.
		**/
		stepPushpinOptions?: PushpinOptions;

		/**
		*	The options that define how to draw the route line on the map, if the @see RouteMode is transit.
		**/
		transitPolylineOptions?: PolylineOptions;

		/**
		*	The options that define the pushpin to use for each via point of the route, which are any waypoints other than the start and end waypoints.
		**/
		viapointPushpinsOptions?: PushpinOptions;

		/**
		*	The options that define how to draw the route line on the map, if the @see RouteMode is walking.
		**/
		walkingPolylineOptions?: PolylineOptions;

		/**
		*	The options that define the pushpin to use for the route waypoint.
		**/
		waypointPushpinOptions?: PushpinOptions;
	}

	/**
	*	Contains options for the directions to calculate.
	**/
	export interface DirectionsRequestOptions {

		/**
		*	A boolean indicating whether to return traffic info when calculating the route. The default value is false.
		**/
		avoidTraffic?: boolean;

		/**
		*	The unit to use when displaying direction distances. The default value is based on the specified culture.
		**/
		distanceUnit?: DistanceUnit;

		/**
		*	The number of routes to calculate. If the routeMode is driving or walking, only 1 route is supported. If the routeMode is transit, up to 6 routes can be calculated and the default is 3.
		**/
		maxRoutes?: number;

		/**
		*	The features to avoid when calculating the route. The default value is none.
		**/
		routeAvoidance?: RouteAvoidance;

		/**
		*	A boolean indicating whether the route line on the map can be dragged with the mouse cursor. The default value is true.
		*	When a route is dragged, a via point is added to the route.
		*	To change the drag behavior of a waypoint, set the draggable property of the waypointPushpinOptions (of the DirectionsRenderOptions).
		**/
		routeDraggable?: boolean;

		/**
		*	If multiple routes are returned, the index of the route and directions to display. This property only applies to routes where the routeMode is transit, and in this case up to 6 routes are supported.
		**/
		routeIndex?: number;

		/**
		*	The type of directions to calculate. The default value is driving. When the culture is ja-jp, only the transit route mode is supported, which is the default for that market.
		**/
		routeMode?: RouteMode;

		/**
		*	The optimization setting for the route calculation. The default value is shortestTime.
		**/
		routeOptimization?: RouteOptimization;

		/**
		*	The extra options for calculating a route if the routeMode is transit.
		**/
		transitOptions?: TransitOptions;
	}

	/**
	*	Represents one direction in a set of route directions.
	**/
	export class DirectionsStep {
		
		/**
		*	The child direction items for this directions step.
		**/
		childItineraryItems: DirectionsStep[];

		/**
		*	The location of the start of the direction.
		**/
		coordinate: Location;

		/**
		*	The total distance of the step in the unit specified in the distanceUnit property of the @see DirectionsRequestOptions.
		**/
		distance: string;

		/**
		*	The total time, in seconds, of the direction step.
		**/
		durationInSeconds: number;

		/**
		*	The HTML formatted route instruction associated with the step.
		**/
		formattedText: string;

		/**
		*	The type of the icon associated with this step.
		**/
		iconType: IconType;

		/**
		*	A boolean indicating whether the maneuver image is a road shield image.
		**/
		isImageRoadShield: boolean;

		/**
		*	The maneuver type associated with this step.
		**/
		maneuver: Maneuver;

		/**
		*	The name of the maneuver image.
		**/
		maneuverImageName: string;

		/**
		*	The cost of the step.
		**/
		monetaryCost: number;

		/**
		*	An array of strings, where each string is a hint to help determine when to move to the next direction step. Not all direction steps have hints.
		**/
		postIntersectionHints: string[];

		/**
		*	An array of strings, where each string is a hint to help determine when you have arrived at this direction step. Not all direction steps have hints.
		**/
		preIntersectionHints: string[];

		/**
		*	The name of the transit stop where this step originates.
		**/
		startStopName: string;

		/**
		*	The transit line associated with this step.
		**/
		transitLine: TransitLine;

		/**
		*	The URL of the image to use for transit direction steps.
		**/
		transitStepIcon: string;

		/**
		*	The ID of the transit stop.
		**/
		transitStopId: string;

		/**
		*	The name of the transit line end.
		**/
		transitTerminus: string;

		/**
		*	An array of strings, where each string is a route warning associated with this step.
		**/
		warnings: DirectionsStepWarning[];
	}

	/**
	*	Contains arguments for directions step events.
	**/
	export interface DirectionsStepEventArgs {

		/**
		*	A boolean indicating whether the event is handled. Set this property to true to override the default behavior.
		**/
		handled?: boolean;

		/**
		*	The location along the route where the direction step occurs.
		**/
		location?: Location;

		/**
		*	A number indicating the route (if multiple routes were returned) to which the directions step belongs.
		**/
		routeIndex?: number;

		/**
		*	A number indicating the route leg to which the directions step belongs.
		**/
		routeLegIndex?: number;

		/**
		*	The directions step.
		**/
		step?: DirectionsStep;

		/**
		*	A number indicating the index of the directions step within the route leg array.
		**/
		stepIndex?: number;

		/**
		*	A number indicating the directions step number within the route.
		**/
		stepNumber?: number;
	}

	/**
	*	Contains arguments for directions step render events.
	**/
	export interface DirectionsStepRenderEventArgs {

		/**
		*	The DOM element which contains the directions step. You can use this property to add custom content.
		**/
		containerElement?: Object;

		/**
		*	A boolean indicating whether the event is handled. This property is only available for the beforeStepRender event. Set this property to true to override the default behavior.
		**/
		handled?: boolean;

		/**
		*	A boolean indicating whether the step is the last directions step.
		**/
		lastStep?: boolean;

		/**
		*	A number indicating the index of the route to which this step belongs.
		**/
		routeIndex?: number;

		/**
		*	A number indicating the index of the route leg to which this step belongs.
		**/
		routeLegIndex?: number;

		/**
		*	The directions step.
		**/
		step?: DirectionsStep;

		/**
		*	The index of this directions step within the route leg step array.
		**/
		stepIndex?: number;
	}

	/**
	*	Represents a route direction warning, such as a traffic congestion warning.
	**/
	export class DirectionsStepWarning {

		/**
		*	The type of the route warning.
		**/
		style: StepWarningStyle;

		/**
		*	The warning text.
		**/
		text: string;
	}

	/**
	*	Contains disambiguation results for a waypoint geocoding request.
	**/
	export class Disambiguation {

		/**
		*	The possible business result matches for the originally specified waypoint address or location.
		**/
		businessSuggestions: BusinessDisambiguationSuggestion[];

		/**
		*	A boolean indicating whether there are more result suggestions available.
		**/
		hasMoreSuggestions: boolean;

		/**
		*	The disambiguation header text.
		**/
		headerText: string;

		/**
		*	The possible location result matches for the originally specified waypoint address or location.
		**/
		locationSuggestions: LocationDisambiguationSuggestion[];
	}

	/**
	*	Contains arguments for a beforeDisambiguationRender event.
	**/
	export interface DisambiguationRenderEventArgs {

		/**
		*	The DOM element which contains the disambiguation list. You can use this property to add custom content.
		**/
		containerElement?: Object;

		/**
		*	A boolean indicating whether the event is handled. Set this property to true to override the default behavior. If this property is set to true, a directionsError event for waypoint disambiguation is thrown.
		**/
		handled?: boolean;

		/**
		*	The waypoint that needs to be disambiguated.
		**/
		waypoint?: Waypoint;
	}

	/**
	*	Defines the distance unit to use when generating routes and corresponding itineraries.
	**/
	export enum DistanceUnit {

		/**
		*	Kilometers are used to measure route distances.
		**/
		kilometers = 0,

		/**
		*	Miles are used to measure route distances.
		**/
		miles = 1
	}

	/**
	*	Contains route icon types.
	**/
	export enum IconType {

		/**
		*	There is no route icon.
		**/
		none = 0,

		/**
		*	The icon is some other type of icon.
		**/
		other = 1,

		/**
		*	The icon is a car icon.
		**/
		auto = 2,

		/**
		*	The icon is a ferry icon.
		**/
		ferry = 3,

		/**
		*	The icon is a walking icon.
		**/
		walk = 4,

		/**
		*	The icon is a bus, or transit, icon
		**/
		bus = 5,

		/**
		*	The icon is a train icon.
		**/
		train = 6,

		/**
		*	The icon is an airline icon.
		**/
		airline = 7
	}

	/**
	*	Contains a possible result returned from geocoding a specified waypoint address or location.
	**/
	export class LocationDisambiguationSuggestion {

		/**
		*	The HTML formatted address suggestion.
		**/
		formattedSuggestion: string;

		/**
		*	The location of the suggestion.
		**/
		location: Location;

		/**
		*	The rooftop location of the suggestion.
		**/
		rooftopLocation: Location;

		/**
		*	The address suggestion.
		**/
		suggestion: string;
	}


	/**
	*	Contains route maneuver types.
	**/
	export enum Maneuver {
		/**
		*	The step is not a maneuver.
		**/
		none = 0,

		/**
		*	The maneuver is unknown.
		**/
		unknown = 1,

		/**
		*	Depart from the start waypoint.
		**/
		departStart = 2,

		/**
		*	Depart from an intermediate stop point going in a different direction and on a different road than which you arrived.
		**/
		departIntermediateStop = 3,

		/**
		*	Depart from an intermediate stop point going back in the same direction and on the same road on which you arrived.
		**/
		departIntermediateStopReturning = 4,

		/**
		*	Arrive at the end waypoint.
		**/
		arriveFinish = 5,

		/**
		*	Arrive at an intermediate stop point.
		**/
		arriveIntermediateStop = 6,

		/**
		*	Turn left.
		**/
		turnLeft = 7,

		/**
		*	Turn right.
		**/
		turnRight = 8,

		/**
		*	Turn back sharply.
		**/
		turnBack = 9,

		/**
		*	Make a u-turn to go in the opposite direction.
		**/
		uTurn = 10,

		/**
		*	Turn left to stay on the same road.
		**/
		turnToStayLeft = 11,

		/**
		*	Turn right to stay on the same road.
		**/
		turnToStayRight = 12,

		/**
		*	Bear left.
		**/
		bearLeft = 13,

		/**
		*	Bear right.
		**/
		bearRight = 14,

		/**
		*	Keep left to stay on the same road.
		**/
		keepToStayLeft = 15,

		/**
		*	Keep right to stay on the same road.
		**/
		keepToStayRight = 16,

		/**
		*	Keep straight to stay on the same road.
		**/
		keepToStayStraight = 17,

		/**
		*	Keep left onto a different road.
		**/
		keepLeft = 18,

		/**
		*	Keep right onto a different road.
		**/
		keepRight = 19,

		/**
		*	Keep straight onto a different road.
		**/
		keepStraight = 20,

		/**
		*	Take the road. This instruction is used when you are entering or exiting a ferry.
		**/
		take = 21,

		/**
		*	Take the ramp to the left.
		**/
		takeRampLeft = 22,

		/**
		*	Take the ramp to the right.
		**/
		takeRampRight = 23,

		/**
		*	Stay straight to take the ramp.
		**/
		takeRampStraight = 24,

		/**
		*	Keep left and continue onto ramp.
		**/
		keepOnRampLeft = 25,

		/**
		*	Keep right and continue onto ramp.
		**/
		keepOnRampRight = 26,

		/**
		*	Keep straight and continue onto ramp.
		**/
		keepOnRampStraight = 27,

		/**
		*	Merge onto highway.
		**/
		merge = 28,

		/**
		*	Continue on the current road.
		**/
		continueRoute = 29,

		/**
		*	The road name changed.
		**/
		roadNameChange = 30,

		/**
		*	Enter a roundabout.
		**/
		enterRoundabout = 31,

		/**
		*	Exit a roundabout.
		**/
		exitRoundabout = 32,

		/**
		*	Turn right and then turn right.
		**/
		turnRightThenTurnRight = 33,

		/**
		*	Turn right and then turn left.
		**/
		turnRightThenTurnLeft = 34,

		/**
		*	Turn right and then bear right.
		**/
		turnRightThenBearRight = 35,

		/**
		*	Turn right and then bear left.
		**/
		turnRightThenBearLeft = 36,

		/**
		*	Turn left and then turn left.
		**/
		turnLeftThenTurnLeft = 37,

		/**
		*	Turn left and then turn right.
		**/
		turnLeftThenTurnRight = 38,

		/**
		*	Turn left and then bear left.
		**/
		turnLeftThenBearLeft = 39,

		/**
		*	Turn left and then bear right.
		**/
		turnLeftThenBearRight = 40,

		/**
		*	Bear right and then turn right.
		**/
		bearRightThenTurnRight = 41,

		/**
		*	Bear right and then turn left.
		**/
		bearRightThenTurnLeft = 42,

		/**
		*	Bear right and then bear right.
		**/
		bearRightThenBearRight = 43,

		/**
		*	Bear right and then bear left.
		**/
		bearRightThenBearLeft = 44,

		/**
		*	Bear left and then turn left.
		**/
		bearLeftThenTurnLeft = 45,

		/**
		*	Bear left and then turn right.
		**/
		bearLeftThenTurnRight = 46,

		/**
		*	Bear left and then bear right.
		**/
		bearLeftThenBearRight = 47,

		/**
		*	Bear left and then bear left.
		**/
		bearLeftThenBearLeft = 48,

		/**
		*	Take left ramp onto highway. This is part of a combined instruction.
		**/
		rampThenHighwayRight = 49,

		/**
		*	Take right ramp onto highway. This is part of a combined instruction.
		**/
		rampThenHighwayLeft = 50,

		/**
		*	Stay straight to take the ramp onto the highway. This is part of a combined instruction.
		**/
		rampToHighwayStraight = 51,

		/**
		*	Enter and exit a roundabout.
		**/
		enterThenExitRoundabout = 52,

		/**
		*	Bear instruction and then a merge instruction.
		**/
		bearThenMerge = 53,

		/**
		*	Turn instruction and then a merge instruction.
		**/
		turnThenMerge = 54,

		/**
		*	Bear instruction and then a keep instruction.
		**/
		bearThenKeep = 55,

		/**
		*	Transfer between public transit lines at a transit stop.
		**/
		transfer = 56,

		/**
		*	Wait at a transit stop.
		**/
		wait = 57,

		/**
		*	Take transit.
		**/
		takeTransit = 58,

		/**
		*	The maneuver is a walking instruction.
		**/
		walk = 59,

		/**
		*	Get on a public transit line at a transit stop.
		**/
		transitDepart = 60,

		/**
		*	Get off a public transit line at a transit stop.
		**/
		transitArrive = 61
	}

	/**
	*	Contains options for the resetDirections method of the @see DirectionsManager Class.
	**/
	export interface ResetDirectionsOptions {

		/**
		*	A boolean indicating whether to remove all of the waypoints of the route. The default value is false.
		**/
		removeAllWaypoints?: boolean;

		/**
		*	A boolean indicating whether to reset all of the render options set for the route. The default value is false.
		**/
		resetRenderOptions?: boolean;

		/**
		*	A boolean indicating whether to reset all of the request options set for the route. The default value is false.
		**/
		resetRequestOptions?: boolean;
	}

	/**
	*	Represents a route.
	**/
	export class Route {

		/**
		*	The legs of the route. Each route leg represents the route between two waypoints.
		**/
		routeLegs: RouteLeg[];
	}

	/**
	*	Defines features to avoid when calculating the route.
	**/
	export enum RouteAvoidance {

		/**
		*	Calculate the best route using any travel option available.
		**/
		none = 0,

		/**
		*	Reduce the use of limited access highways when calculating the route.
		**/
		minimizeLimitedAccessHighway = 1,

		/**
		*	Reduce the use of roads with tolls when calculating the route.
		**/
		minimizeToll = 2,

		/**
		*	Avoid using limited access highways when calculating the route.
		**/
		avoidLimitedAccessHighway = 4,

		/**
		*	Avoid using roads with tolls when calculating the route.
		**/
		avoidToll = 8,

		/**
		*	Avoid using express trains when calculating the route. This option only affects routes with a transit @see RouteMode that have the culture set to ja-jp.
		**/
		avoidExpressTrain = 16,

		/**
		*	Avoid using airlines when calculating the route. This option only affects routes with a transit @see RouteMode that have the culture set to ja-jp.
		**/
		avoidAirline = 32,

		/**
		*	Avoid using bullet trains when calculating the route. This option only affects routes with a transit @see RouteMode that have the culture set to ja-jp.
		**/
		avoidBulletTrain = 64
	}

	/**
	*	Represents a leg of a route. A route leg is the part of the route between two stop waypoints.
	**/
	export class RouteLeg {

		/**
		*	The end time of the route leg. This property only applies when the routeMode of the @see DirectionsRequestOptions is set to transit.
		**/
		endTime: Date;

		/**
		*	The location of the last waypoint of this leg.
		**/
		endWaypointLocation: Location;

		/**
		*	The directions steps associated with this route leg.
		**/
		itineraryItems: DirectionsStep[];

		/**
		*	The index of the route to which this route leg belongs.
		**/
		originalRouteIndex: number;

		/**
		*	The start time of the route leg. This property only applies when the routeMode of the @see DirectionsRequestOptions is set to transit.
		**/
		startTime: Date;

		/**
		*	The location of the first waypoint of this route leg.
		**/
		startWaypointLocation: Location;

		/**
		*	The sub legs of this route leg. A sub leg of a route is the part of the route between a stop point and a via point or between two via points.
		**/
		subLegs: RouteSubLeg[];

		/**
		*	The summary which describes this route leg.
		**/
		summary: RouteSummary;
	}

	/**
	*	Defines the type of route to calculate.
	**/
	export enum RouteMode {

		/**
		*	Driving directions are calculated.
		**/
		driving,

		/**
		*	Transit directions are calculated.
		**/
		transit,

		/**
		*	Walking directions are calculated.
		**/
		walking
	}

	/**
	*	Defines optimization options for calculating directions.
	**/
	export enum RouteOptimization {

		/**
		*	Calculate a route the shortest time.
		**/
		shortestTime = 0,

		/**
		*	Calculate a route with the shortest distance.
		**/
		shortestDistance = 1,

		/**
		*	Minimize the cost when calculating directions. This option only affects routes with a transit @see RouteMode that have the culture set to ja-jp.
		**/
		minimizeMoney = 3,

		/**
		*	Minimize transit transfers when calculating directions. This option only affects routes with a transit @see RouteMode that have the culture set to ja-jp.
		**/
		minimizeTransfers = 4,

		/**
		*	Minimize the amount of walking when calculating directions. This option only affects routes with a transit @see RouteMode that have the culture set to ja-jp.
		**/
		minimizeWalking = 5
	}

	/**
	*	Represents the route line shape on the map.
	*	Tip: Use the setRenderOptions method of the @see DirectionsManager Class to set @see DirectionsRenderOptions to customize the look of the route line on the map.
	**/
	export class RoutePath {

		/**
		*	An array of latitudes, where each latitude is the latitude for one of the locations that define the route line.
		**/
		decodedLatitudes: number[];

		/**
		*	An array of longitudes, where each is the longitude value for one of the locations that define the route line.
		**/
		decodedLongitudes: number[];

		/**
		*	An array of regions that define, depending on the zoom level, how the route line should be rendered.
		**/
		decodedRegions: Object[];
	}

	/**
	*	Contains arguments for route selector events.
	**/
	export interface RouteSelectorEventArgs {

		/**
		*	A boolean indicating whether the event is handled. Set this property to true to override the default behavior.
		**/
		handled?: boolean;

		/**
		*	A number indicating the index of the route that was selected.
		**/
		routeIndex?: number;
	}

	/**
	*	Contains arguments for route selector render events.
	**/
	export interface RouteSelectorRenderEventArgs {
		
		/**
		*	The DOM element which contains the route selector. You can use this property to add custom content.
		**/
		containerElement?: Object;

		/**
		*	A boolean indicating whether the event is handled. This property is only available for the beforeRouteSelectorRender event. Set this property to true to override the default behavior.
		**/
		handled?: boolean;

		/**
		*	A number indicating the index of the selected route.
		**/
		routeIndex?: number;

		/**
		*	The route leg of the selected route.
		**/
		routeLeg?: RouteLeg;
	}

	/**
	*	Represents a route sub leg. A route sub leg is the part of the route between a stop point and a via point or between two via points. One or more sub legs make up a route leg.
	**/
	export class RouteSubLeg {

		/**
		*	The location of the last waypoint of the sub leg.
		**/
		actualEnd: Location;

		/**
		*	The location of the first waypoint of the sub leg.
		**/
		actualStart: Location;

		/**
		*	The description of the last waypoint of the sub leg.
		**/
		endDescription: string;

		/**
		*	The properties that define the route line of this sub leg on the map.
		**/
		routePath: RoutePath;

		/**
		*	The description of the first waypoint of the sub leg.
		**/
		startDescription: string;

		/**
		*	The summary of this route sub leg.
		**/
		summary: RouteSummary;
	}

	/**
	*	Represents a route summary.
	**/
	export class RouteSummary {
		/**
		*	The total travel distance of the route, specified in the units set in the distanceUnit property of the @see DirectionsRequestOptions.
		**/
		distance: number;

		/**
		*	The cost of the route. This property is only returned if the routeMode of the @see DirectionsRequestOptions is set to transit and the map culture is set to ja-jp.
		**/
		monetaryCost: number;

		/**
		*	The location of the northeast corner of bounding box that defines the best map view of the route.
		**/
		northEast: Location;

		/**
		*	The location of the southwest corner of bounding box that defines the best map view of the route.
		**/
		southWest: Location;

		/**
		*	The total travel time, in seconds, for the route.
		**/
		time: number;

		/**
		*	The total travel time, in seconds, taking into account traffic delays, for the route. This property is 0 if the avoidTraffic property of the @see DirectionsRequestOptions is set to false.
		**/
		timeWithTraffic: number;
	}

	/**
	*	Contains arguments for route summary render events.
	**/
	export interface RouteSummaryRenderEventArgs {

		/**
		*	The DOM element which contains the summary. You can use this property to add custom content.
		**/
		containerElement?: Object;

		/**
		*	A boolean indicating whether the event is handled. This property is only available for the beforeSummaryRender event. Set this property to true to override the default behavior.
		**/
		handled?: boolean;

		/**
		*	A number indicating the index of the route leg which this summary describes.
		**/
		routeLegIndex?: number;

		/**
		*	The summary that was rendered.
		**/
		summary?: RouteSummary;
	}

	/**
	*	Contains response codes for a route calculation request.
	**/
	export enum RouteResponseCode {

		/**
		*	The route was successfully calculated.
		**/
		success = 0,

		/**
		*	An unknown error has occurred.
		**/
		unknownError = 1,

		/**
		*	A nearby road cannot be found for one or more of the route waypoints.
		**/
		cannotFindNearbyRoad = 2,

		/**
		*	The distance between two route waypoints, or the total length of the route exceeds the limit of the route mode. Modify the waypoint locations so that they are closer together.
		**/
		tooFar = 3,

		/**
		*	A route cannot be calculated for the specified waypoints. For example, this code is returned when a route between “Seattle, WA” and “Honolulu, HI” is requested.
		**/
		noSolution = 4,

		/**
		*	There is no route data for the specified waypoints.
		**/
		dataSourceNotFound = 5,

		/**
		*	There are no transit options available for the specified time.
		**/
		noAvailableTransitTrip = 7,

		/**
		*	The transit stops are so close that walking is always a better option.
		**/
		transitStopsTooClose = 8,

		/**
		*	The transit stops are so close that walking is a better option.
		**/
		walkingBestAlternative = 9,

		/**
		*	There is no transit data available for the route or for one or more of the specified waypoints, or the waypoints are in different transit areas that do not overlap.
		**/
		outOfTransitBounds = 10,

		/**
		*	The directions calculation request has timed out.
		**/
		timeout = 11,

		/**
		*	One or more waypoints need to be disambiguated. This error does not occur if the autoDisplayDisambiguation directions render option is set to true.
		**/
		waypointDisambiguation = 12,

		/**
		*	One or more waypoints do not have an address or location specified.
		**/
		hasEmptyWaypoint = 13,

		/**
		*	The maximum number of waypoints, which is 25, has been exceeded.
		**/
		exceedMaxWaypointLimit = 14,

		/**
		*	At least two waypoints are required to calculate a route.
		**/
		atleastTwoWaypointRequired = 15,

		/**
		*	The first or last waypoint is a via point, which is not allowed.
		**/
		firstOrLastStoppointIsVia = 16,

		/**
		*	The search service failed to return results.
		**/
		searchServiceFailed = 17,

		/**
		*	The credentials passed to the Directions module are invalid.
		**/
		invalidCredentials = 18
	}

	/**
	*	Contains types of route direction warnings.
	**/
	export enum StepWarningStyle {
		/**
		*	The warning is just information about the route direction.
		**/
		info = 0,

		/**
		*	The warning is a minor warning, and may affect the route direction.
		**/
		minor = 1,

		/**
		*	The warning is a moderate warning and is likely to affect the route direction.
		**/
		moderate = 2,

		/**
		*	The warning is a major warning, and is highly likely to affect the route direction.
		**/
		major = 3,

		/**
		*	The warning indicates a congestion zone is being entered.
		**/
		ccZoneEnter = 4,

		/**
		*	The warning indicates a congestion zone is being exited.
		**/
		ccZoneExit = 5
	}

	/**
	*	Defines the transit time type.
	**/
	export enum TimeType {

		/**
		*	The time specified is an arrival time.
		**/
		arrival,

		/**
		*	The time specified is a departure time.
		**/
		departure,

		/**
		*	The time specified is the last available time. This time type is only returned for routes with a transit @see RouteMode that have the culture set to ja-jp.
		**/
		lastAvailable
	}

	/**
	*	Contains information about a transit line.
	**/
	export class TransitLine {
	 	
		/**
		*	The short name for the transit line.
		**/
	 	abbreviatedName: string;

	 	/**
	 	*	The ID of the agency that owns the transit line.
	 	**/
	 	agencyId: number;

	 	/**
	 	*	The name of the agency that owns the transit line.
	 	**/
	 	agencyName: string;

	 	/**
	 	*	The URL of the website of the agency that owns the transit line.
	 	**/
	 	agencyUrl: string;

	 	/**
	 	*	The color to use when rendering this transit line on the map.
	 	**/
	 	lineColor: Color;

	 	/**
	 	*	The color to use when rendering text associated with this transit line.
	 	**/
	 	lineTextColor: Color;

	 	/**
	 	*	Information about the provider of this transit line data.
	 	**/
	 	providerInfo: string;

	 	/**
	 	*	The full name of this transit line.
	 	**/
	 	verboseName: string;   
	}

	/**
	*	Contains extra options for transit routes.
	**/
	export interface TransitOptions {

		/**
		*	The type of the time specified in transitTime. The default value is departure.
		**/
		timeType?: TimeType;

		/**
		*	The transit time to use when calculating the route. If this property is set to null, the current time is used.
		**/
		transitTime?: Date;
	}

	/**
	*	Represents a route waypoint.
	**/
	export class Waypoint {

		/**
		*	Initializes a new instance of the Waypoint class.
		**/
		constructor(options: WaypointOptions);

		/**
		*	Clears all options associated with this waypoint.
		**/
		clear(): void;

		/**
		*	Releases any resources associated with the waypoint.
		**/
		dispose(): void;

		/**
		*	Returns the address associated with the waypoint.
		**/
		getAddress(): string;

		/**
		*	Returns the business details associated with the waypoint.
		**/
		getBusinessDetails(): BusinessDetails;

		/**
		*	Returns the container element for the waypoint disambiguation list.
		**/
		getDisambiguationContainer(): HTMLElement;

		/**
		*	Returns the result of the waypoint geocoding disambiguation.
		**/
		getDisambiguationResult(): Disambiguation;

		/**
		*	Returns the location of the waypoint.
		**/
		getLocation(): Location;

		/**
		*	Returns the custom pushpin associated with this waypoint, if one has been specified.
		**/
		getPushpin(): Pushpin;

		/**
		*	Returns the short address for the waypoint.
		**/
		getShortAddress(): string;

		/**
		*	Returns a boolean indicating whether the waypoint location is the exact location.
		**/
		isExactLocation(): boolean;

		/**
		*	Returns a boolean value indicating whether the waypoint is a via point. A via point is a location that your route is guaranteed to pass through. There can be multiple via points between two stop points.
		**/
		isViapoint(): boolean;

		/**
		*	Sets options for the waypoint. For these options to take effect, you must recalculate the route.
		**/
		setOptions(options: WaypointOptions): void;


		/**
		*	Occurs when the any properties of the waypoint change or are updated.
		**/
		changed(waypointEventArgs: WaypointEventArgs);

		/**
		*	Occurs when a geocoding request for the waypoint’s address is made.
		**/
		geocoded(waypointEventArgs: WaypointEventArgs);

		/**
		*	Occurs when a reverse geocoding request for the waypoint’s location is made. This happens when no address is provided for the waypoint, or if the waypoint is dragged (in which case its location is changed).
		**/
		reverseGeocoded(waypointEventArgs: WaypointEventArgs);
	}


	/**
	*	Contains the arguments for route waypoint events.
	**/
	export interface WaypointEventArgs {

		/**
		*	The waypoint for which the event occurred.
		**/
		waypoint?: Waypoint;
	}

	/**
	*	Contains waypoint options.
	**/
	export interface WaypointOptions {

		/**
		*	The address string, business name, or search string of the waypoint. For example, the following strings are valid for this parameter: “Seattle”, “Microsoft”, “pizza”, or “pizza Seattle”. Either the address or location property must be specified.
		**/
		address?: string;

		/**
		*	The business details of the waypoint, if it is a business.
		**/
		businessDetails?: BusinessDetails;

		/**
		*	The DOM element inside which the waypoint disambiguation list will be rendered. If this property is not set, the disambiguation list is rendered inside the itineraryContainer.
		**/
		disambiguationContainer?: HTMLElement;

		/**
		*	A boolean indicating whether the waypoint location is the exact location. The default value is false.
		**/
		exactLocation?: boolean;

		/**
		*	A boolean indicating whether the waypoint is a via point. A via point is a point along the route that is not a stop point. Set this property to true if you just want the route to pass through this location. The default value is false.
		**/
		isViapoint?: boolean;

		/**
		*	The location of the waypoint. Either the address or location property must be specified.
		**/
		location?: Location;

		/**
		*	The custom pushpin to use to represent this waypoint. This property overrides any pushpin options that apply to this waypoint that have been set in the @see DirectionsRenderOptions Object.
		**/
		pushpin?: Pushpin;

		/**
		*	The short address of the waypoint.
		**/
		shortAddress?: string;
	}

	/**
	*	Contains arguments for waypoint render events.
	**/
	export interface WaypointRenderEventArgs {

		/**
		*	The DOM element which contains the waypoint. You can use this property to add custom content.
		**/
		containerElement?: Object;

		/**
		*	A boolean indicating whether the event is handled. This property is only available for the beforeWaypointRender event. Set this property to true to override the default behavior.
		**/
		handled?: boolean;

		/**
		*	The waypoint for which the event occurred.
		**/
		waypoint?: Waypoint;
	}
}