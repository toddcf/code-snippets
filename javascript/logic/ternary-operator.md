# Ternary Operator

A ternary operator can reduce a simple if/else statement down to one line.

It uses a question mark and a colon to separate its components.

```
let activePlayer = 0;
activePlayer = (activePlayer === 0) ? activePlayer = 1 : activePlayer = 0;
```

In plain English, the first component would say "IF this is true."  The question mark would say, "THEN," followed by the second component of the ternary.  The colon would say "OTHERWISE," followed by the third component.  Think of it like this:

`IF` activePlayer === 0 `? (THEN)` activePlayer = 1 `: (OTHERWISE)` activePlayer = 0;


## Example

This if/else statement . . .

```
let activePlayer = 0;
if (activePlayer === 0) {
  activePlayer = 1;
} else {
  activePlayer = 0;
}
```

. . . becomes:

```
let activePlayer = 0;
activePlayer = (activePlayer === 0) ? activePlayer = 1 : activePlayer = 0;
```


## && Shortcut (Abuse)

A ternary operator *does* require the `: (OTHERWISE)` component.  If you are really only going to perform an action if something is truthy, and if it is falsy you are going to do nothing, you still have to put something in the `: (OTHERWISE)` component.

The following would *not* run:

```
let isAdmin = true;
function showAdminBar() {
  // code here.
}
isAdmin ? showAdminBar();
```

You would have to extend the last line of code out to include a `:` condition:

```
isAdmin ? showAdminBar() : null;
```

HOWEVER, you could instead use the `&&` shortcut:

```
isAdmin && showAdminBar();
```

This simply checks the first condition (is `isAdmin` true?), and if it is met, continues on to run the `showAdminBar()` function.  If `isAdmin` is false, it does not continue, and the function is not invoked.