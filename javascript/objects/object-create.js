// Code Snippet Example:

var personProto = {
	calculateAge: function() {
		console.log(2017 - yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

/*
Explanation

Declare the personProto variable and store something inside it, which in this case is the calculateAge function.
To create an object using this prototype, declare a new variable and inside of it, call the Object.create function, using the personProto you just created as the argument.
To pass data into this object you've just created, use john.name = "John", etc.

Variation

Since the previous way was inefficient, here is a faster, albeit stranger way:
*/

var jane = Object.create(personProto,
{
	name: { value: "Jane"},
	yearOfBirth: {value: 1969},
	job: {value: "designer"}
});

/*
Explanation:

Declare the variable and store the Object.create(personProto) inside it just like before.
BUT . . . you can pass a second argument into it after personProto, which will be all the key value pairs you want to store.  So:
Create an object using the curly braces.
List each key, then colon, then another set of curly braces.  Inside the curly braces, write value: followed by the value you want to store.

Note

The difference between Object.create and the function constructor pattern is that . . .
Object.create builds an object that inherits directly from the one that we passed into the first argument.
In the function constructor, the newly created object inherits from the function constructor's prototype property.

One of the benefits of Object.create is that it allows us to create really complex inheritance structures in an easier way than function constructors because it allow us to directly specify which object should be a prototype.

BUT . . . the function constructor is more popular.
*/