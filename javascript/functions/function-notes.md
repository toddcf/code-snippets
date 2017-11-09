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