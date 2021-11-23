# Event Listeners

Event listeners "listen" for clicks, key presses, mouse movement, and other activity from the user. You can then tell the browser what you want it to do when those events occur.


## Syntax

```
target.addEventListener(type, listener);
target.addEventListener(type, listener, options);
target.addEventListener(type, listener, useCapture);
```

`type` and `listener` are requred. `options` and `useCapture` are optional.

For more detail, see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener. You can listen for events going down (capture) or up (options) the DOM.


## Click

```
const btn = document.getElementById('btn');

const doThing = () => { console.log( `Thing` ); };

btn.addEventListener( 'click', doThing );
```

This will print `Thing` to the console.


### addEventListener vs. onclick

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

One other difference is compatibility. `onclick` is older and therefore compatible with older browsers. But this is less and less of a problem as time goes by. `addEventListener` is safe to use.


### Attaching the Same Event Listener to Multiple Elements

Use `forEach` to loop over all the elements and attach the listener to each applicable one.

```
const btns = document.querySelectorAll('button');
btns.forEach(function(btn) {
  btn.addEventListener('click', doThing);
});
```

NOTE: This code can be further reduced using arrow functions, etc.  *The only drawback to using an arrow function is that you will not be able to unbind (remove) it later if you want to.*

```
const btns = document.querySelectorAll('button');
btns.forEach( (btn) => {btn.addEventListener('click', doThing)});
```

Even better, since your function was declared separately, you can simply reference it in the `forEach` loop, and it will know what to do:

```
const btns = document.querySelectorAll('button');
btns.forEach(doThing);
```


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

For additional information on the Event object, see https://github.com/toddcf/code-snippets/blob/master/javascript/objects/event-object.md.


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


### Preventing Defaults

Use `event.preventDefault();` to prevent normal behavior.  For example:

```
const wes = document.querySelector('wes'); // Let's say this selects a link to another website.

wes.addEventListener('click', function(event) {
  event.preventDefault();
});
```

Normally, clicking the link would take you to the other website.  But because the event listener calls the `preventDefault()` method on the event, nothing happens.


## Removing Event Listeners

Suppose you want something to be clickable only once. You can attach an event listener to it, but set it to remove itself after it has been clicked:

```
const respondOnlyOnce = () => {
  console.log(`Response`);
  btn.removeEventListner( 'click', respondOnlyOnce );
};

btn.addEventListener( 'click', respondOnlyOnce );
```

NOTE: `removeEventListener` cannot be used on an anonymous function -- it needs to be a named function so that JavaScript knows which function to remove.
QUESTION: It was mentioned earlier that if an arrow function was used to attach the event listener, then the event listener could not be unbinded (removed) later.  How does this coincide?


## Types of Events to Listen For

### "Submit" Event

To listen for the user clicking "Submit" on a form:

```
const signupForm = document.querySelector('[name="signup"]');
signupForm.addEventListener('submit', function(event) {

});
```


### List of Others

- `'keyup'`
- `'keydown'`
- `'focus'`
- `'blur'`

. . . and many more.