# Hoisting

Hoisting allows you to access functions and variables before they have been created.

There are two things that get hoisted in JavaScript:

1. Function declarations
2. Variable declarations (but not their values)


## Function Declarations

Although it is not considered good practice, you can actually invoke a function before you've declared it, like this:

```
sayHi();

function sayHi() {
  console.log('Hi!');
}
```

This is because when your JavaScript file is first loaded, JavaScript "hoists" all your function and variable declarations to the top.  Although it does not work exactly like this under the hood, you can think of the above code being the equivalent of this:

```
function sayHi() {
  console.log('Hi!');
}

sayHi();
```


## Variable Declarations

Variables are hoisted slightly differently than functions.  Whereas an entire function will be hoisted to the top of the file, only a variable's name will be hoisted -- not its value.

```
console.log(age);
var age = 10;
```

The above code will print `undefined` to the console.  This is because the above code will be hoisted to the equivalent of:

```
var age;

console.log(age);
age = 10;
```


## Hoisting Functions Stored in Variables

If you store a function in a variable, it will now be hoisted according to the variable rules, not the function rules.  So this . . .

```
sayHi();
const sayHi = function() {
  console.log('Hi!');
}
```

. . . will throw an error because it is the equivalent of this:

```
const sayHi;
sayHi(); // Throws error here.
sayHi = function() {
  console.log('Hi!');
}
```