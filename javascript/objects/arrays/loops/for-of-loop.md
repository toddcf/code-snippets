# For Of Loop

New for ES6.

Used to iterate through arrays of data. They have a tie-in with Generators.


## Example: Colors

```
const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}
```

This example will iterate through every element of `colors`. So the variable of `color` would be set first to `'red'`, then `'green'`, then `'blue'`.  (HOWEVER, it also logs `undefined` at the end.)

NOTE: You can use `const` instead of `let`, too.


## Example: Numbers

Let's say you want to get the sum of an array of numbers:

```
const numbers = [1,2,3,4];

let total = 0;

for (let number of numbers) {
  total += number;
}
```

This will give you an output of `10`.


## When to Use For Of Loops

You can use for of loops for just about anything you can use `map`, `for each`, or `reduce` for.

A disadvantage compared to `forEach` is that For Of will not give you the index, just the raw value.  You also cannot filter with a For Of loop.

One advantage `for of` has over using `split()` and looping over the results is that `for of` can handle emojis and symbols.

For Of loops can also allow you to use `await` inside of them so that you can sequence on thing after another.  (Used for sequencing promises.)