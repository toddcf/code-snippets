# Functions

Functions are sort of like a variable for lines of code. They are reusable packages of code.

## Declaring a Function

Declaring a function means to write the block of code.

## Calling a Function

Calling a function means to execute that block of code you wrote. You can call it multiple times, since it is reusable.

## Define a Function WITHOUT Arguments

## Define a Function WITH Arguments



```
function square( num ) {
	console.log( num * num );
}
```

Now when you call `square()`, you include an "argument" inside the parentheses. It's like a variable that the function plugs into its code.

`square(10);` would print `100`. It's like saying `var num = 10;`

## Function Declarations

The most basic way.

```
function capitalize( str ) {
	return str.charAt(0).toUppercase() + str.slice(1);
}
```

## Function Expressions

A function stored inside a variable.

```
var capitalize = function( str ) {
	return str.charAt(0).toUppercase() + str.slice(1);
}
```

Note that the danger of storing a function inside a variable is that you could potentially change that variable's value later, and your function would be lost.  (For example, `capitalize = 10;`.)

## Function Length

Some people believe that if a function is longer than ten lines, you need to split it apart into separate functions.


## First Class Functions

Functions are objects. In JavaScript, they are considered "first class functions," which is a fancy way of saying that everything you can do with other data types, you can do with functions. You can . . .

- Assign them to variables.
- Pass them around.
- Create them on the fly.


## Special Properties of Functions

Functions have all the features of normal objects, plus some special properties. *You can attach properties and methods to a function.*

Some of the special properties are:

- Name (optional -- can be anonymous)
- Code (This is where the actual lines of code you've written sit. It's not that the code you write *is* the function itself, it is a property *of* the function. What's special about the "code" property is that it's *invokable*, meaning that you can run it. Having the code be its own property of a function allows it to be moved around or copied to other areas in your code.)


### Attaching Properties to Functions

You can attach a property to a function just like you can any object:

```
function greet() {
  console.log('Hi');
}

greet.language = 'English';

console.log(greet.language);
```

The above will print `English` to the console.


## Function Statements vs. Function Expressions

An `expression` is a unit of code that results in a value. It does not have to save to a variable.

A function `statement` simply does work.

### Example of a Function Expression

```
a = 3;
```

The `=` operator is a function that returns a value. If you run the above code in the console, it will return `3`.

Similarly, running `1 + 2` in the console will return `3`. The `+` sign is an operator that performs a function.

This works the same if you store an object in a variable:

```
a = { greeting: 'Hi' };
```

If you run the above code in the console, it will return `{greeting: 'Hi'}`.

### Example of a Statement

```
var a;

if ( a === 3 ) {

}
```

The above code contains both. `( a === 3 )` is an expression because it evaluates to either `true` or `false`. But the `if` statement itself is a statement because it *doesn't* return a value.

For example, you couldn't store the if statement inside a variable because there is no value being returned.

### Example of a *Function* Statement

```
function greet() {
  console.log('Hi');
}
```

This is a function *statement* because it performs work but does not evaluate to anything. It does not *return* anything.

### Example of a Function Expression

If you declare an anonymous function and store it in a variable, like this . . .

```
var anonymous = function() {
  console.log('Hi');
};
```

. . . it is a function *expression*. The difference being that during the execution phase, this results in a value. That value is a function object that gets created and stored in a variable.

In the previous example where a function called `greet` is declared, nothing happens yet during the execution phase because it has not been invoked. Therefore, nothing is returned.

Note that declaring an anonymous function and storing it in a variable means that you can't invoke that function before it is declared. Only the variable declaration will have been hoisted; the function object will not have been created and assigned to that variable yet.


## Passing a Function Into Another Function on the Fly

You can create a function on the fly when passing it into another function:

```
function log(a) {
  console.log(a);
}

log(function() {
  console.log('Hi');
});
```

This will console log . . .

```
() {
  console.log('Hi');
}
```

If you instead wanted to *run* that inner function, change the outer function's code to invoke whatever is passed into it instead of just console logging it:

```
function log(a) {
  a();
}
```

This will result in `Hi` being printed to the console.

Being able to pass functions into other functions is called "functional programming."