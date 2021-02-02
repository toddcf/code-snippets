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