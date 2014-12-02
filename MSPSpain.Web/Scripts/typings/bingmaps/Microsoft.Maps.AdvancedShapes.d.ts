/// <reference path="Microsoft.Maps.All.d.ts" />
/**
*   Before you can access the types found in the Microsoft.Maps.AdvancedShapes API, you must first load this module using the loadModule method.
**/
declare module Microsoft.Maps.AdvancedShapes {

	/**
	*   The AdvancedShapes EntityCollection class differs from the base EntityCollection class in two ways:
	*
	*   1)  When an entity of the collection fires an event, the event will fire for all entities of the collection.
	*       For example, if the mouseover event if fired for a pushpin in an entity collection, then the entity collection’s mouseover event is fired.
	*
	*   2)  Setting the options of the entity collection sets the options of all its entities unless the entity collection option bubble is set to false.
	*       For example, by default, in an entity collection composed of multiple polygons, setting one polygon’s fill color to red changes the fill
	*       color of all of the other polygons in the entity collection to red.
	**/
	export class EntityCollection implements Entity {
		/**
		*   Initializes a new instance of the EntityCollection class.
		**/
		constructor(options?: EntityCollectionOptions);

		/**
		*   Removes all entities from the collection.
		**/
		clear(): void;

		/**
		*   Returns the entity at the specified index in the collection.
		**/
		get(index: number): Entity;

		/**
		*   Returns the number of entities in the collection.
		**/
		getLength(): number;

		/**
		*   Returns whether the entity collection is visible on the map.
		**/
		getVisible(): boolean;

		/**
		*   Gets the z-index of the entity collection with respect to other items on the map.
		**/
		getZIndex(): number;

		/**
		*   Returns the index of the specified entity in the collection. If the entity is not found in the collection, -1 is returned.
		**/
		indexOf(entity: Entity): number;

		/**
		*   Inserts the specified entity into the collection at the given index.
		**/
		insert(entity: Entity, index: number): void;

		/**
		*   Removes the last entity from the collection and returns it.
		**/
		pop(): Entity;

		/**
		*   Adds the specified entity to the last position in the collection.
		**/
		push(entity: Entity): void;

		/**
		*   Removes the specified entity from the collection and returns it.
		**/
		remove(entity: Entity): Entity;

		/**
		*   Removes the entity at the specified index from the collection and returns it.
		**/
		removeAt(index: number): Entity;

		/**
		*   Sets the options for the entity collection.
		**/
		setOptions(options: EntityCollectionOptions): void;

		/**
		*   Converts the EntityCollection object to a string.
		**/
		toString(): string;

		/**
		*   Occurs when one of the following happens:
		*       - An entity is added to the collection.
		*       - One of the entities of the collection (such as another entity collection) fires the entityadded event.
		*
		*   For example, if collection #1 contains an entity, which is another collection #2, then when an entity is added to collection #2, two entityadded events are fired.
		**/
		entityAdded: (object: { collection: EntityCollection; entity: Entity; }) => any;
		
		/**
		*Occurs when one of the following happens:
		*   - The collection changes.
		*   - An entity of the collection changes.
		*   - One of the entities of the collection (such as another entity collection) fires the entitychanged event.
		*
		*   For example, if collection #1 contains an entity, which is another collection #2, then when an entity of collection #2 changes, two entitychanged events are fired.
		**/
		entityChanged: (object: { collection: EntityCollection; entity: Entity; }) => any;
		
		/**
		*   Occurs when one of the following happens:
		*       - An entity of the collection is removed.
		*       - One of the entities of the collection (such as another entity collection) fires the entityremoved event.
		*
		*   For example, if collection #1 contains an entity, which is another collection #2, then when an entity of collection #2 is removed, two entityremoved events are fired.
		**/
		entityRemoved: (object: { collection: EntityCollection; entity: Entity; }) => any;
	}

	/**
	*	Represents a complex polygon on the map. When the Microsoft.Maps.AdvancedShapes module is loaded, this class replaces the basic Polygon Class.
	**/
	export class Polygon implements Entity {
		
		/**
		*	Initializes a new instance of a complex Polygon. The locationsArrays array represents the polygon rings, where each element of the array is an array of Location objects that defines a ring. This constructor can be used to create a normal polygon, a multi-polygon, a polygon with holes, or a combination of polygons.
		**/
		constructor (locationsArrays: Location[][], options?: PolygonOptions);

		/**
		*	Returns the color of the inside of the polygon.
		**/
		getFillColor(): Color;

		/**
		*	Returns the color of the inside of the polygon.
		**/
		getLocations(): Location[];
		
		/**
		*	Returns an array of location arrays, where each location array defines a ring of the polygon.
		**/
        getRings(): Location[][];

		/**
		*	Returns the color of the outline of the polygon.
		**/
		getStrokeColor(): Color;

		/**
		*	Returns the string that represents the stroke/gap sequence used to draw the outline of the polygon.
		**/
		getStrokeDashArray(): string;
		
		/**
		*	Returns the thickness of the outline of the polygon.
		**/
		getStrokeThickness(): number;
		
		/**
		*	Returns whether the polygon is visible. A value of false indicates that the polygon is hidden, although it is still an entity on the map.
		**/
		getVisible(): boolean;
		
		/**
		*	Sets the locations that define a basic polygon.
		**/
		setLocations(locations: Location[]): void;
		
		/**
		*	Sets options for the polygon.
		**/
		setOptions(options: PolylineOptions): void;
		
		/**
		*	Sets an array of location arrays, where each location array defines a ring of the polygon.
		**/		
        setRings(locationsArrays: Location[][]): void;

		/**
		*	Converts the Polygon object to a string.
		**/
		toString(): string;

		/**
		*	Occurs when the mouse is used to click the polygon.
		**/
		click: (eventArgs: MouseEventArgs) => any;

		/**
		*	Occurs when the mouse is used to double click the polygon.
		**/
		dblclick: (eventArgs: MouseEventArgs) => any;
		
		/**
		*	Occurs when the location of the polygon or any of the polygon’s options change.
		**/
		entitychanged: (entity: Entity) => any;

		/**
		*	Occurs when the left mouse button is pressed when the mouse is over the polygon.
		**/
		mousedown: (eventArgs: MouseEventArgs) => any;

		/**
		*	Occurs when the mouse cursor moves out of the area covered by the polygon.
		**/
		mouseout: (eventArgs: MouseEventArgs) => any;
		
		/**
		*	Occurs when the mouse is over the polygon.
		**/
		mouseover: (eventArgs: MouseEventArgs) => any;

		/**
		*	Occurs when the left mouse button is lifted up when the mouse is over the polygon.
		**/
		mouseup: (eventArgs: MouseEventArgs) => any;
		
		/**
		*	Occurs when the right mouse button is used to click the polygon.
		**/
		rightclick: (eventArgs: MouseEventArgs) => any;
	}
}