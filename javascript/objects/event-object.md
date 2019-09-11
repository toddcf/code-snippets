# Event Object

The event object can tell you:

- Where someone clicked on the page.
- Which key was pressed.
- Where they moved their mouse.


## Clicks

Try running this code:

```
window.onclick = (e) => { console.log(e); };
```

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


## Uses

- Place a marker on a map where a user clicks.
- Web analytics: Record where users click most.
- A game where user input includes clicking.