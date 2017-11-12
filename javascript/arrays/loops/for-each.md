# ForEach

JavaScript has a built-in method for iterating over a loop, called `forEach();`. It is more concise than writing out an entire for loop. It takes a function (typically an anonymous function) as an argument, like this:

`arr.forEach( someFunction );`

That function is then called for every single element in the array.

## Example with Anonymous Function:

```
var colors = [ "red", "orange", "yellow", "green" ];

colors.forEach( function( color ) {
	console.log( color );
});
```

Note that `color` is a placeholder -- call it whatever you want. The result will be that each element is passed into the anonymous function one at a time. First, `color` will be `"red"`, then `"orange"`, then `"yellow"`, etc. So each of these strings will be printed to the console one after another.

## Example with Non-Anonymous Function:

First, write the function you are going to pass into `forEach();`:

```
function printColor( color ) {
	console.log( color );
}
```

Okay, now write your `forEach();` as usual, except pass in your `printColor` function instead of an anonymous function:

`colors.forEach( printColor );`

IMPORTANT: You DO NOT put parentheses after `printColor`. This is because any time JavaScript sees parentheses following the name of a function, it executes that function right then and there. In this case, that would trigger our function before we want it to run.

## Getting the Index Number of an Element Using the ForEach Loop

You can pass a second argument into the function inside the forEach loop as follows, which will represent the index number of each element:

```
todos.forEach( function( todo, i ) {
	console.log( todo );
});
```

## How It Works

`forEach` takes a callback function, and that callback function is expected to have at least 1, but up to 3 arguments.

The arguments are in a specific order:

1. The first one represents each element in the array (per loop iteration) that `forEach` was called on.
2. The second represents the index of said element.
3. The third represents the array that `forEach` was called on (it will be the same for every iteration of the loop).

You have a couple options when calling `forEach` on an array:

You can pass in an anonymous function:

```
[1,2,3].forEach(function(el, i, arr) {
  console.log(el, i, arr);
});
```

Or you can pass in a pre-written, named function.

```
function logNums(el, i, arr) {
  console.log(el, i, arr);
}
 
[1,2,3].forEach(logNums);
```

Notice how in the second example we don't invoke `logNums` when passing it into `forEach`? We simply pass in the function name. We don't need to invoke the `logNums` function, `forEach` does that for us. In fact, it invokes the function multiple times, once for every element inside of the array.