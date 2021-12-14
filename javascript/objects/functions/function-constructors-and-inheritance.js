// Function Constructor

var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

/*
Explanation:

The convention is to capitalize the first letter of the function constructor’s name.
name, yearOfBirth, and job are all parameters.
this.name = name means...
this = The particular object that we're in, which will be the empty object that will be created whenever "new Person" is called.  (Not to the global object.)
.name = The "name" property of the object we're in.
name [the second one] = The value of the this.name property, which is pulled from whatever argument is passed into the "name" parameter above.
Same for the others (yearOfBirth, job).

To Create a New Object Once You've Made Your Function Constructor:
*/

var john = new Person("John", 1990, "teacher");

/*
Explanation:

The "new" operator creates a new empty object.
Then the constructor function, which in this case is Person, is called with the arguments that we passed into it (John, 1990, teacher).

Inheritance

To add functions or properties to a constructed object after the fact:
*/

Person.prototype.lastName = "Smith";

/*
Explanation

Now every Person has a property of lastName, which has a value of "Smith".

Note

The difference between Object.create and the function constructor pattern is that . . .
Object.create builds an object that inherits directly from the one that we passed into the first argument.
In the function constructor, the newly created object inherits from the function constructor's prototype property.

One of the benefits of Object.create is that it allows us to create really complex inheritance structures in an easier way than function constructors because it allow us to directly specify which object should be a prototype.

BUT . . . the function constructor is more popular.
*/

// Default Parameters:

// Used whenever we want one or more parameters of a function to be preset -- aka have a default value.

// ES5:

function SmithPerson( firstName, yearOfBirth, lastName, nationality ) {
	// Defaults:
	// If the lastName is undefined, make it Smith. Otherwise, make it whatever argument was passed in:
	lastName === undefined ? lastName = "Smith" : lastName = lastName;
	nationality === undefined ? nationality = "American" : nationality = nationality;

	// Explicit Settings:
	this.firstName = firstName;
	this.yearOfBirth = yearOfBirth;
	this.lastName = lastName;
	this.nationality = nationality;
};

var john = new SmithPerson( "John", 1990 );
// If we only specify a couple of the arguments, JavaScript will set the other parameters to "undefined."

// John's sister has married and moved to Spain:
var emily = new SmithPerson( "Emily", 1983, "Diaz", "Spanish" );
















