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

## They Don't Have to Be Anonymous Functions

You can also pass in a function you have declared elsewhere:

```
var button = document.querySelector( "button" );
var paragraph = document.querySelector( "p" );

function changeText() {
	paragraph.changeText = "Someone clicked the button.";
}

button.addEventListener( "click", changeText );
```

This will accomplish the exact same thing. Most of the time, you'll want to use an anonymous function. The only time you wouldn't want to is if you're going to need to also use that same code somewhere else. (Maybe for two event listeners: The user either presses "Enter" or clicks the button, and you want the same thing to happen as a result.)

## Multiple Event Listeners

You can have more than one event listener on a given element. They will run in order.

## Adding Event Listeners with For Loops

Let's say you want to add an event listener to every `<li>`. You can do so with a for loop. First, select the elements and store them in a variable:

`var lis = document.querySelectorAll( "li" );`

Now, write a for loop that loops through all the `<li>`s you just grabbed and adds an event listener to each individual one. (Note that this is a great opportunity to use the `this` keyword, which will refer to whatever element goes right before the `.addEventListener`.)

```
for ( var i = 0; i < lis.length; i++ ) {
	lis[ i ].addEventListener( "click", function() {
		this.style.color = "purple";
	});
}
```

Now when you click an `<li>`, its text will turn purple.