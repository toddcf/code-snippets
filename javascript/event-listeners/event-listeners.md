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