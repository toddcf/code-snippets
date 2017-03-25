// New for ES6.
// A convenient way to expand elements of an array, like arguments and function calls.
// More concise than the "apply" operator of ES5.
// Is the opposite of "rest parameters." Spread operator is used in the function *call*; rest parameters are used in the function *declaration* to accept an arbitrary number of parameters.

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
const sum3 = addFourAges( ... ages );
// It will expand the ages array into its components.
console.log( sum3 );

// You can combine both of those arrays using the spread operator on each one:
const familySmith = [ "John", "Jane", "Mark" ];
const familyMiller = [ "Mary", "Bob", "Ann" ];
let bigFamily = [ ... familySmith, ... familyMiller ];
console.log( bigFamily );
// You can even add a new element in the middle:
bigFamily = [ ... familySmith, "Lily", ... familyMiller ];
console.log( bigFamily );


// To use the spread operator on a nodelist:

// Example: Change all boxes to purple using querySelectorAll, which returns a nodelist:

const h = document.querySelector( "h1" );
const boxes = document.querySelectorAll( ".box" );

// Now use the spread operator instead of individually changing the text color of the h1 element and then looping through all the elements with a class of box:
const all = [ h, ... boxes ];
// Now we've stored h1 and all the boxes (expanded) in the "all" variable.

// Convert nodelist to array:
Array.from( all ).forEach( cur => cur.style.color = "purple" );



