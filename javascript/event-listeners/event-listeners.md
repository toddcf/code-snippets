# Event Listeners

Event listeners "listen" for clicks, key presses, mouse movement, and other activity from the user. You can then tell the browser what you want it to do when those events occur.



## Click

```
const btn = document.getElementById('btn');

const doThing = () => { console.log( `Thing` ); };

btn.addEventListener( 'click', doThing );
```

This will print `Thing` to the console.

This is similar to using `element.onclick`, except that it allows you to assign more than one reaction to the event if you want.

For example...

```
const btn = document.getElementById('btn');

const doThing = () => { console.log( `Thing` ); };

const doOtherThing = () => { console.log( `Other Thing` ); };

btn.onclick = doThing;
btn.onclick = doOtherThing;
```

... would only run `doOtherThing` and print `Other Thing` to the console. (The most recent one overwrites any that came before it.)

BUT, the following code would print both `Thing` and `Other Thing` to the console:

```
btn.addEventListener( 'click', doThing );
btn.addEventListener( 'click', doOtherThing );
```

In other words, `addEventListener` does not overwrite other `addEventListener`s.


## Hovering

```
btn.addEventListener( 'mouseover', doThing);
```


## Using with Event Objects

You can also pass an event into the function that is called when the event listener is triggered:

```
const doThing = (e) => { console.log(e); };
```

This will print the event object to the console.


## Window Event Listener

You can add an event listener to the entire window:

```
const showMouseLocation = (e) => { console.log( `x = ${e.clientX}, y = ${e.clientY}` ); };

window.addEventListener( 'mousemove', showMouseLocation );
```


## Using with Anonymous Functions

```
btn.addEventListener( 'click', function() {
  console.log(`Anonymous function triggered.`);
});
```


## Capturing and Bubbling

If you want to register a click on one element but NOT its parent container, look up capturing and bubbling:

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener


## Removing Event Listeners

Suppose you want something to be clickable only once. You can attach an event listener to it, but set it to remove itself after it has been clicked:

```
const respondOnlyOnce = () => {
  console.log(`Response`);
  btn.removeEventListner( 'click', respondOnlyOnce );
};

btn.addEventListener( 'click', respondOnlyOnce );
```