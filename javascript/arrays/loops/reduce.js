// REDUCE

// Use "reduce" to loop through an array and accumulate all the values into a single value.
// Useful when calculating averages, etc.

const sampleArray = [ 3, 5, 6 ];

function calcAvg( arr ) {
	// Use "reduce" to loop through an array and accumulate all the values into a single value.
	// Put a callback function inside the reduce method:
	// We also have access to the previous value. So to add them all up, just add the previous value with the current value.
	// "Index" is the position at which we want to start in the array, which in this case is 0.
	const sum = arr.reduce( ( prev, cur, index ) => prev + cur, 0 );

};

calcAvg( sampleArray );

/*
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
*/