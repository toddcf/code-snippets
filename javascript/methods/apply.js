function addFourAges( a, b, c, d ) {
	return a + b + c+ d;
};

var sum1 = addFourAges( 18, 30, 12, 21 );
console.log( sum1 );

// What if the ages were in an array? Use the "apply" method.

// ES5:
var ages = [ 18, 30, 12, 21 ];
// In using the apply method, we must specify "this". But in this case we don't need it, so we can just say it's null.
var sum2 = addFourAges.apply( null, ages );
console.log( sum2 );