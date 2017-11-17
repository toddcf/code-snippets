# Design Patterns

How your code is structured.

## Module Design Pattern

One of the most common design patterns. You add a bunch of properties into objects.

- No variables floating around outside objects.
- No functions on their own on the window object.

The whole thing is contained inside an object you've created, like this:

```
var game = {}

game.init = function() {
	<!-- Function's code goes here. -->
}
```

You do this for every single function, and then at the end, you just run:

`game.init();`

This pattern helps keep things structured and organized, and prevents namespace collisions.