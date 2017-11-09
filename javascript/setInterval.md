# Set Interval

setInterval is an example of a "higher order function," meaning you can pass another function into it as an argument. (You can also use it to `return` another function.)

setInterval will call a function at a set interval provided by us. In other words, it's a way to have something keep repeating automatically at an interval of your choosing.

## How To Use It With A Specific Function

First, declare the function that you'll want repeated, just like you'd declare any function:

```
function flashLight() {
	// Your code here.
}
```

Next, call setInterval.

Inside the parentheses, the first argument will be the name of the function you want to call. (Note that you do not put parentheses after the function name. This is because we don't want to call the function right now, we are just passing it into setInterval as an argument, and setInterval will call it only when it's supposed to.)

The second argument will be the interval (in milliseconds).

```
setInterval( functionToBeCalled, interval );
```

In the following example, we'll call the function flashlight once per second:

```
setInterval( flashLight, 1000 );
```

## How To Use It With An Anonymous Function

If you don't want to declare the function you want setInterval to run in advance, you can pass an "anonymous" function into it by simply writing the code directly into setInterval, like so:

```
setInterval( function() {
	console.log( "I am an anonymous function.");
	}, 1000 );
```

In this scenario, you cannot call this anonymous function outside of setInterval. This is simply a way of passing a group of code into setInterval "inline."

Anonymous functions are often used when passing one function into another function.

## How To Stop It

When setInterval is called, it will return a number in the console. Pass this number into `clearInterval();` to stop `setInterval`.

For example, if you were given number 2, you would stop it by running: `clearInterval( 2 );`