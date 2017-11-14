# DOM Events

Clicking, keypresses, hovering, dragging and dropping.

## Event Listeners

Once you've selected an element, you can add an event listener to it, meaning it is waiting for that event to occur (a click, etc.) so it can execute its code. This is done with `addEventListener`:

`element.addEventListener( type, functionToCall );`

The first argument is the type of event we want to listen for, and the second argument is the (callback) function we want to be called when that event happens.

Example:

```
var button = document.querySelector( "button" );

button.addEventListener( "click", function() {
	console.log( "The button has been clicked." );
})
```
