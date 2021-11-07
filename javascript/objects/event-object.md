# Event Object

The event object contains lots of information about what has just happened on the page, plus contains methods you can call.

The event object can tell you:

- Where someone clicked on the page.
- Which key was pressed.
- Where they moved their mouse.


## Parameters

The function that gets triggered by the event listener can take in the event object as its first parameter. (It must always be the first parameter.) Like this:

```
function handleBuyButtonClick(event) {
  // code goes here.
}
```

So whatever event triggers this function -- a click, a keyup, etc. -- will get passed into this function as an object, which you can then use inside the function to gather information, call methods contained in the event object, etc.

BEST PRACTICE: Even better, since it doesn't actually matter what you use as your parameter, you can shorten `event` to just `e`, like this:

```
function handleBuyButtonClick(e) {
  // code goes here.
}
```


## Clicks

Try running this code:

```
window.onclick = (e) => { console.log(e); };
```

*NOTE: `onclick` is an older, less useful way of `addEventListener` -- this is just a quick demo.*

Now open the console and click anywhere on the page.

The console will display a set of data regarding this click event.

You can now access the properties of this click event, just like any other object:

```
window.onclick = (e) => {
  console.log( `x = ${e.pageX}` );
  console.log( `y = ${e.pageY}` );
};
```


## Key Presses

```
window.onkeydown = (e) => {
  console.log(e);
  console.log(e.keyCode);
};
```

Now press any key on the keyboard and check the console. You will see the keycode for the key you pressed.

NOTE: There have been a lot of changes to how key presses are handled, so check compatibility when you're using this in a project.


## Uses

- Place a marker on a map where a user clicks.
- Web analytics: Record where users click most.
- A game where user input includes clicking.


## event.isTrusted

`event.isTrusted` is a boolean.

`true` means, for example, that a click actually came from a user clicking the element, not a faked click.


## event.target and event.currentTarget

`event.target` is the element that the event was clicked on, etc.

`event.currentTarget` is valuable when elements are nested inside each other. For example, a `<button>` that contains a `<strong>` tag inside of it. You could click either one. Let's say the user happens to click the child element (the `<strong>` tag).  `target` would be the element that was actually clicked -- the `<strong>` tag -- and `currentTarget` is the element that fired the event listener.  *So most of the time you want to use `event.currentTarget`.*

This has to do with "propagation," also known as "bubbling up."  To prevent this, you can use `event.stopPropagation()`.