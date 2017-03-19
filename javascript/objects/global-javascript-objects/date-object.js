// Constructor object, which will get today's date if no arguments are passed into it:
var now = new Date();

// Alternatively, you can pass arguments into the constructor object to get dates other than today.
// Arguments: Year, month (subtract one because it's zero-based -- December is "11"), day.
var christmas = new Date( 2017, 11, 25 );

// Once you've grabbed today's date and stored it in a variable, you can use methods on that variable such as:
var year = now.getFullYear();
// And in this case, we're storing it in another variable called year.

// This will get today's month and store it in a variable of the same name:
var month = now.getMonth();

// However, getMonth() will give you a number, not a string, so you'll probably want to create/use an array containing all of the month names:
var monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];