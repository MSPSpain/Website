declare module Microsoft.Maps {

    /*
        Global functions
    */

    /*
        Loads the specified registered module, making its functionality available. An optional function can be specified that is called when the module is loaded.
        To register a module, use the registerModule method.

        The following Bing Maps modules are available:

        Microsoft.Maps.AdvancedShapes
        Microsoft.Maps.Directions
        Microsoft.Maps.Overlays.Style
        Microsoft.Maps.Search
        Microsoft.Maps.Themes.BingTheme
        Microsoft.Maps.Traffic
        Microsoft.Maps.VenueMaps
    */
    export function loadModule(moduleKey: string, options?: { callback: () => void; }): void;
    /*
        Signals that the specified module has been loaded and if specified, calls the callback function in loadModule. Call this method at the end of your module script.
    */
    export function moduleLoaded(moduleKey: string): void;

    /*
        Registers a module with the map control. The name of the module is specified in moduleKey, the module script is defined in scriptUrl, and the options provides the location of a *.css file to load with the module.
        Tip: To minimize possible conflicts with other custom modules, choose a unique module name (defined in moduleKey). For example, you can use your company name in the name of the module.
        Once you have registered a module, you can make its functionality available by loading it using loadModule.
    */
    export function registerModule(moduleKey: string, scriptUrl: string, options?: string[]): void;

    /*
        Tagging interface for items in an EntityCollection
    */
    export interface Entity {
        //No members
    }

    /**
    *    Represents the coordinates of the position of the user.
    **/
    export class Coordinates {
        
        /**
        *    The accuracy, in meters, of the latitude and longitude values.
        **/
        accuracy: number;

        /**
        *    The altitude of the location.
        **/
        altitude: number;

        /**
        *    The accuracy, in meters, of the altitude value.
        **/
        altitudeAccuracy: number;

        /**
        *    The direction of travel of the hosting device.
        **/
        heading: number;

        /**
        *    The latitude of the location.
        **/
        latitude: number;

        /**
        *    The longitude of the location.
        **/
        longitude: number;

        /**
        *    The ground speed of the hosting device, in meters per second.
        **/
        speed: number;
    }

    /**
    *    Contains methods for obtaining and displaying the user’s current location.
    *    Note: This functionality is only available on browsers that support the W3C GeoLocation API.
    **/
    export class GeoLocationProvider {

        /**
        *    Initializes a new instance of the GeoLocationProvider class.
        **/
        constructor (map: Map);

        /**
        *    Renders a geo location accuracy circle on the map. The accuracy circle is created with the center at the specified location, using the given radiusInMeters, and with the specified number of segments for the accuracy circle polygon. Additional options are also available to adjust the style of the polygon.
        **/
        addAccuracyCircle(center: Location, radiusInMeters: number, segments: number, options: PositionCircleOptions): void;

        /**
        *    Cancels the processing of the current getCurrentPosition request. This method prevents the response from being processed.
        **/
        cancelCurrentRequest(): void;

        /**
        *    Obtains the user’s current location and displays it on the map.
        *    Important: The accuracy of the user location obtained using this method varies widely depending on the desktop browser or mobile device of the requesting client. Desktop users may experience low user location accuracy (accuracy circles with large radiuses), while mobile user location accuracy may be much greater (a few meters).
        **/
        getCurrentPosition(options: PositionOptions): void;

        /**
        *    Removes the current geo location accuracy circle.
        **/
        removeAccuracyCircle(): void;
    }

    /**
    *    Contains the arguments for mouse events.
    **/
    export interface MouseEventArgs {

        /**
        *    The event that occurred.
        **/
        eventName?: string;

        /**
        *    A boolean indicating whether the event is handled. If this property is set to true, the default map control behavior for the event is cancelled.
        **/
        handled?: boolean;

        /**
        *    A boolean indicating if the primary button (such as the left mouse button or a tap on a touch screen) was used.
        **/
        isPrimary?: boolean;

        /**
        *    A boolean indicating if the secondary mouse button (such as the right mouse button) was used.
        **/
        isSecondary?: boolean;

        /**
        *    A boolean indicating whether the event that occurred was a touch event.
        **/
        isTouchEvent?: boolean;

        /**
        *    The original browser event.
        **/
        originalEvent?: any;

        /**
        *    The x-value of the pixel coordinate on the page of the mouse cursor.
        **/
        pageX?: number;

        /**
        *    The y-value of the pixel coordinate on the page of the mouse cursor.
        **/
        pageY?: number;

        /**
        *    The object that fired the event.
        **/
        target?: any;

        /**
        *    The type of the object that fired the event. Valid values include the following: ‘map’, ‘polygon’, ‘polyline’, or ‘pushpin’
        **/
        targetType?: string;

        /**
        *    The number of units that the mouse wheel has changed.
        **/
        wheelDelta?: number;

        /**
        *    Returns the x-value of the pixel coordinate, relative to the map, of the mouse.
        **/
        getX(): number;

        /**
        *    Returns the y-value of the pixel coordinate, relative to the map, of the mouse.
        **/
        getY(): number;
    }

    /**
    *    Contains the arguments for keyboard events.
    **/
    export interface KeyEventArgs {

        /**
        *    A boolean indicating if the ALT key was pressed.
        **/
        altKey?: boolean;

        /**
        *    A boolean indicating if the CTRL key was pressed.
        **/
        ctrlKey?: boolean;

        /**
        *    The event that occurred.
        **/
        eventName?: string;

        /**
        *    A boolean indicating whether the event is handled. If this property is set to true, the default map control behavior for the event is cancelled.
        **/
        handled?: boolean;

        /**
        *    The ASCII character code that identifies the keyboard key that was pressed.
        **/
        keyCode?: string;

        /**
        *    The original browser event.
        **/
        originalEvent?: any;

        /**
        *    A boolean indicating if the SHIFT key was pressed.
        **/
        shiftKey?: boolean;
    }

    /**
    *    Represents a rectangle on the map.
    **/
    export class LocationRect {

        /**
        *    Initializes a new instance of the LocationRect class.
        **/
        constructor (center: Location, width: number, height: number);

        /**
        *    The location that defines the center of the rectangle.
        **/
        center: Location;

        /**
        *    The height, in degrees, of the rectangle.
        **/
        height: number;

        /**
        *    The width, in degrees, of the rectangle.
        **/
        width: number;

        /**
        *    Returns a LocationRect using the specified locations for the northwest and southeast corners.
        **/
        static fromCorners(northwest: Location, southeast: Location): LocationRect;

        /**
        *    Returns a LocationRect using the specified northern and southern latitudes and western and eastern longitudes for the rectangle boundaries.
        **/
        static fromEdges(north: number, west: number, south: number, east: number, altitude: number, altitudeReference: AltitudeReference): LocationRect;

        /**
        *    Returns a LocationRect using a list of locations or an array of locations.
        *    To provide a list of locations: 
        *    Microsoft.Maps.LocationRect.fromLocations(location1, location2, location3);
        *    To provide an array of locations: 
        *    var locations = [location1, location2, location3];
        *    Microsoft.Maps.LocationRect.fromLocations(locations);
        **/
        static fromLocations(...locations: Location[]): LocationRect;
        
        /**
        *    Returns a LocationRect using a list of locations or an array of locations.
        *    To provide a list of locations: 
        *    Microsoft.Maps.LocationRect.fromLocations(location1, location2, location3);
        *    To provide an array of locations: 
        *    var locations = [location1, location2, location3];
        *    Microsoft.Maps.LocationRect.fromLocations(locations);
        **/
        static fromLocations(locations: Location[]): LocationRect;
        
        /**
        *    Creates a LocationRect from a string with the following format: "north,west,south,east". North, west, south and east specify the coordinate number values.
        **/
        static fromString(str: string): LocationRect;

        /**
        *    Returns a copy of the LocationRect object.
        **/
        clone(): LocationRect;

        /**
        *    Returns whether the specified Location is within the LocationRect.
        **/
        contains(location: Location): boolean;

        /**
        *    Returns the longitude that defines the eastern edge of the LocationRect.
        **/
        getEast(): number;

        /**
        *    Returns the latitude that defines the northern edge of the LocationRect.
        **/
        getNorth(): number;

        /**
        *    Returns the Location that defines the northwest corner of the LocationRect.
        **/
        getNorthwest(): Location;

        /**
        *    Returns the latitude that defines the southern edge of the LocationRect.
        **/
        getSouth(): number;

        /**
        *    Returns the Location that defines the southeast corner of the LocationRect.
        **/
        getSoutheast(): Location;

        /**
        *    Returns the latitude that defines the western edge of the LocationRect.
        **/
        getWest(): number;

        /**
        *    Returns whether the specified LocationRect intersects with this LocationRect.
        **/
        intersects(rect: LocationRect): boolean;

        /**
        *    Converts the LocationRect object to a string.
        **/
        toString(): string;
    }

    /**
    *    Contains the altitude and coordinate values of a location on the map.
    **/
    export class Location {

        /**
        *    Initializes a new instance of the Location class. The altitude and altitudeReference parameters default to undefined.
        **/
        constructor (latitude: number, longitude: number, altitude?: number, altitudeReference?: AltitudeReference);

        /**
        *    The altitude of the location.
        **/
        altitude: number;

        /**
        *    The reference from which the altitude is measured.
        **/
        altitudeReference: AltitudeReference;

        /**
        *    The latitude of the location.
        **/
        latitude: number;

        /**
        *    The longitude of the location.
        **/
        longitude: number;

        /**
        *    Determines if the specified Location objects are equal.
        **/
        static areEqual(location1: Location, location2: Location): boolean;

        /**
        *    Normalizes the specified longitude so that it is between -180 and 180.
        **/
        static normalizeLongitude(longitude: number): number;

        /**
        *    Returns a copy of the Location object.
        **/
        clone(): Location;

        /**
        *    Converts the Location object to a string.
        **/
        toString(): string;
    }

    /**
    *    Defines the reference point from which the altitude is measured.
    **/
    export class AltitudeReference {
        
        /**
        *    The altitude is measured from the ground level.
        **/
        static ground: string;
        
        /**
        *    The altitude is measured from the WGS 84 ellipsoid of the Earth.
        **/
        static ellipsoid: string;

        /**
        *    Determines if the specified reference is a supported AltitudeReference.
        **/
        static isValid(reference: AltitudeReference): boolean;
    }

    /**
    *    Represents a map mode.
    *    Mercator Map Mode Methods
    *    The following methods are available for the MapTypeId values aerial, auto, birdseye, collinsBart, mercator, ordnanceSurvey, and road.
    **/
    export class MapMode {

        /**
        *    Gets whether the mode should draw shapes (polygons, polylines, or pushpins) in a single layer, independent of the EntityCollection order.
        **/
        getDrawShapesInSingleLayer(): boolean;

        /**
        *    Gets whether to clip polygons if they are too large for the map in the mode.
        **/
        getShouldClipPolygons(): boolean;

        /**
        *    @Deprecated Use setOptions.
        *    Sets whether the mode should draw shapes (polygons, polylines, or pushpins) in a single layer, independent of the EntityCollection order. A shape is drawn by default in its own layer, but if one shape covers another shape, then the top-layered shape event is what is thrown. You can prevent this issue by calling setDrawShapesInSingleLayer(true).
        **/
        setDrawShapesInSingleLayer(drawInSingleLayer: boolean): void;

        /**
        *    Sets options for the current map mode.
        **/
        setOptions(options: MapModeOptions): void;

        /**
        *    Sets the specified number of milliseconds after the last viewchange event before viewchangeend event is fired. This allows you to control how often the viewchangeend event is fired when the map is panned.
        *    For example, to set a 1 second delay before the viewchangeend event fires, do the following: 
        *    map.getMode().setViewChangeEndDelay(1000);
        **/
        setViewChangeEndDelay(delay: number): void;
    }

    /**
    *    Represents options to customize a map mode.
    **/
    export interface MapModeOptions {

        /**
        *    Sets whether the mode should clip polygons if they are too large for the map in this mode.
        **/
        shouldClipPolygons?: boolean;

        /**
        *    Sets whether the mode should draw shapes (polygons, polylines, or pushpins) in a single layer, independent of the EntityCollection order. A shape is drawn by default in its own layer, but if one shape covers another shape, then the top-layered shape event is what is thrown. You can prevent this issue by setting this parameter to true.
        **/
        drawShapesInSingleLayer?: boolean;
    }

    /**
    *    Contains identifiers for the imagery displayed on the map.
    **/
    export enum MapTypeId {

        /**
        *    The aerial map type is being used.
        *    ShortCode: a
        **/
        aerial,

        /**
        *    The map is set to choose the best imagery for the current view.
        *    ShortCode: auto
        **/
        auto,

        /**
        *    The bird’s eye map type is being used.
        *    ShortCode: be
        **/
        birdseye,

        /**
        *    Collin’s Bart (mkt=en-gb) map type is being used.
        *    ShortCode: cb
        **/
        collinsBart,

        /**
        *    The Mercator map type is being used. This setting removes the base map tiles.
        *    ShortCode: m
        **/
        mercator,

        /**
        *    Ordnance Survey (mkt=en-gb) map type is being used.
        *    ShortCode: os
        **/
        ordnanceSurvey,

        /**
        *   The road map type is being used. 
        *    ShortCode: r
        **/
        road
    }

    /**
    *    Represents a color.
    **/
    export class Color {
        
        /**
        *    Initializes a new instance of the Color class. The a parameter represents opacity. The range of valid values for all parameters is 0 to 255.
        **/
        constructor (a: number, r: number, g: number, b: number);

        /**
        *    The opacity of the color. The range of valid values is 0 to 255.
        **/
        a: number;

        /**
        *    The red value of the color. The range of valid values is 0 to 255.
        **/
        r: number;

        /**
        *    The green value of the color. The range of valid values is 0 to 255.
        **/
        g: number;

        /**
        *    The blue value of the color. The range of valid values is 0 to 255.
        **/
        b: number;

        /**
        *    Creates a copy of the Color object.
        **/
        static clone(color: Color): Color;

        /**
        *    Converts the specified hex string to a Color.
        **/
        static fromHex(hex: string): Color;

        /**
        *    Returns a copy of the Color object.
        **/
        clone(): Color;

        /**
        *    Returns the opacity of the Color as a value between 0 (a=0) and 1 (a=255).
        **/
        getOpacity(): number;

        /**
        *    Converts the Color into a 6-digit hex string. Opacity is ignored. For example, a Color with values (255,0,0,0) is returned as hex string #000000.
        **/
        toHex(): string;

        /**
        *    Converts the Color object to a string.
        **/
        toString(): string;
    }

    /**
    *    Represents options to customize the map that is displayed.
    **/
    export interface MapOptions {

        /**
        *    The color to use for the map control background. The default color is #F4F2EE.
        *    This property can only be set when using the @see Map constructor.
        **/
        backgroundColor?: Color;

        /**
        *    The Bing Maps Key used to authenticate the application.
        *    This property can only be set when using the @see Map constructor.
        **/
        credentials?: string;

        /**
        *    A boolean indicating whether to load the new Bing Maps overlay styles. The default value is false.
        *    This property setting only takes effect if the Microsoft.Maps.Overlays.Style module is loaded.
        **/
        customizeOverlays?: boolean;

        /**
        *    A boolean indicating whether to disable the bird’s eye map type. The default value is false. If this property is set to true, bird’s eye will be removed from the map navigation control and the birdseyeMapTypeId is disabled. Additionally, the auto map type will only display road or aerial.
        *    This property can only be set when using the @see Map constructor.
        **/
        disableBirdseye?: boolean;

        /**
        *    A boolean value indicating whether to disable the map’s response to keyboard input. The default value is false.
        **/
        disableKeyboardInput?: boolean;

        /**
        *    A boolean value indicating whether to disable the map’s response to mouse input. The default value is false.
        **/
        disableMouseInput?: boolean;

        /**
        *    A boolean value indicating whether to disable the user’s ability to pan the map. The default value is false.
        **/
        disablePanning?: boolean;

        /**
        *    A boolean value indicating whether to disable the map’s response to touch input. The default value is false.
        **/
        disableTouchInput?: boolean;

        /**
        *    A boolean value indicating whether to disable the map’s response to any user input. The default value is false.
        **/
        disableUserInput?: boolean;

        /**
        *    A boolean value indicating whether to disable the user’s ability to zoom in or out. The default value is false.
        **/
        disableZooming?: boolean;

        /**
        *    A boolean value indicating whether the BingTM logo on the map is clickable. The default value is true.
        *    This property can only be set when using the @see Map constructor.
        **/
        enableClickableLogo?: boolean;

        /**
        *    A boolean value indicating whether to enable the BingTM hovering search logo on the map. The default value is true.
        *    This property can only be set when using the @see Map constructor.
        **/
        enableSearchLogo?: boolean;

        /**
        *    A boolean indicating whether the div containing the map control is fixed on the page and the browser will not be resized. The default value is false. In this case the map control redraws if necessary based on any div or window resize.
        *    If this property is set to true, the map control does not check the size of the div containing it every time the map view changes, thus increasing the performance of the control.
        *    This property can only be set when using the @see Map constructor.
        **/
        fixedMapPosition?: boolean;

        /**
        *    The height of the map. The default value is null. If no height is specified, the height of the div is used. If height is specified, then width must be specified as well.
        **/
        height?: number;

        /**
        *    A number between 0 and 1 specifying the intensity of the inertia animation effect. The inertia effect increases as the intensity value gets larger. The default value is .85. Setting this property to 0 indicates no inertia effect.
        *    The useInertia property must be set to true for the inertiaIntensity value to have an effect.
        **/
        inertiaIntensity?: number;

        /**
        *    A boolean value indicating whether to display the “breadcrumb control”. The breadcrumb control shows the current center location’s geography hierarchy. For example, if the location center is Seattle, the breadcrumb control displays “World . United States . WA”. The default value is false.
        *    The breadcrumb control displays best when the width of the map is at least 300 pixels.
        *    This property can only be set when using the @see Map constructor.
        **/
        showBreadcrumb?: boolean;

        /**
        *    A boolean value indicating whether or not to show the map copyright. The default value is true.
        *    This property can only be set when using the @see Map constructor.
        *    IMPORTANT: Bing Maps Platform API Terms of Use requires copyright information to be displayed. Only set this option to false when copyright information is displayed through alternate means.
        **/
        showCopyright?: boolean;

        /**
        *    A boolean value indicating whether to show the map navigation control. The default value is true.
        *    This property can only be set when using the @see Map constructor.
        **/
        showDashboard?: boolean;

        /**
        *    A boolean value indicating whether to show the map type selector in the map navigation control. The default value is true.
        *    This property can only be set when using the @see Map constructor.
        **/
        showMapTypeSelector?: boolean;

        /**
        *    A boolean value indicating whether to show the scale bar. The default value is true.
        *    This property can only be set when using the @see Map constructor.
        **/
        showScalebar?: boolean;

        /**
        *    A theme object specifying the theme to use for the design of the map. To get the latest Bing Maps design, load the Microsoft.Maps.Themes.BingTheme module and assign a BingTheme object to this property.
        **/
        theme?: any;

        /**
        *    A number between 0 and 4 specifying how many tiles to use as a buffer around the map view. The default value is 0.
        **/
        tileBuffer?: number;

        /**
        *    A boolean value indicating whether to use the inertia animation effect during map navigation. The default value is true.
        **/
        useInertia?: boolean;

        /**
        *    The width of the map. The default value is null. If no width is specified, the width of the div is used. If width is specified, then height must be specified as well.
        **/
        width?: number;
    }

    /**
    *    Contains options for the map view.
    **/
    export interface ViewOptions {
        
        /**
        *    A boolean that specifies whether to animate map navigation. Note that this option is associated with each setView call and defaults to true if not specified.
        **/
        animate?: boolean;

        /**
        *    The bounding rectangle of the map view. If both are specified, bounds takes precedence over center.
        **/
        bounds?: LocationRect;

        /**
        *    The location of the center of the map view. If both are specified, bounds takes precedence over center.
        **/
        center?: Location;

        /**
        *    The amount the center is shifted. This property is ignored if center is not specified.
        **/
        centerOffset?: Point;

        /**
        *    The directional heading of the map. The heading is represented in geometric degrees with 0 or 360 = North, 90 = East, 180 = South, and 270 = West.
        **/
        heading?: number;

        /**
        *    A constant indicating how map labels are displayed.
        **/
        labelOverlay?: LabelOverlay;

        /**
        *    The map type of the view. Valid map types are found in the @see MapTypeId Enumeration topic.
        **/
        mapTypeId?: string;

        /**
        *    The amount of padding to be added to each side of the bounds of the map view.
        **/
        padding?: number;

        /**
        *    The zoom level of the map view.
        *    For information about map scale and resolution with respect to zoom level, see Understanding Scale and Resolution.
        **/
        zoom?: number;
    }

    /**
    *    Contains constants used to show how pixels are defined.
    **/
    export class PixelReference {
        
        /**
        *    The pixel is defined relative to the map control’s root element, where the top left corner of the map control is (0, 0). Using this option might cause a page reflow which may negatively impact performance.
        **/
        static control: string;
        
        /**
        *    The pixel is defined relative to the page, where the top left corner of the HTML page is (0, 0). This option is best used when working with mouse or touch events. Using this option might cause a page reflow which may negatively impact performance.
        **/
        static page: string;
        
        /**
        *    The pixel is defined in viewport coordinates, relative to the center of the map, where the center of the map is (0, 0). This option is best used for positioning geo-aligned entities added to the user layer.
        **/
        static viewport: string;

        /**
        *    Determines whether the specified reference is a supported PixelReference.
        **/
        static isValid(reference: PixelReference): boolean;
    }

    /**
    *    Represents a point on the map.
    **/
    export class Point {

        /**
        *    Initializes a new instance of the Point class.
        **/
        constructor (x: number, y: number);

        /**
        *    The x value of the coordinate.
        **/
        x: number;

        /**
        *    The y-value of the coordinate.
        **/
        y: number;

        /**
        *    Determines if the specified points are equal.
        **/
        static areEqual(point1: Point, point2: Point): boolean;

        /**
        *    Returns a copy of the Point object.
        **/
        static clone(point: Point): Point;

        /**
        *    Returns a copy of the Point object.
        **/
        clone(): Point;

        /**
        *    Converts the Point object into a string.
        **/
        toString(): string;
    }

    /**
    *    Represents an info box on the map. You can use this class to create pop-up balloons for pushpins.
    **/
    export class Infobox implements Entity {

        /**
        *    Initializes a new instance of the Infobox class.
        **/
        constructor(location: Location, options?: InfoboxOptions);

        /**
        *    Returns a list of actions, where each item is a name-value pair indicating an action link name and the event name for the action that corresponds to that action link.
        **/
        getActions(): Object;

        /**
        *    Returns the point on the infobox which is anchored to the map. An anchor of (0,0) is the top left corner of the infobox.
        **/
        getAnchor(): Point;

        /**
        *    Returns the string that is printed inside the infobox.
        **/
        getDescription(): string;

        /**
        *    Returns the height of the info box.
        **/
        getHeight(): number;

        /**
        *    Returns the info box as HTML.
        **/
        getHtmlContent(): string;

        /**
        *    Returns the ID of the info box.
        **/
        getId(): string;

        /**
        *    Returns the location on the map where the infobox’s anchor is attached.
        **/
        getLocation(): Location;

        /**
        *    Returns the amount the infobox pointer is shifted from the location of the infobox, or if showPointer is false, then it is the amount the infobox bottom left edge is shifted from the location of the infobox. The default value is (0,0), which means there is no offset.
        **/
        getOffset(): Point;

        /**
        *    Returns the info box options.
        **/
        getOptions(): InfoboxOptions;

        /**
        *    Returns a boolean indicating whether the infobox close button is shown.
        **/
        getShowCloseButton(): boolean;

        /**
        *    Returns a boolean indicating whether the infobox is drawn with a pointer.
        **/
        getShowPointer(): boolean;

        /**
        *    Returns a string that is the title of the info box.
        **/
        getTitle(): string;

        /**
        *    Returns an object containing a name-value pair indicating the link text to the right of an info box title and the event name for the action that corresponds to that link.
        **/
        getTitleAction(): Object;

        /**
        *    Returns the name of the function to call when the title of the info box is clicked.
        **/
        getTitleClickHandler(): Function;

        /**
        *    Returns whether the infobox is visible. A value of false indicates that the infobox is hidden, although it is still an entity on the map.
        **/
        getVisible(): boolean;

        /**
        *    Returns the width of the infobox.
        **/
        getWidth(): number;

        /**
        *    Returns the z-index of the infobox with respect to other items on the map.
        **/
        getZIndex(): number;

        /**
        *    Sets the HTML content of the infobox. You can use this method to change the look of the infobox. Note that info box options are ignored if custom HTML is set. Also, when custom HTML is used to represent the info box, the info box is anchored at the top-left corner.
        *    var infoboxOptions = {width :200, height :100, showCloseButton: true, zIndex: 0, offset:new Microsoft.Maps.Point(10,0), showPointer: true}; 
        *    var defInfobox = new Microsoft.Maps.Infobox(map.getCenter(), infoboxOptions ); 
        *    map.entities.push(defInfobox); 
        *    defInfobox.setHtmlContent('<div id="infoboxText" style="background-color:White; border-style:solid;border-width:medium; border-color:DarkOrange; min-height:100px; position:absolute;top:0px; left:23px; width:240px;"><b id="infoboxTitle" style="position:absolute; top:10px; left:10px; width:220px;">myTitle</b><a id="infoboxDescription" style="position:absolute; top:30px; left:10px; width:220px;">lkjsl lkjdkl lkajdlkj klasdjfkl</a></div>');
        **/
        setHtmlContent(content: string): void;

        /**
        *    Sets the location on the map where the anchor of the infobox is attached.
        **/
        setLocation(location: Location): void;

        /**
        *    Sets options for the infobox.
        **/
        setOptions(options: InfoboxOptions): void;

        /**
        *    Converts the Infobox object to a string.
        **/
        toString(): string;

        /**
        *    Occurs when the mouse is used to click the infobox.
        **/
        click: (eventArgs: MouseEventArgs) => any;

        /**
        *    Occurs when the location of the infobox or any of the infobox options change.
        **/
        entitychanged: (entity: Entity) => any;

        /**
        *    Occurs when the mouse cursor enters the area covered by the infobox.
        **/
        mouseenter: (eventArgs: MouseEventArgs) => any;

        /**
        *    Occurs when the mouse cursor leaves the area covered by the infobox.
        **/
        mouseleave: (eventArgs: MouseEventArgs) => any;
    }

    /**
    *    Represents a polygon on the map.
    **/
    export class Polygon implements Entity {

        /**
        *    Initializes a new instance of the Polygon class.
        **/
        constructor (locations: Location[], options?: PolygonOptions);

        /**
        *   Returns the color of the inside of the polygon.
        **/
        getFillColor(): Color;

        /**
        *   Returns the locations that define the corners of the polygon.
        **/
        getLocations(): Location[];

        /**
        *   Returns the color of the outline of the polygon.
        **/
        getStrokeColor(): Color;

        /**
        *   Returns the string that represents the stroke/gap sequence used to draw the outline of the polygon.
        **/
        getStrokeDashArray(): string;

        /**
        *   Returns the thickness of the outline of the polygon.
        **/
        getStrokeThickness(): number;

        /**
        *   Returns whether the polygon is visible. A value of false indicates that the polygon is hidden, although it is still an entity on the map.
        **/
        getVisible(): boolean;

        /**
        *   Sets the locations that define the corners of the polygon.
        **/
        setLocations(locations: Location[]): void;

        /**
        *   Sets options for the polygon.
        **/
        setOptions(options: PolylineOptions): void;

        /**
        *   Converts the Polygon object to a string.
        **/
        toString(): string;

        /**
        *   Occurs when the mouse is used to click the polygon.
        **/
        click: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the mouse is used to double click the polygon.
        **/
        dblclick: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the location of the polygon or any of the polygon’s options change.
        **/
        entitychanged: (entity: Entity) => any;

        /**
        *   Occurs when the left mouse button is pressed when the mouse is over the polygon.
        **/
        mousedown: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the mouse cursor moves out of the area covered by the polygon.
        **/
        mouseout: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the mouse is over the polygon.
        **/
        mouseover: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the left mouse button is lifted up when the mouse is over the polygon.
        **/
        mouseup: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the right mouse button is used to click the polygon.
        **/
        rightclick: (eventArgs: MouseEventArgs) => any;
    }

    /**
    *   Represents a polyline on the map.
    **/
    export class Polyline implements Entity {
        
        /**
        *   Initializes a new instance of the Polyline class.
        **/
        constructor (locations: Location[], options?: PolylineOptions);

        /**
        *   Returns the locations that define the polyline.
        **/
        getLocations(): Location[];

        /**
        *   Returns the color of the polyline.
        **/
        getStrokeColor(): Color;

        /**
        *   Returns the string that represents the stroke/gap sequence used to draw the polyline.
        **/
        getStrokeDashArray(): string;

        /**
        *   Returns the thickness of the polyline.
        **/
        getStrokeThickness(): number;

        /**
        *   Returns whether the polyline is visible. A value of false indicates that the polyline is hidden, although it is still an entity on the map.
        **/
        getVisible(): boolean;

        /**
        *   Sets the locations that define the polyline.
        **/
        setLocations(locations: Location[]): void;

        /**
        *   Sets options for the polyline.
        **/
        setOptions(options: PolylineOptions): void;

        /**
        *   Converts the Polyline object to a string.
        **/
        toString(): string;

        /**
        *   Occurs when the mouse is used to click the polyline.
        **/
        click: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the mouse is used to double click the polyline.
        **/
        dblclick: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the location of the polyline or any of the polyline’s options change.
        **/
        entitychanged: (entity: Entity) => any;

        /**
        *   Occurs when the left mouse button is pressed when the mouse is over the polyline.
        **/
        mousedown: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the mouse cursor moves out of the area covered by the polyline.
        **/
        mouseout: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the mouse is over the polyline.
        **/
        mouseover: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the left mouse button is lifted up when the mouse is over the polyline.
        **/
        mouseup: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the right mouse button is used to click the polyline.
        **/
        rightclick: (eventArgs: MouseEventArgs) => any;
    }

    /**
    *   Defines a pushpin on the map.
    **/
    export class Pushpin implements Entity {
        
        /**
        *   Initializes a new instance of the Pushpin class.
        **/
        constructor (location: Location, options?: PushpinOptions);

        /**
        *   Returns the point on the pushpin icon which is anchored to the pushpin location. An anchor of (0,0) is the top left corner of the icon.
        **/
        getAnchor(): Point;

        /**
        *   Returns the pushpin icon.
        **/
        getIcon(): string;

        /**
        *   Returns the height of the pushpin, which is the height of the pushpin icon.
        **/
        getHeight(): number;

        /**
        *   Returns the location of the pushpin.
        **/
        getLocation(): Location;

        /**
        *   Returns the text associated with the pushpin.
        **/
        getText(): string;

        /**
        *   Returns the amount the text is shifted from the pushpin icon.
        **/
        getTextOffset(): Point;

        /**
        *   Returns the type of the pushpin.
        **/
        getTypeName(): string;

        /**
        *   Returns whether the pushpin is visible. A value of false indicates that the pushpin is hidden, although it is still an entity on the map.
        **/
        getVisible(): boolean;

        /**
        *   Returns the width of the pushpin, which is the width of the pushpin icon.
        **/
        getWidth(): number;

        /**
        *   Returns the z-index of the pushpin with respect to other items on the map.
        **/
        getZIndex(): number;

        /**
        *   Sets the location of the pushpin.
        **/
        setLocation(location: Location): void;

        /**
        *   Sets options for the pushpin.
        **/
        setOptions(options: PushpinOptions): void;

        /**
        *   Converts the Pushpin object to a string.
        **/
        toString(): string;

        /**
        *   Occurs when the mouse is used to click the pushpin.
        **/
        click: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the mouse is used to double click the pushpin.
        **/
        dblclick: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the pushpin is being dragged.
        **/
        drag: (object: Pushpin) => any;

        /**
        *   Occurs when the pushpin stops being dragged.
        **/
        dragend: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the pushpin starts being dragged.
        **/
        dragstart: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the location of the pushpin or any of the pushpin’s options change.
        **/
        entitychanged: (object: { entity: Entity; }) => any;

        /**
        *   Occurs when the left mouse button is pressed when the mouse is over the pushpin.
        **/
        mousedown: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the mouse cursor moves out of the area covered by the pushpin.
        **/
        mouseout: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the mouse is over the pushpin.
        **/
        mouseover: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the left mouse button is lifted up when the mouse is over the pushpin.
        **/
        mouseup: (eventArgs: MouseEventArgs) => any;

        /**
        *   Occurs when the right mouse button is used to click the pushpin.
        **/
        rightclick: (eventArgs: MouseEventArgs) => any;
    }

    /**
    *    Represents a tile layer.
    **/
    export class TileLayer implements Entity {

        /**
        *    Initializes a new instance of the TileLayer class.
        **/
        constructor (options: TileLayerOptions);

        /**
        *    Returns the opacity of the tile layer, defined as a double between 0 (not visible) and 1.
        **/
        getOpacity(): number;
        
        /**
        *    Returns the tile source of the tile layer.
        *    The projection parameter accepts the following values: mercator, enhancedBirdseyeNorthUp, enhancedBirdseyeSouthUp, enhancedBirdseyeEastUp, enhancedBirdseyeWestUp
        **/
        getTileSource(projection: string): TileSource;

        /**
        *    Returns whether the tile layer is visible. A value of false indicates that the tile layer is hidden.
        **/
        getVisible(): boolean;

        /**
        *    Returns the z-index of the tile layer with respect to other items on the map.
        **/
        getZIndex(): number;

        /**
        *    Sets options for the tile layer.
        **/
        setOptions(options: TileLayerOptions): void;

        /**
        *    Converts the TileLayer object to a string.
        **/
        toString(): string;

        /**
        *    Occurs when all the tiles of the tile layer have loaded.
        **/
        tiledownloadcomplete: () => any;
    }

    /**
    *    Represents the error when a user position request does not succeed.
    **/
    export class PositionError {
      
        /**
        *    The error code.
        *    Any one of the following error codes may be returned:
        *    - 0 An error occurred that is not covered by other error codes.
        *    - 1 The application does not have permission to use the GeoLocation API.
        *    - 2 The position of the host device could not be determined.
        *    - 3 The specified timeout was exceeded.
        **/
        errorCode: number;

        /**
        *    The error message. This message is for the developer and is not intended to be displayed to the end user.
        **/
        internalError: string;
    }

    /**
    *    Defines how map labels are displayed.
    **/
    export class LabelOverlay {
        
        /**
        *    Map labels are not shown on top of imagery.
        **/
        static hidden: string;

        /**
        *    Map labels are shown on top of imagery.
        **/
        static visible: string;

        /**
        *    Determines whether the specified labelOverlay is a supported LabelOverlay.
        **/
        static isValid(labelOverlay: LabelOverlay): boolean;
    }

    /**
    *    Defines the highlighted or selected state of an entity, such as a pushpin. To get the latest Bing Maps entity state design, load the Microsoft.Maps.Themes.BingTheme module before creating your entity.
    **/
    export enum EntityState {

        /**
        *    The entity is highlighted on the map.
        **/
        highlighted,

        /**
        *    The entity is not highlighted or selected.
        **/
        none,

        /**
        *    The entity is selected on the map.
        **/
        selected
    }

    /**
    *    Defines a tile layer’s visibility during animation.
    **/
    export enum AnimationVisibility {

        /**
        *    The map control determines whether or not to show a tile layer based on system capability. If a browser can render a tile layer with acceptable performance, it is displayed during animations.
        **/
        auto,

        /**
        *    The tile layer is not displayed during animation.
        **/
        hide,

        /**
        *    The tile layer is displayed during animations. This option may impact performance on older browsers.
        **/
        show
    }

    /**
    *    Contains info box styles. To get the latest Bing Maps design, load the Microsoft.Maps.Themes.BingTheme module before creating your info box.
    **/
    export enum InfoboxType {

        /**
        *    A smaller info box with space for a title.
        **/
        mini,

        /**
        *    The default info box style. This standard info box makes space for a title, title link, description, and other links if they are specified.
        **/
        standard
    }

    /**
    *    Represents the position of a user on a map.
    **/
    export class Position {
        
        /**
        *    The position as a W3C Coordinates object.
        **/
        coords: Coordinates;

        /**
        *    The time when the position was determined, in the form of a DOMTimeStamp.
        **/
        timestamp: string;
    }

    /**
    *    Defines options for a tile source.
    **/
    export interface TileSourceOptions {

        /**
        *    The pixel height of each tile in the tile source. The default value is 256.
        *    The specified height needs to be a multiplier of 2 of the current projection’s tile height for the tiles to be shown. For example, since Mercator tile source tiles are 256x256, this projection supports tiles that are 64x64, 128x128, 256x256, 512x512, or any combination of these.
        **/
        height?: number;
        
        /**
        *    The string that constructs the URLs used to retrieve tiles from the tile source. This property is required.
        *    The uriConstructor will replace {subdomain} and {quadkey}.
        *    You can also set this to a callback function that receives a tile URL with location (x,y) and zoom level properties. This is useful when you want to use tiles with x/y/zoom URL structure, or if you are connecting to a Web Map Service (WMS) and need to pass the tile bounding box in the URL.
        **/
        uriConstructor?: string;

        /**
        *    The pixel width of each tile in the tile source. The default value is 256.
        *    The specified width needs to be a multiplier of 2 of the current projection’s tile width for the tiles to be shown. For example, since Mercator tile source tiles are 256x256, this projection supports tiles that are 64x64, 128x128, 256x256, 512x512, or any combination of these.
        **/
        width?: number;
    }

    /**
    *    Defines a tile source for a tile layer.
    **/
    export class TileSource {

        /**
        *    Initializes a new instance of the TileSource class.
        **/
        constructor (options: TileSourceOptions);

        /**
        *    Returns the pixel height of each tile in the tile source.
        **/
        getHeight(): number;

        /**
        *    Returns a string that constructs tile URLs used to retrieve tiles for the tile layer.
        **/
        getUriConstructor(): string;

        /**
        *    Returns the pixel width of each tile in the tile source.
        **/
        getWidth(): number;

        /**
        *    Converts the TileSource object to a string.
        **/
        toString(): string;
    }

    /**
    *    Defines the options for a tile layer.
    **/
    export interface TileLayerOptions {

        /**
        *    The tile layer’s visibility during animation. You can use this property to prevent overlays from displaying during animations, which can impact performance. The default value is auto.
        **/
        animationDisplay?: AnimationVisibility;

        /**
        *    The number of milliseconds allowed for the tile layer image download. If the timeout occurs before the image is fully downloaded, the map control considers the download a failure. The default value is 10000.
        **/
        downloadTimeout?: number;

        /**
        *    The tile source for the tile layer.
        **/
        mercator?: TileSource;

        /**
        *    The opacity of the tile layer, defined by a number between 0 (not visible) and 1.
        **/
        opacity?: number;

        /**
        *    A boolean indicating whether to show or hide the tile layer. The default value is true. A value of false indicates that the tile layer is hidden, although it is still an entity on the map.
        **/
        visible?: boolean;

        /**
        *    The z-index of the tile layer, with respect to other items on the map.
        **/
        zIndex?: number;
    }

    /**
    *    Represents the options for a pushpin.
    **/
    export interface PushpinOptions {

        /**
        *    The point on the pushpin icon which is anchored to the pushpin location. An anchor of (0,0) is the top left corner of the icon. The default anchor is the bottom center of the icon.
        **/
        anchor?: Point;

        /**
        *    A boolean indicating whether the pushpin can be dragged to a new position with the mouse.
        **/
        draggable?: boolean;

        /**
        *    The height of the pushpin, which is the height of the pushpin icon. The default value is 39.
        **/
        height?: number;

        /**
        *    The HTML that represents the pushpin.
        **/
        htmlContent?: string;

        /**
        *    The path of the image to use as the pushpin icon.
        **/
        icon?: string;

        /**
        *    The info box associated with this pushpin. If the Microsoft.Maps.Themes.BingTheme module is loaded, then the info box appears when the hover or click events of the pushpin occur.
        **/
        infobox?: Infobox;

        /**
        *    The state of the pushpin, such as highlighted or selected. To get the latest pushpin state design, load the Microsoft.Maps.Themes.BingTheme module before creating the pushpin.
        **/
        state?: EntityState;

        /**
        *    The text associated with the pushpin.
        **/
        text?: string;

        /**
        *    The amount the text is shifted from the pushpin icon. The default value is (0,5).
        **/
        textOffset?: Point;

        /**
        *    The type of the pushpin, as a string. The pushpin DOM (document object model) node created for the pushpin will have the specified typeName. A standard pushpin type is used unless the Microsoft.Maps.Themes.BingTheme module is loaded, in which case typeName can be set to ‘micro’ to use the micro pushpin type.
        **/
        typeName?: string;

        /**
        *    A boolean indicating whether to show or hide the pushpin. The default value is true. A value of false indicates that the pushpin is hidden, although it is still an entity on the map.
        **/
        visible?: boolean;

        /**
        *    The width of the pushpin, which is the width of the pushpin icon. The default value is 25.
        **/
        width?: number;

        /**
        *    The z-index of the pushpin with respect to other items on the map.
        **/
        zIndex?: number;
    }

    export interface PositionOptions {
        enableHighAccuracy?: boolean;
        /*
        The function to call when an error occurs during the user location request. The callback function must accept one argument.
        The argument object contains two properties, internalError, a PositionError type, and errorCode, a number.
        
        Any one of the following errorCode values may be returned:
        1 - The application origin does not have permission to use the GeoLocation API.

        2 - The position of the user could not be determined because of a device failure.

        3 - The time specified in timeout has been exceeded.

        4 - A request is already in process.

        5 - The user’s browser does not support geo location.
        */
        errorCallback?: (internalError: PositionError, errorCode: number) => void;
        maximumAge?: number;
        showAccuracyCircle?: boolean;
        successCallback?: (center: Location, position: Position) => void;
        timeout?: number;
        updateMapView?: boolean;
    }

    /**
    *    Contains options for the addAccuracyCircle method of the GeoLocationProvider class.
    **/
    export interface PositionCircleOptions {
        
        /**
        *    The polygon options for the geo location accuracy circle.
        **/
        polygonOptions?: PolygonOptions;
        
        /**
        *    A boolean indicating whether to display the geo location accuracy circle. The default value is true. If this property is set to false, a geo location accuracy circle is not drawn and any existing accuracy circles are removed.
        **/
        showOnMap?: boolean;
    }

    /**
    *    Represents the options for a polyline.
    **/
    export interface PolylineOptions {
        
        /**
        *    The color of the polyline.
        **/
        strokeColor?: Color;

        /**
        *    A string representing the stroke/gap sequence to use to draw the polyline. 
        *    The string must be in the format S, G, S*, G*, where S represents the stroke length and G represents gap length. 
        *    Stroke lengths and gap lengths can be separated by commas or spaces. For example, a stroke dash string of “1 4 2 1” would draw the 
        *    polyline with a dash, four spaces, two dashes, one space, and then repeated.
        **/
        strokeDashArray?: string;


        /**
        *    The thickness of the polyline.
        **/
        strokeThickness?: number;


        /**
        *    A boolean indicating whether to show or hide the polyline. 
        *    A value of false indicates that the polyline is hidden, although it is still an entity on the map.
        **/
        visible?: boolean;
    }

    /**
    *    Represents the options for a polygon.
    **/
    export interface PolygonOptions {
        
        /**
        *    The color of the inside of the polygon.
        **/
        fillColor?: Color;

        /**
        *    The info box associated with this polygon. If an info box is assigned and the Microsoft.Maps.Themes.BingTheme module is loaded, 
        *    then the info box appears when the hover or click events of the polygon occur.
        **/
        infobox?: Infobox;

        /**
        *    The color of the outline of the polygon.
        **/
        strokeColor?: Color;

        /**
        *    A string representing the stroke/gap sequence to use to draw the outline of the polygon. 
        *    The string must be in the format S, G, S*, G*, where S represents the stroke length and G represents gap length. 
        *    Stroke lengths and gap lengths can be separated by commas or spaces. For example, a stroke dash string of “1 4 2 1” 
        *    would draw the polygon outline with a dash, four spaces, two dashes, one space, and then repeated.
        **/
        strokeDashArray?: string;
        
        /**
        *    The thickness of the outline of the polygon.
        **/
        strokeThickness?: number;

        /**
        *    A boolean indicating whether to show or hide the polygon. A value of false indicates that the polygon is hidden, although it is still an entity on the map.
        **/
        visible?: boolean;
    }

    /**
    *    Represents the options for an info box.
    **/
    export interface InfoboxOptions {
        
        /**
        *    A list of the info box actions, where each item is a label (the link text) or icon (the URL of the image to use as the icon link) and eventHandler (name of the function handling a click of the action link).
        *    var infoboxOptions = {title:'My Infobox', description:'Testing actions', actions:[{label: 'test1', eventHandler: testEvent1}, {label: 'test2', eventHandler: testEvent2},{label: 'test3', eventHandler: testEvent3}] };
        **/
        actions?: { label?: string; icon?: string; eventHandler: () => void; };
        
        /**
        *    The string displayed inside the info box.
        **/
        description?: string;
        
        /**
        *    The height of the info box. The default value is 126.
        **/
        height?: number;

        /**
        *    The HTML that represents the info box. Note that info box options are ignored if custom HTML is set. Also, if custom HTML is used to represent the info box, the info box is anchored at the top-left corner.
        *    var infoboxOptions = {width :200, height :100, showCloseButton: true, zIndex: 0, offset:new Microsoft.Maps.Point(10,0), showPointer: true, htmlContent:'<b>Custom HTML</b>'};
        **/
        htmlContent?: string;

        /**
        *    The ID associated with the info box.
        **/
        id?: string;

        /**
        *    The location on the map where the info box’s anchor is attached.
        **/
        location?: Location;

        /**
        *    The amount the info box pointer is shifted from the location of the info box, or if showPointer is false, then it is the amount the info box bottom left edge is shifted from the location of the info box. If custom HTML is set, it is the amount the top-left corner of the info box is shifted from its location. The default offset value is (0,0), which means there is no offset.
        **/
        offset?: Point;

        /**
        *    A boolean indicating whether to show the close dialog button on the info box. The default value is true. By default the close button is displayed as an X in the top right corner of the info box.
        *    This property is ignored if custom HTML is used to represent the info box.
        **/
        showCloseButton?: boolean;

        /**
        *    A boolean indicating whether to display the info box with a pointer. The default value is true. In this case the info box is anchored at the bottom point of the pointer. If this property is set to false, the info box is anchored at the bottom left corner.
        *    This property is ignored if custom HTML is used to represent the info box.
        **/
        showPointer?: boolean;

        /**
        *    The pushpin associated with this info box. If the Microsoft.Maps.Themes.BingTheme module is loaded, then the info box appears when the hover or click events of the pushpin occur.
        **/
        pushpin?: Pushpin;

        /**
        *    The title of the info box.
        **/
        title?: string;

        /**
        *    An action to take when the link to the right of an info box title is clicked. The specified object contains a label (the link text) and an eventHandler (the name of the function handling a click of the link).
        **/
        titleAction?: { label?: string; eventHandler: () => void; };

        /**
        *    The name of the function to call when the title of the info box is clicked. If this property is set, the title of the info box is displayed as a link.
        **/
        titleClickHandler?: string;

        /**
        *    The style of the info box. The default value is standard.
        *    To get the latest Bing Maps design, load the Microsoft.Maps.Themes.BingTheme module before creating your info box. In addition, when the BingTheme module is loaded, typeName can be set to mini to use the mini info box type.
        **/
        typeName?: InfoboxType;

        /**
        *    A boolean indicating whether to show or hide the info box. The default value is true. A value of false indicates that the info box is hidden, although it is still an entity on the map.
        **/
        visible?: boolean;

        /**
        *    The width of the info box. The default value is 256.
        **/
        width?: number;

        /**
        *    The z-index of the info box with respect to other items on the map.
        **/
        zIndex?: number;
        
    }

    /**
    *    Contains options for an entity collection.
    **/
    export interface EntityCollectionOptions {

        /**
        *    A boolean indicating whether to set the options of all entities when an option of an entity within the collection is set. The default value is true. For example, in an entity collection composed of multiple polygons, if this property is set to true setting one polygon’s fill color to red changes the fill color of all of the other polygons in the entity collection to red.
        *    NOTE: This property is only available when the Microsoft.Maps.AdvancedShapes module is loaded.
        **/
        bubble?: boolean;

        /**
        *    A boolean indicating whether the entity collection is visible on the map.
        **/
        visible?: boolean;

        /**
        *    The z-index of the entity collection with respect to other items on the map.
        **/
        zIndex?: number;
    }

    /**
    *    Contains a collection of entities. An Entity can be any one of the following types: @see Infobox, @see Polygon, @see Polyline, @see Pushpin, @see TileLayer, or @see EntityCollection.
    **/
    export class EntityCollection implements Entity {
        
        /**
        *    Initializes a new instance of the EntityCollection class.
        **/
        EntityCollection(options?: EntityCollectionOptions);

        /**
        *    Removes all entities from the collection.
        **/
        clear(): void;

        /**
        *    Returns the entity at the specified index in the collection.
        **/
        get(index: number): Entity;

        /**
        *    Returns the number of entities in the collection.
        **/
        getLength(): number;

        /**
        *    Returns whether the entity collection is visible on the map.
        **/
        getVisible(): boolean;

        /**
        *    Gets the z-index of the entity collection with respect to other items on the map.
        **/
        getZIndex(): number;

        /**
        *    Returns the index of the specified entity in the collection. If the entity is not found in the collection, -1 is returned.
        **/
        indexOf(entity: Entity): number;

        /**
        *    Inserts the specified entity into the collection at the given index.
        **/
        insert(entity: Entity, index: number): void;

        /**
        *    Removes the last entity from the collection and returns it.
        **/
        pop(): Entity;

        /**
        *    Adds the specified entity to the last position in the collection.
        **/
        push(entity: Entity): void;

        /**
        *    Removes the specified entity from the collection and returns it.
        **/
        remove(entity: Entity): Entity;

        /**
        *    Removes the entity at the specified index from the collection and returns it.
        **/
        removeAt(index: number): Entity;

        /**
        *    Sets the options for the entity collection.
        **/
        setOptions(options: EntityCollectionOptions): void;

        /**
        *    Converts the EntityCollection object to a string.
        **/
        toString(): string;

        /**
        *    Occurs when one of the following happens:
        *
        *    - An entity is added to the collection.
        *    - One of the entities of the collection (such as another entity collection) fires the entityadded event.
        *
        *    For example, if collection #1 contains an entity, which is another collection #2, then when an entity is added to collection #2, two entityadded events are fired.
        **/ 
        entityadded: (object: { collection: EntityCollection; entity: Entity; }) => any;

        /**
        *    Occurs when one of the following happens:
        *
        *    - The collection changes.
        *    - An entity of the collection changes.
        *    - One of the entities of the collection (such as another entity collection) fires the entitychanged event.
        *
        *    For example, if collection #1 contains an entity, which is another collection #2, then when an entity of collection #2 changes, two entitychanged events are fired.
        **/
        entitychanged: (object: { collection: EntityCollection; entity: Entity; }) => any;

        /**
        *    Occurs when one of the following happens:
        *
        *    - An entity of the collection is removed.
        *    - One of the entities of the collection (such as another entity collection) fires the entityremoved event.
        *
        *    For example, if collection #1 contains an entity, which is another collection #2, then when an entity of collection #2 is removed, two entityremoved events are fired.
        **/
        entityremoved: (object: { collection: EntityCollection; entity: Entity; }) => any;
    }

    /**
    *    Represents a map.
    **/
    export class Map {
        
        /**
        *    Initializes a new instance of the Map class.
        **/
        constructor (mapElement: HTMLElement, options?: MapOptions);

        /**
        *    Initializes a new instance of the Map class.
        **/
        constructor (mapElement: HTMLElement, options?: ViewOptions);

        /**
        *    The map’s entities. Use this property to add or remove entities from the map.
        **/
        entities: EntityCollection;

        /**
        *  Returns the version of the map control.  
        **/
        static getVersion(): string;

        /**
        *    Removes focus from the map control so that it does not respond to keyboard events.
        **/
        blur(): void;

        /**
        *    Deletes the Map object and releases any associated resources.
        **/
        dispose(): void;

        /**
        *    Applies focus to the map control so that it responds to keyboard events.
        **/
        focus(): void;

        /**
        *    Returns the location rectangle that defines the boundaries of the current map view.
        **/
        getBounds(): LocationRect;

        /**
        *    Returns the location of the center of the current map view.
        **/
        getCenter(): Location;

        /**
        *    Returns to the specified callback an array of strings representing the attributions of the imagery currently displayed on the map.
        **/
        getCopyrights(callback: (attributions: string[]) => void ): string[];

        /**
        *    Gets the session ID. This method calls the callback function with the session ID as the first parameter.
        *   map.getCredentials(function(credentials) 
        *   { 
        *   if(credentials !== null) { \/* Valid session Id. Use it to call REST service *\/ } 
        *   });
        **/
        getCredentials(callback: (credentials: string) => void ): void;

        /**
        *    Returns the heading of the current map view.
        **/
        getHeading(): number;

        /**
        *    Returns the height of the map control.
        **/
        getHeight(): number;

        /**
        *    Returns the string that represents the imagery currently displayed on the map.
        **/
        getImageryId(): string;

        /**
        *    Returns a string that represents the current map type displayed on the map. Valid map types are listed in the @see MapTypeId Enumeration topic. Note that the short name and not the full MapTypeId string is returned. For example, 'a' is returned when the MapTypeId is set to 'Aerial'.
        **/
        getMapTypeId(): string;

        /**
        *    Returns the current scale in meters per pixel of the center of the map.
        **/
        getMetersPerPixel(): number;

        /**
        *    Returns the current map mode.
        **/
        getMode(): MapMode;

        /**
        *    Returns the map’s mode node.
        **/
        getModeLayer(): Node;

        /**
        *    Returns the map options that have been set. Note that if an option is not set, then the default value for that option is assumed and getOptions returns undefined for that option.
        **/
        getOptions(): MapOptions;

        /**
        *    Returns the x coordinate of the top left corner of the map control, relative to the page.
        **/
        getPageX(): number;

        /**
        *    Returns the y coordinate of the top left corner of the map control, relative to the page.
        **/
        getPageY(): number;

        /**
        *    Returns the map’s root node.
        **/
        getRootElement(): Node;

        /**
        *    Returns the location rectangle that defines the boundaries of the view to which the map is navigating.
        **/
        getTargetBounds(): LocationRect;

        /**
        *    Returns the center location of the view to which the map is navigating.
        **/
        getTargetCenter(): Location;

        /**
        *    Returns the heading of the view to which the map is navigating.
        **/
        getTargetHeading(): number;

        /**
        *    Returns the scale in meters per pixel of the center of the view to which the map is navigating.
        **/
        getTargetMetersPerPixel(): number;

        /**
        *    Returns the zoom level of the view to which the map is navigating.
        **/
        getTargetZoom(): number;

        /**
        *    Returns the map’s user node.
        **/
        getUserLayer(): Node;

        /**
        *    Returns the x coordinate of the viewport origin (the center of the map), relative to the page.
        **/
        getViewportX(): number;

        /**
        *    Returns the y coordinate of the viewport origin (the center of the map), relative to the page.
        **/
        getViewportY(): number;

        /**
        *    Returns the width of the map control.
        **/
        getWidth(): number;

        /**
        *    Returns the zoom level of the current map view.
        **/
        getZoom(): number;

        /**
        *    Returns the range of valid zoom levels for the current map view.
        **/
        getZoomRange(): { min: number; max: number; };

        /**
        *    Returns a boolean indicating whether map imagery tiles are currently being downloaded.
        **/
        isDownloadingTiles(): boolean;

        /**
        *    Returns a boolean indicating whether the map is in a regular Mercator nadir mode.
        **/
        isMercator(): boolean;

        /**
        *    Returns true if the current map type allows the heading to change; false if the display heading is fixed.
        **/
        isRotationEnabled(): boolean;

        /**
        *    Sets the current map type. The specified mapTypeId must be a valid map type ID or a registered map type ID. Valid map type IDs are listed in the @see MapTypeId Enumeration topic.
        **/
        setMapType(mapTypeId: string): void;

        /**
        *    Sets @see MapOptions such as the width and height of the map and whether panning of the map is allowed. Note that some map options can only be set in the Map constructor as stated in the map option description.
        **/
        setOptions(options: MapOptions): void;

        /**
        *    Sets the map view based on the specified options.
        **/
        setView(options: ViewOptions): void;

        /**
        *    Converts a specified Location to a Point on the map relative to the specified PixelReference. If reference is not specified, PixelReference.viewport is used. If the map is not able to convert the Location, null is returned.
        *    Alternatively, converts an array of Locations and returns an array of Points if all locations were converted. If any of the conversions fail, null is returned.
        **/
        tryLocationToPixel(location: Location, reference?: PixelReference): Point;

        /**
        *    Converts a specified Location to a Point on the map relative to the specified PixelReference. If reference is not specified, PixelReference.viewport is used. If the map is not able to convert the Location, null is returned.
        *    Alternatively, converts an array of Locations and returns an array of Points if all locations were converted. If any of the conversions fail, null is returned.
        **/
        tryLocationToPixel(location: Location[], reference?: PixelReference): Point[];

        /**
        *    Converts a specified Point to a Location on the map relative to the specified PixelReference. If reference is not specified, PixelReference.viewport is used. If the map is not able to convert the Point, null is returned.
        *    Alternatively, converts an array of Points and returns an array of Locations if all points were converted. If any of the conversions fail, null is returned.
        **/
        tryPixelToLocation(point: Point, reference?: PixelReference): Location;
        
        /**
        *    Converts a specified Point to a Location on the map relative to the specified PixelReference. If reference is not specified, PixelReference.viewport is used. If the map is not able to convert the Point, null is returned.
        *    Alternatively, converts an array of Points and returns an array of Locations if all points were converted. If any of the conversions fail, null is returned.
        **/
        tryPixelToLocation(point: Point[], reference?: PixelReference): Location[];

        /**
        *    Occurs when the mouse is used to click the map.
        **/
        click: (eventArgs: MouseEventArgs) => any;

        /**
        *    Occurs when the copyright of the map changes.
        **/
        copyrightchanged: () => any;

        /**
        *    Occurs when the mouse is used to double click the map.
        **/
        dblclick: (eventArgs: MouseEventArgs) => any;

        /**
        *    Occurs when the underlying imagery used by the map changes. This is different from the maptypechanged event, which occurs when the map type being used is changed.
        **/
        imagerychanged: () => any;

        /**
        *    Occurs when a keyboard key is pressed down.
        **/
        keydown: (eventArgs: KeyEventArgs) => any;

        /**
        *    Occurs when a keyboard key is pressed.
        **/
        keypress: (eventArgs: KeyEventArgs) => any;

        /**
        *    Occurs when a keyboard key that is pressed down is released.
        **/
        keyup: (eventArgs: KeyEventArgs) => any;

        /**
        *    Occurs when the map type changes.
        **/
        maptypechanged: () => any;

        /**
        *    Occurs when the left mouse button is pressed when the mouse cursor is over the map.
        **/
        mousedown: (eventArgs: MouseEventArgs) => any;

        /**
        *    Occurs when the mouse cursor moves over the map.
        **/
        mousemove: (eventArgs: MouseEventArgs) => any;

        /**
        *    Occurs when the mouse cursor moves out of the area covered by the map.
        **/
        mouseout: (eventArgs: MouseEventArgs) => any;

        /**
        *    Occurs when the mouse is over the map.
        **/
        mouseover: (eventArgs: MouseEventArgs) => any;

        /**
        *    Occurs when the left mouse button is lifted up when the mouse cursor is over the map.
        **/
        mouseup: (eventArgs: MouseEventArgs) => any;

        /**
        *    Occurs when the mouse wheel is used when the mouse cursor is over the map.
        **/
        mousewheel: (eventArgs: MouseEventArgs) => any;

        /**
        *    Occurs when one or more map options change.
        **/
        optionschanged: () => any;

        /**
        *    Occurs when the right mouse button is used to click the map.
        **/
        rightclick: (eventArgs: MouseEventArgs) => any;

        /**
        *    Occurs when the view towards which the map is navigating changes.
        **/
        targetviewchanged: () => any;

        /**
        *    Occurs when all the map tiles of a map view have loaded.
        **/
        tiledownloadcomplete: () => any;

        /**
        *    Occurs for every frame of a map view change.
        **/
        viewchange: () => any;

        /**
        *    Occurs when the map view is done changing.
        *    This event occurs when a view is the same for one frame of a map view change. For example, if the mouse is used to drag the map to change the view, but pauses during the drag (without releasing the mouse button), viewchangeend occurs twice. You can use the @see addThrottledHandler method to customize the number of events that occur.
        **/
        viewchangeend: () => any;

        /**
        *    Occurs when the map view starts changing.
        **/
        viewchangestart: () => any;
    }

    /**
     *  Provides event handling functionality for map and entity events.
     **/
    export class Events {
        /**
         *  Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
         *  Microsoft.Maps.Events.addHandler(map, 'viewchangeend’, function(e){ //Handle the event });
         **/
        static addHandler(target: Object, eventName: string, handler: Function): Object;

        /**
         *  Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified in the throttleInterval parameter. The last occurrence of the event is called after the specified throttleInterval.
         **/
        static addThrottledHandler(target: Object, eventName: string, handler: Function, throttleInterval: number): Object;

        /**
         *  Checks if the target has any attached event handler.
         **/
        static hasHandler(target: Object, eventName: string): boolean;

        /**
         *  Invokes an event on the target. This causes all handlers for the specified eventName to be called.
         **/
        static invoke(target: Object, eventName: string, args: Object): void;

        /**
         *  Detaches the specified handler from the event. The handlerId is returned by the addHandler and addThrottledHandler methods.
         **/
        static removeHandler(handlerId: Object) : void;
    }
}