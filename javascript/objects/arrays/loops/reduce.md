# Reduce

Use "reduce" to loop through an array and "reduce" all the values into a single value.

Useful when calculating averages, etc.

Reduce *does not* mutate the original array.


## Example: Add all the values of an array

```
var numbers = [10, 20, 30];
var sum = 0;
```

NOTE: Using `var sum = 0;` is called a "side effect" because it involves updating a variable outside the function, and is not considered a best practice.


### Old for loop Version

```
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
```

This will return 60.


### BETTER reduce Version

Note two things:

1. We pass in two arguments: the first is called the "accumulator," the second is the "current value."  (The accumulator is the accumulated value from the most recent iteration of the loop.  In this example, it is an anonymous function that will be used to return the accumulated value.)
2. After this fuction, we pass in an initial "current" value of 0.

```
numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);
```

This will also return 60.


### Variation with Arrow Function

Put a callback function inside the reduce method:
- We also have access to the previous value. So to add them all up, just add the previous value with the current value.
- "Index" is the position at which we want to start in the array, which in this case is 0.

```
const sampleArray = [ 3, 5, 6 ];

function calcAvg( arr ) {  
  return arr.reduce( ( prev, cur, index ) => prev + cur, 0 ) / sampleArray.length;
};

calcAvg( sampleArray );
```

1. So in this example, we start at index 0.
  a. The previous value is 0 because it is nonexistent.
  b. The current value is 3.
  c. So 0 + 3 = 3.
2. Now we move to index 1:
  a. The previous value is 3.
  b. The current value is 5.
  c. So 3 + 5 = 8.
3. Now we move to index 2:
  a. The previous value is 8.
  b. The current value is 6.
  c. So 8 + 6 = 14.
4. That's the end of the array, so we are done, and the values have been "reduced" into one value, which is 14.
5. Then, to return the average, we divide the reduce result by the length of the array.


## Example: Passing a Callback Function into Reduce

Same general idea as passing an anonymous function in as the accumulator, except you abstract it out to a named function, then pass that into the reduce method as its accumulator argument.

```
// The original array to be used for calculations:
const orderTotals = [100, 200, 300, 400, 500];

// The function that will be passed into Reduce as a callback:
function tallyNumbers(tally, currentOrderTotal) {
  return tally + currentOrderTotal
}

// Run Reduce:
const allOrders = orderTotals.reduce(tallyNumbers, 0);
```


## Example: Primary Colors

Let's say you want to get all the values from an array:

```
var primaryColors = [
  {color: 'red' },
  {color: 'yellow' },
  {color: 'blue' }
];
```

In this example, you want to return ['red', 'yellow', 'blue']. (Yes, you could use map. But for this example we'll use reduce.)

This time, instead of starting with a default number of 0, we'll start with a default of an empty array, since we want our result to be an array.

The arguments that are passed in are `previous` and `primaryColor`. The first argument can be a little tricky to name. It represents the default that is passed in every single time -- in this example, the empty array. We're going to call it `previous` because it is the previous value when we last went through this loop.

```
primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color);
  return previous;
}, []);
```

This will return just the strings: `['red', 'yellow', 'blue']`


## Example: Balance Parens

A whiteboard challenge might be to write a function that determines whether or not the parentheses in these string are balanced:

```
const parens1 = '()()()()'; // Should return true
const parens2 = '(((())))'; // Should return true
const parens3 = '())))'; // Should return false
const parens4 = ')('; // Should return false
const parens5 = ')()('; // Should return false
```

We'll write a function to take in the string as an argument, but we're going to have to convert this string to an array (using `split`) before we can use the reduce helper on it.

`char` is going to represent a single character -- such as a single parentheses.

0 is passed in after the function. This is because we are going to create a counter: every time we see an opening parentheses, we will increment by one. Every time we see a closing parentheses, we will decrease by one. That way, at the end, if we have a counter anything other than 0, our parentheses must be unbalanced.

We still return `previous` outside of the if statements so that the function still operates even if someone passes characters besides parentheses into it.

We also put a `!` before the whole thing, which will cause JavaScript to convert it all into a truthy or falsy result.

And in order to prevent a scenario such as `)(` from returning `true`, we add this at the beginning of the function:

```
if (previous < 0 ) {
  return previous;
}
```

This way, if the first parentheses it hits is a closing parentheses, it does NOT decrement the counter, it leaves it at zero.

```
function balancedParens(string) {
  return !string.split('').reduce(function(previous, char) {
    if (previous < 0 ) {
      return previous;
    }
    if (char === '(') {
      return ++previous;
    }
    if (char === ')') {
      return --previous;
    }
    return previous;
  }, 0);
}

balancedParens(parens1);
balancedParens(parens2);
balancedParens(parens3);
balancedParens(parens4);
balancedParens(parens5);
```


## Example: Inventory

Let's say you have an inventory of various types of clothing:

```
const inventory = [
  {type: 'shirt', price: 45},
  {type: 'pants', price: 55},
  {type: 'socks', price: 13},
  {type: 'underwear', price: 30},
  {type: 'shirt', price: 30},
  {type: 'pants', price: 70},
  {type: 'socks', price: 10},
  {type: 'underwear', price: 15},
];
```

And let's say you want to know the total value of all of them combined . . . and you want to count all the instances of each type of clothing.  You could use `reduce` to return objects containing this information.

```
function inventoryReducer(totals, item) {
  console.log(`Looping over ${item.type}`);
  totals[item.type] = totals[item.type] + 1 || 1; // If this didn't already exist, the fallback creates it and sets it to 1.
  return totals;
}
const inventoryCounts = inventory.reduce(inventoryReducer, {});
console.log(`Inventory Counts: `, inventoryCounts);

const totalValue = inventory.reduce((acc, item) => acc + item.price, 0);
console.log(`Total Inventory Value: ${totalValue}`);
```

For verification purposes, each item type should have a count of 2, and the total inventory value should be 268.