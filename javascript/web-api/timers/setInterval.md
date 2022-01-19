# Set Interval

setInterval is an example of a "higher order function," meaning you can pass another function into it as an argument. (You can also use it to `return` another function.)

setInterval will call a function at a set interval provided by us. In other words, it's a way to have something keep repeating automatically at an interval of your choosing.

`setInterval()` runs some code repeatedly at timed intervals. Its unit of measurement is milliseconds, so `5000` = 5 seconds.


## General Format

Do not run this syntax, but here is the general structure:

```
setInterval( functionToRun, intervalInMilliseconds );
```


## Example

The following code will print "Hi!" to the console every 2 seconds:

```
setInterval( function() { console.log('Hi!'); }, 2000 );
```


## Stopping a setInterval

See [clearInterval](https://github.com/toddcf/code-snippets/blob/master/javascript/timers/clearInterval.md).


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

For example, if you were given number 2, you would stop it by running: `clearInterval( 2 );`.

## Using It For Animations

First, select the element you want to manipulate. In this case, the body of your HTML page:

```
const body = document.querySelector( "body" );
let isBlack = false;
```

Now manipulate it:

```
setInterval( function() {
	if ( isBlack ) {
		body.style.background = "#fff";
	}
	else {
		body.style.background = "#000";
	}
	isBlue = !isBlack;
}, 1000);
```

The code above will accomplish the following:

1. The first time it runs, `isBlack` is `false`, so it will change the `background` color to `black`.
2. It then changes the `isBlack` variable to the opposite of whatever it currently is. Which in this case, means it will change it from `false` to `true`.
3. Note the `1000` after the comma at the very end. This is the interval in milliseconds. So every 1 second, this function will be triggered again.
4. The next time it is triggered, `isBlack` will be `true`, so the `background` will now be changed to `white`! And `isBlack` will be changed back to `false`.