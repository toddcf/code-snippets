# JavaScript Methods

Functions can be added to objects as properties, at which point they are called methods.

A method is a function that is a property inside of an object.

## Example

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

Speaking of which, consider `console.log();`. `console` is actually an object, and `log` is a method inside that object.

## Purpose

Why would we ever want to store a function inside an object as opposed to making it global?

It helps you keep your code organized by grouping things logically together. For example, you can have the same function inside two disparate objects so that it will perform the appropriate task depending upon which object it's called on. Like this:

```
var cats = {
	speak: function() {
		return "Meow";
	}
}

var dogs = {
	speak: function() {
		return "Woof";
	}
}
```

Now, when you call `speak` on each of these objects, you get two different results:

```
cats.speak(); // Meow
dogs.speak(); // Woof
```

## Alternate Way

Another way you can achieve the same thing is to create an empty object, and THEN create the methods for it. Like this:

```
var cats = {};
var dogs = {};

cats.speak = function() {
	return "Meow";
}

dogs.speak = function() {
	return "Woof";
}
```

And now, you can call each one the same way as always:

```
cats.speak(); // Meow
dogs.speak(); // Woof
```
