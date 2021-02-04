# JavaScript Scope

"Scope" answers the question, "Where are my functions and variables available to me?"


## Global Scope

"Global" means your function or variable is available anywhere.  If you declare your function or variable outside of all functions, modules, etc., it is available to you anywhere on the page or in the console.

In the browser, the global scope is called the "window."  If you type `window` into the console, you'll see every function, etc. that .is attached to the window object (global scope).  In fact, typing `window.setTimeout()` in the console is the same as just typing `setTimeout()` in the console.

Same for functions.  If you've declared a function in the global scope, like this . . .

```
function sayHi() {
  console.log('Hi!');
}
```

. . . then calling `window.sayHi()` is the same as calling `sayHi()`.


### Exceptions

A quick exception to this is if you use `let` or `const` instead of `var`.

```
const first = 'Wes';
let second = 'Bos';
var age = 100;

window.first; // undefined
window.second; // undefined
window.age; // 100
```

This is because `var` variables are attached to the window object (globally scoped).

But `const` and `let` variables, while globally scoped, are *not* attached to the window.


### Best Practice

In general, you should not declare global variables.  It is a recipe for a headache.


## Local Scope

Variables or functions that are contained inside a function are only available inside that function.  The only way to make it available would be if, when the function is invoked, it returns a value that gets stored in a variable that you can use outside the scope of that function.

However, a function does have the ability to access variables and functions that are outside of it.  (It can reach out, but you can't reach in.)

If a function is invoked, and it references a variable that it can't find within its own borders, it will move up one level of scope and look for it there.  If it still doesn't find it there, it will keep going up level by level until it reaches the global scope.


### Shadow Variables

Note that it will stop looking up the scope once it finds what it's looking for.  So it is technically possible to declare the same variable in different scopes -- this is called "shadow naming" or "shadow variables."  But it's just a terrible practice.

1. It's confusing to the humans working on the code.
2. You eliminate the ability for a function to access the same-name variable in the upper scope because the function will find the match inside itself and stop looking.


## Block Scope

Any time you have a set of curly brackets `{}`, that is known as a "block."  Functions, if statements, switch statements, etc. are all blocks.

`var` is function-scoped.  `const` and `let` are block-scoped.

The following code will throw an error when it tries to console log `cool`, because cool will be `undefined` -- it is inside the scope of the "if" block, and therefore not accessible outside of it.

```
if (1 === 1) {
  const cool = true;
}

console.log(cool);
```

Same result if you use `let` instead of `const`.

NOTE: This would have worked if you used `var` instead of  `const` or `let`.  (However, it is still not necessarily recommended that you declare `var` variables inside of blocks because there can be unintended consequences due to hoisting.)

You can get around this by first declaring the variable *outside* the block, and then updating it inside the block:

```
let cool;

if (1 === 1) {
  cool = true;
}

console.log(cool);
```

This will run with no problems.


### A Note About For Loops and Scope

Using for loops can cause unintended consequences if you declare `var i = 0` inside the parentheses, because that that winds up being a global variable.  And at the end of the for loop, `i` still has whatever value it was last assigned.  Therefore, if you use another for loop elsewhere in the same code with `i` for the incrementer, it can cause surprises.  You may be trying to create a variable that already exists.

In ES6, you can get around this by declaring `let i = 0` instead of `var`.  Doing so will scope `i` to the block of that particular for loop.


## An Exercise in Scope

In the following example, will invoking the `go();` function result in `Snickers` or `Sunny` being console logged?

```
const dog = 'Snickers';

function logDog() {
  console.log(dog);
}

function go() {
  const dog = 'Sunny';
  logDog();
}

go();
```

The answer is `Snickers`.

This is because JavaScript uses "lexical" scoping, or "static" scoping.  Quite simply, this means that function are scoped based on where they're *defined*, not where they're run.

So in this example, `logDog()` was defined globally, so it references the global dog name of "Snickers" (despite the fact that it is invoked from within a function where the dog name has just been locally set to "Sunny").

NOTE: If instead of referencing a global variable you pass an argument into the function, it will use the argument:

```
const dog = 'Snickers';

function logDog(dog) {
  console.log(dog);
}

function go() {
  const dog = 'Sunny';
  logDog('Rufus');
}

go();
```

This time, running `go()` will result in "Rufus" being console logged.


## Function Scoping

You can declare functions inside of functions, and each one is scoped to the function block it is inside of (its parent function).  You won't be able to invoke a function from outside its containing function.  For example:

```
function sayHi(name) {
  function yell() {
    console.log(name.toUppercase());
  }
}
```

In this instance, if you invoke `sayHi('Wes');`, it will print `WES` to the console.

But if you try to invoke `yell('Wes');`, it will throw an error, as if that function doesn't exist.

However, nesting functions like this is not a common practice.