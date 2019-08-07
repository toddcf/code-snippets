# Reduce

Use "reduce" to loop through an array and accumulate all the values into a single value.

Useful when calculating averages, etc.


## Example: Add all the values of an array

```
var numbers = [10, 20, 30];
var sum = 0;
```

### Old for loop Version

```
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
```

This will return 60.


### BETTER reduce Version

Note two things:

1. We pass in two arguments.
2. After this fuction, we pass in an initial value of 0.

```
numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);
```

This will also return 60.


### Variation with Arrow Function

Put a callback function inside the reduce method:
We also have access to the previous value. So to add them all up, just add the previous value with the current value.
"Index" is the position at which we want to start in the array, which in this case is 0.

```
const sampleArray = [ 3, 5, 6 ];

function calcAvg( arr ) {  
  const sum = arr.reduce( ( prev, cur, index ) => prev + cur, 0 );
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

Note that reduce *will* mutate the original array. In this case it's fine, but don't use this in cases where it isn't going to be fine to do this.