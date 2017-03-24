// New for ES6.
// A convenient way to expand elements of an array, like arguments and function calls.

// Similar to the "call" method, but accepts the arguments as an array.

// Example:
// A function adds four ages together:

function addFourAges( a, b, c, d ) {
	return a + b + c+ d;
};

var sum1 = addFourAges( 18, 30, 12, 21 );
console.log( sum1 );

// What if the ages were in an array?

var ages = [ 18, 30, 12, 21 ];

// The spread operator is the ellipses:
const max3 = addFourAges( ... ages );
// It will expand the ages array into its components.