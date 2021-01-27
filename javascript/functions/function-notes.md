# Functions

Functions are sort of like a variable for lines of code. They are reusable packages of code.


## Declaring / Defining a Function

Declaring a function means to write the block of code.


## Calling / Invoking a Function

Calling (aka invoking) a function means to execute that block of code you wrote. You can call it multiple times, since it is reusable.

When a function is invoked, it runs the code in the `code` property of the function object. This creates an "execution context." Each execution context has:

1. A "variable environment," meaning a space for any variables that get declared inside that function to exist.
2. A reference to its "outer environment," which tells it how to look down the scope chain.
3. A variable called `this` for that execution context. `this` will point to a different object *depending on how the function is invoked*.


## Ways to Declare / Define a Function

1. Anonymous Function
2. Function Statement
3. Function Expression


### Anonymous Function

A function with no name. The following is actually NOT valid, and will throw an error:

```
function(firstName) {
  return firstName;
}
```

But you can use anonymous functions in IIFEs (Immediately-Invoked Function Expressions) and callbacks.


### Function Statement

The most basic way: Write the word "function," then the name of the function, then your parentheses, and then the curly braces that contain your code block. Like this:

```
function capitalize(str) {
	return str.charAt(0).toUppercase() + str.slice(1);
}
```

Functions declared with the `function` keyword will be hoisted in their entirety. Which means you could invoke a function before it has been defined in your code. This is different than function expressions (anonymous functions stored in a variable), as described in that section.


### Function Expressions

An anonymous function stored inside a variable:

```
var capitalize = function( str ) {
	return str.charAt(0).toUppercase() + str.slice(1);
}
```

Note that the danger of storing a function inside a variable is that you could potentially change that variable's value later, and your function would be lost. (For example, `capitalize = 10;`.) However, this is not a risk if you store it in a `const` in ES6:

```
const capitalize = function( str ) {
	return str.charAt(0).toUppercase() + str.slice(1);
}
```

Note that declaring an anonymous function and storing it in a variable means that you can't invoke that function before it is declared. Only the *variable* declaration will have been hoisted; the function object will not have been created and assigned to that variable yet.


### Function Statements vs. Function Expressions

An `expression` is a unit of code that results in a value. It does not have to save to a variable.

A function `statement` simply does work.


#### Example of a Function Expression

```
a = 3;
```

The `=` operator *is a function* that *returns* a value. If you run the above code in the console, it will return `3`. So it results in a value, which means it's an expression.

Similarly, running `1 + 2` in the console will return `3`. The `+` sign is an operator that performs a function.

This works the same if you store an object in a variable:

```
a = { greeting: 'Hi' };
```

If you run the above code in the console, it will return `{greeting: 'Hi'}`.

So if you declare an anonymous function and store it in a variable, like this . . .

```
var anonymous = function() {
  console.log('Hi');
};
```

. . . it is a function *expression*. The difference being that during the execution phase, this results in a value. That value is a function object that gets created and stored in a variable.

In the previous example where a function called `greet` is declared, nothing happens yet during the execution phase because it has not been invoked. Therefore, nothing is returned.

Note that declaring an anonymous function and storing it in a variable means that you can't invoke that function before it is declared. Only the *variable* declaration will have been hoisted; the function object will not have been created and assigned to that variable yet.


#### Example of a *Statement*

```
var a;

if ( a === 3 ) {

}
```

The above code contains both. `( a === 3 )` is an expression because it evaluates to either `true` or `false`. But the `if` statement itself is a statement because it *doesn't* return a value.

For example, you couldn't store the if statement inside a variable because there is no value being returned.


#### Example of a *Function* Statement

```
function greet() {
  console.log('Hi');
}
```

This is a function *statement* because it performs work but does not evaluate to anything. It does not *return* anything.


### Declare / Define a Function WITHOUT Parameters


### Declare / Define a Function WITH Parameters

See full detail in the "Arguments and Parameters" document.


## Arrow Functions

See also: separate document.

Arrow functions are anonymous functions, meaning you must store them in a variable.


## IIFE (Immediately-Invoked Function Expression)

See separate document.


## Methods

A method is a function that lives inside of an object.

The `log` in `console.log()` is a method, because `console` is actually an object, and `log` is one of many functions contained inside of it.

See also: Separate document in the Objects directory dedicated to `console`.


### Full Method Syntax

```
const wes = {
  name: 'Wes Bos',
  sayHi: function() {
    return 'Hey, Wes';
  }
}
```

You would then invoke this by writing: `wes.sayHi();`.


### Shortened Method Syntax

There is also a shorter syntax you can use where you skip the colon and the `function` keyword of the method:

```
const wes = {
  name: 'Wes Bos',
  sayHi() {
    return 'Hey, Wes';
  }
}
```

Invoking it is the same: `wes.sayHi();`.


### Arrow Function Method Syntax

```
const wes = {
  name: 'Wes Bos',
  sayHi: () => {
    return 'Hey, Wes';
  }
}
```

This, too, is invoked the same way: `wes.sayHi()`.

NOTE: Keep in mind that if you use the arrow function, you won't be able to use the `this` keyword for this object.  Arrow functions take the parent scope instead.


### Arrow Function Method Shortened Syntax

And the arrow function could of course be shortened to:

```
const wes = {
  name: 'Wes Bos',
  sayHi: () => 'Hey, Wes'
}
```

This, too, is invoked the same way: `wes.sayHi()`.


## Callback Functions

A function that is invoked when something is done.  (When somebody clicks something, or when a certain amount of time has passed.)  It can also be described as a function that is passed into another function.  Here are examples of each:


### "Click" Callback

Let's say you have a "Submit" button. And every time it's clicked, you want to console.log "Submit Button Clicked."

```
function submitter() {
  console.log('Submit Button Clicked.');
}
const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', submitter);
```

In this example, `submitter` (on the last line of code) is a callback function.  It is not actually being executed when the code runs (notice it does not have `()` after it).  It is being executed only if the button is clicked.

You can also pass an anonymous function into the event listener as opposed to declaring it outside the event listener:

```
const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', function() {
  console.log('Submit Button Clicked.');
});
```


### "Timer" Function

One example of a callback function that is invoked after a certain amount of time has passed is a `setTimout();`.  It takes in the function you want to run, followed by the number of milliseconds you want it to wait before executing it.

```
function waiting() {
  console.log('I have waited for three seconds.');
}
setTimout(waiting, 3000);
```

Like in the previous example, you can also pass in an anonymous function:

```
setTimeout(function() {
  console.log('I have waited for three seconds.');
}, 3000);
```

You can also pass arrow functions:

```
setTimeout(() => {
  console.log('I have waited three seconds.');
}, 3000);
```


## Function Length

Some people believe that if a function is longer than ten lines, you need to split it apart into separate functions.


## First Class Functions

Functions are objects. In JavaScript, they are considered "first class functions," which means you can treat them like any other variable. Everything you can do with other data types, you can do with functions. You can . . .

- Assign them to variables.
- Pass them around (into other functions, for example).
- Create them on the fly.


## Special Properties of Functions

Functions have all the features of normal objects, plus some special properties. *You can attach properties and methods to a function.*

Some of the special properties are:

- Name (optional -- can be anonymous)
- Code (This is where the actual lines of code you've written sit. The code you write *is not* the function itself, it is a property *of* the function. What's special about the "code" property is that it's *invokable*, meaning that you can run it. Having the code be its own property of a function allows it to be moved around or copied to other areas in your code.)


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