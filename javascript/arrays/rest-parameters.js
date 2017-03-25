// New for ES6.

// Is the opposite of "spread operators." Spread operator is used in the function *call*; rest parameters are used in the function *declaration* to accept an arbitrary number of parameters.

// These allow us to pass an arbitrary number of arguments into a function.
// These look like spread operators but are the exact opposite.
// Whereas the spread operator expands an array into its components, rest parameters receive a couple single values and transforms them into an array when we call a function with multiple parameters.


// Example:
// We have a function that receives an arbitrary number of years, and then prints to the console whether each person is over 18 years of age.
// Note that "arguments" is like the "this" keyword.
// Although "arguments" looks a lot like an array, it is actually an object.
// Arrays have the array function constructor as their prototype, but "arguments" has the object prototype.
// So "arguments" is an array-like structure, but is not actually an array.
// If you want to use it as an array (to loop through it, for example), you must first convert it into an array.

// ES5:
function isFullAge5() {
	// console.log( arguments );
	// Convert to an array and store in new variable:
	var argsArray = Array.prototype.slice.call( arguments );
	// Now that it's been converted into an array, you can loop through it:
	argsArray.forEach( function( cur ) {
		// cur comes from the current array, which comes from the arguments, which are all the numbers that are passed into the function when it's called:
		console.log( ( 2017 - cur) >= 18 );
	})
};

// Pass some years into the function:
// isFullAge5( 1990, 2001, 1965 );
// Try it with more arguments:
// isFullAge5( 1990, 2001, 1965, 2016, 1987 );


// ES6:

// In ES6, instead of having no parameters, we use the rest parameter operator, followed by the variable name.
// So as soon as we call the function, it will convert the arguments into an array and then pass that array into this function:
function isFullAge6( ... years ) {
	// console.log( years );
	years.forEach( cur => console.log ( ( 2017 - cur ) >= 18 ) );
};
// The result will actually have the array prototype (not the object prototype).

// Pass some years into the function:
isFullAge6( 1990, 2001, 1965 );
// Try it with more arguments:
isFullAge6( 1990, 2001, 1965, 2016, 1987 );