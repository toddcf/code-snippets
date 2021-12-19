# ForEach

JavaScript has a built-in method for iterating over a loop, called `forEach();`. It is more concise than writing out an entire "for loop," and less prone to typos or other mistakes. It takes a function (typically an anonymous function) as an argument, like this:

`arr.forEach( function() {});`

That function is then called for every single element in the array. It is therefore referred to as an "iterator function."


## Example with Anonymous Function:

```
var colors = ['red', 'orange', 'yellow', 'green'];

colors.forEach( function(color) {
	console.log(color);
});
```

Note that `color` is a placeholder -- call it whatever you want, but the standard is to use the singular form of the name of the array. The result will be that each element is passed into the anonymous function one at a time. First, `color` will be `'red'`, then `'orange'`, then `'yellow'`, etc. So each of these strings will be printed to the console one after another.


## Examples with Non-Anonymous Function:

### Example 1

First, write the function you are going to pass into `forEach();`:

```
function printColor(color) {
	console.log(color);
}
```

Next, write your `forEach();` as usual, except pass in your `printColor` function instead of an anonymous function:

`colors.forEach(printColor);`

IMPORTANT: You DO NOT put parentheses after `printColor`. Any time JavaScript sees parentheses following the name of a function, it executes that function immediately. In this case, that would trigger our function before we want it to run.


### Example 2

In this example, we'll add all the numbers in the array and print their sum.

```
var numbers = [1, 2, 3, 4, 5];
var sum = 0;

function adder(number) {
  sum += number;
}

numbers.forEach(adder);

sum;
```

So, first we created our array. Then we created a variable for sum and set it to zero.

Then we wrote our function.

Then we used `forEach()` to call that function in each iteration over the array.

At the end, we printed the sum.


## forEach() Does Not RETURN a Value

Unlike some of the other array-looping methods (such as `map`, `filter`, and `reduce`, `forEach()` does not `return` a value.  It will perform the tasks you assign it, but if you are saving it to a variable, that variable will not return a value.

For example, if you wrote:

```
const varName = arr.forEach( /* Code Here */);
```

. . . then running `varName;` would return `undefined`.


## Getting the Index Number of an Element Using the ForEach Loop

You can pass a second argument into the function inside the `forEach()` loop as follows, which will represent the index number of each element:

```
todos.forEach(function(todo, i) {
	console.log(todo);
});
```


## How It Works

`forEach()` takes a callback function, and that callback function is expected to have at least 1 -- but up to 3 -- arguments.

The arguments are in a specific order:

1. The first argument represents each element in the array (per loop iteration) that `forEach()` was called on.
2. The second represents the index of said element.
3. The third represents the array that `forEach()` was called on (which will be the same for every iteration of the loop).  This allows you to reference the items in the original array if you need to.


You have a couple options when calling `forEach()` on an array:

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

Notice how in the second example we don't invoke `logNums` when passing it into `forEach()`? We simply pass in the function name. We don't need to invoke the `logNums` function, `forEach()` does that for us. In fact, it invokes the function multiple times, once for every element inside of the array.


## When Would You Use forEach()?

Instead of a for loop. For example:

To delete all the checked items in your email inbox. (Checking the box next to an email could add that email to an array. Then, clicking "Delete all selected" would iterate over that array and delete each item.)