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

This will iterate through every element of `colors`. So the variable of `color` would be set first to `'red'`, then `'green'`, then `'blue'`.


## Example: Numbers

Let's say you want to get the sum of an array of numbers:

```
const numbers = [1,2,3,4];

let total = 0;

for (let number of numbers) {
  total += number;
}
```


## When to Use For Of Loops

You can use for of loops for just about anything you can use `map`, `for each`, or `reduce` for.