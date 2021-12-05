# Ternary Operator

A ternary operator can reduce a simple if/else statement down to one line.

It uses a question mark and a colon to separate its components.

```
let activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
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
let activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
```