# JavaScript Methods

Functions can be added to objects as properties, at which point they are called methods.

A method is a function that is a property inside of an object.

In the following example, `add` is a method:

```
var obj = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends: [ "Bob", "Tina" ],
	add: function( x, y ) {
		return x + y;
	}
}
```

Then, to call `add`, you must attach it to the object it's contained within, like this:

`obj.add( 10, 5 );`

You won't be able to call it on its own, without the object it's inside of.