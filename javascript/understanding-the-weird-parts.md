Whenever your code is run, JavaScript creates a `global object` as well as a `this` variable to go with it.

Even if you run a BLANK JavaScript file, execution context is created, with a `global object` and `this`.

In fact, if you do this, `this` and the `window` object are one and the same. `window` is the global object on browsers. (This is different on server-side applications such as Node.JS. But no matter what, there is always a global object.)

If you have a second browser tab open, that would be a separate global object. Each tab is its own execution context.

In JavaScript, "global" means "not inside a function." "Local" means "inside a function."

The "outer environment" is anything outside your execution context. If your execution context is the window, then there is no outer environment -- you are already as outer as you can get.


## Creation Phase

The first phase is called "Creation." JavaScript does a pass of your entire file (without actually executing it) and creates the Global Object, the `this` keyword, and the Outer Environment.

It also creates memory space for certain things like variable declarations and functions. (This is known as "hoisting.") During this pass, `var a = 'Hello';` will be stored simply as `var a;`. It will not be assigned the value of `'Hello!'` until the next phase, when the code is actually executed. In fact, it will be set to a value of `undefined`, which is a special keyword with an actual value that takes up memory space.

### Undefined vs. Not Defined

`undefined` is a special value that JavaScript has within it internally that means that the variable hasn't been set. Writing `var a;` and then trying to print `a` to the console would result in `undefined` -- the variable exists, but has no set value.

NOTE: Never set yourself a variable equal to undefined, like this: `a = undefined`. It can be done, but it's dangerous. It's best to allow `undefined` to mean that the programmer has not set the value. That really helps when debugging.

`not defined` means you haven't even declared the variable in the first place. Trying to print `a` to the console from a blank JavaScript file would result in an error saying that `a` is `not defined`.

## Execution Phase

After the creation phase comes the execution phase, where your code is actually run line by line.


## Single-Threaded Execution

"Single-threaded execution" simply means that one command is run at a time.

Keep in mind that although JavaScript itself is single-threaded, the browser might be running other non-JavaScript commands at the same time. But from our perspective as JavaScript programmers, JavaScript behaves in a single-threaded manner.


## Synchronous

Similar to "single-threaded." It means one at a time -- *and in order*.


## Execution Stack

Every time a new command is executed, it is added to the top of the "execution stack." Whatever is on the top of the stack is what's currently being executed. When it's done being executed, it is removed from the stack and the next item below it is executed.

Every function creates a new execution context, which runs through the create phase, and then the execution phase.


## Scope

Scope is where a variable is available in your code -- and whether it's the same variable or a new copy. (For example, if you call the same function twice, each gets its own execution context. So any variables created inside that function were created all over again and are actually new variables, not the same variables, even though they look the same.)


## `var` vs. `let`

`let` does not replace `var`.

`let` allows the JavaScript engine to use block scoping. This means that although a `let` declaration gets hoisted and is in memory, the JavaScript engine will not allow you to use it before the line of code in which it is executed. (Whereas with `var`, you could at least see `undefined`.)

```
if ( a > b ) {
  let c = true;
}
```


## Event Queue

After the execution stack is clear, JavaScript checks the event queue to see if there's anything to do there.

This is where events such as user clicks, http requests, etc. queue up.

For example, if it sees a click event, it checks for any event handlers regarding that click. If any exist, it executes them. (Adds to stack, creates execution context, executes, pops back off the stack.)

```
// Long-running function
function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while ( new Date() < ms ) {

  }
  console.log(`Finished waitThreeSeconds`);
}

function clickHandler() {
  console.log(`Click event!`);
}

// Listen for the click event
document.addEventListener( 'click', clickHandler );

waitThreeSeconds();
console.log(`Finished execution`);
```

In this code, the browser waits three seconds before allowing the first function to finish. If you click in the document during those three seconds, nothing happens yet. The click was added to the event queue, but it hasn't been executed yet. Only after the function stops running and pops off the stack will the click be pulled from the event queue and printed to the console.


## Dynamic Typing

How JavaScript deals with types: You don't tell the engine what type of data a variable holds; it figures it out while your code is running.

(By contrast, a language like Java uses Static Typing, where you have to tell the engine whether a variable is a string, a number, etc.)

## Primitive Types

A Primitive Type is a type of data that represents a single value -- something that is *not* an object.

There are six "primitive types" in JavaScript (types of variables):

1. undefined (Represents lack of existence or not having a value. A developer should avoid setting a variable to `undefined` specifically, as it can create human confusion during debugging. It is best to let the engine assign a value of `Undefined` to things.)
2. null (Represents lack of existence. It is okay for a developer to set a variable to `null`.)
3. boolean (Either true or false.)
4. number
5. string
6. symbol (new for ES6)


## Operator Precedence

Refers to order of operations -- which operators get called first. (Multiplication before addition, etc.)

```
var a = 3 + 4 * 5;
```

This will give you `23` because multiplication takes precedence over addition.

```
var a = (3 +4) * 5;
```

This will give you `35` because the parentheses have precedence over multiplication.

More info: http://www-lia.deis.unibo.it/materiale/JS/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence.html


## Operator Associativity

When operators have the same precedence, which direction do they get called in?

- Left-to-right is called *left associativity*.
- Right-to-left is called *right associativity*.

```
var a = 2;
var b = 3;
var c = 4;

a = b = c;
console.log(a);
console.log(b);
console.log(c);
```

`a`, `b`, and `c` will all equal `4` because the assignment operator (in this case `=`) has *right associativity*. Here's the breakdown:

1. First, the value of `c` (which is `4`) is stored in `b`.
2. Continuing right-to-left, this is then stored in `a`. So `a` now equals `4`.

*Operator precedence* is the first thing to determine order of operations. Once the highest priority operator has been determined, the engine then checks to see if it should be run left-to-right or right-to-left.


## Coercion

Because JavaScript is dynamically typed, sometimes the "type" of variable is automatically changed by the JavaScript engine.

```
var a = 1 + 2;
```

In this case, the value stored in `a` is the *number* `3`. This has been *calculated* by the `+` operator.

```
var a = 'Hello, ' + `world`;
```

In this case, the value stored in `a` is the *string* `Hello, world`. This has been *concatonated* by the `+` operator, meaning it basically stuck them together.

What if you pass the operator two different types? Let's try a *string* and a *number*:

```
var a = 1 + '2';
```

The value of `a` will now be `'12'`. Why?

Because of type coercion. JavaScript changes the *type* of `1` from a *number* to a *string* so that both values are now strings. Then, it concatonates those two strings and we get `'1'` and `'2'` side-by-side: the *string* `'12'`.

```
console.log( 1 < 2 < 3 );
```

This will return `true`.

1. The `<` comparison operator has *left associativity*, so first it evaluates `1 < 2`, which is `true`.
2. Then it evaluates `true < 3`.
3. Here's the trick: Because of type coercion, `true` is equal to `1` in JavaScript, so the engine is now actually evaluating `1 < 3`, which is `true`, so the statement returns `true`.

The opposite example:

```
console.log( 3 < 2 < 1 );
```

You might expect this to return `false` -- however, it actually returns `true`! Remember that the first evaluation will change to either `true` or `false`, which is equal to either `1` or `0`, respectively:

1. `3 < 2` evaluates to `false`, which evaluates to `0`.
2. `0 < 1` evaluates to `true`, which is what gets returned.

*Booleans can be coerced to numbers.*
*`null` can be coerced to `0`.*
*`undefined` DOES NOT get coerced to a number. Trying to force this will result in `NaN`.*

Using equality (`==`) will allow for type coercion.
Using strict equality (`===`) will NOT allow for type coercion.

Type coercion can create some confusion:

`false == 0;` will actually evaluate to `true`!

Another example:

```
var a = false;
```

`a == 0` would actually evaluate to `true`!

However, `null == 0` still evaluates to `false`. This is because `null` will coerce to `0` for `<` but not for `==`.

An empty string such as `'' == 0` *will* return `true`. Which means that `'' == false` will return `true`.

As you can see, type coercion can make it very hard to predict what your code is going to evaluate to. *Therefore, strict equality (`===`) is safer to use. Use it 99% of the time when making equality comparisons. Use `===` by default in your code.*

Comparing a string and a number will always result in false:

`3 === '3'` is `false` because the types do not match, and they are not going to get coerced to match.

Example:

```
var a = 0;
var b = false;
```

`a == b` will return `true`. `a === b` will return `false`.

More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness (includes a chart)


## Existence and Coercion

Anything that represents a lack of existence converts to false:

`null` = `false`
`undefined` = `false`
`''` = `false`

Here is a problem that can occur:

```
var a;

if (a) {
  console.log('a is true');
}
else {
  console.log('a is false');
}
```

In the above, `a` is `undefined`, which will result in `false` because it doesn't "exist." Setting the value of `a` to anything at all will result in `true`.

But what if you set `a = 0`? `0` will coerce to `false` and your if statement will return `false`, even though you intended to check whether or not `a` had a value. In this scenario, you would have been expecting `true`, but you would be getting `false`.

One workaround:

```
a = 0;

if ( a || a === 0 ) {
  console.log('a is true');
}
```

Because of operator precedence, the `===` will be run before the `||`. So `a === 0` will be run, coerce to `true`, and your string will be printed to the console.


## Default Values

Let's say you have a function that takes in the user's name and greets them with it:

```
function greet( name ) {
  console.log( 'Hello, ' + name );
}
```

In this case, calling `greet( 'Todd' );` will print `Hello, Todd` to the console.

But what if someone called the function without passing a name into it?

```
greet();
```

Well, this would consider the `name` variable to be `undefined`. It would then *coerce* `undefined` into a string and concatonate it, returning `Hello, undefined`.

Since this is not ideal behavior, you can set a default value as a workaround:

```
function greet( name ) {
  name = name || '<your name here>';
  console.log( 'Hello, ' + name );
}
```

When given the choice between two values (in this case, `undefined` or `<your name here>`), JavaScript will choose the value that can be coerced to `true`.

So in this case, it will choose `<your name here>`.

Note that if both options can be coerced to `true`, it will simply return the first one:

`'hi' || 'hello'` will return `'hi'`.

In other words, it will return *the first one that can be converted to `true`*.

*Operators are actually functions that return values.*

### Example: Multiple JS Files

Let's say you are loading multiple JS files in your HTML:

```
<script src="assets/js/library1.js" type="text/javascript"></script>
<script src="assets/js/library2.js" type="text/javascript"></script>
<script src="assets/js/app.js" type="text/javascript"></script>
```

Now let's say that `library1` says this:

```
var libraryName = 'Venice';
```

. . . and `library2` says this:

```
var libraryName = 'Mar Vista';
```

Because `library2` is the more recent file, it overrides the variable created by `library1`. Therefore, if in your `app.js` file you console.log `libraryName`, you will see `Mar Vista`.

BUT, what if you would rather have your second file check to see if `libraryName` is already assigned, rather than blindly overwriting it?

In `library2.js`, replace `var libraryName = 'Mar Vista';` with:

```
window.libraryName = window.libraryName || 'Mar Vista';
```

What this means is that `library2` will check to see if there's already a global variable called `libraryName`. If there is, it will do nothing (in this case, leaving it set to `Venice`). If there *isn't*, it will set it to `Mar Vista`.

This method prevents naming collisions.


## By Value vs. By Reference

"By value" and "by reference" both refer to variables.

### By Value

Let's say you have a *primitive* value, such as a string, number, or boolean.

Now let's say you stored it in a variable. This means that the variable has an address where it knows where in the memory that value sits. (Variables are a reference to a location in memory.)

Then let's say you store that variable into another variable:

```
var a = 3;
var b = a;
```

What happens under the hood is that `a` still points to the original value of `3` in the memory. And `b` now points to a *copy* of `3`. It is a new address, a new location in memory.

THEREFORE, if the value of `a` gets updated, the value of `b` *does not*, unless you specifically update it.

```
var a = 3;
var b = a;

console.log(b); // results in 3

a = 4;
console.log(b); // still results in 3, even though `a` was changed

b = a;
console.log(b); // NOW `b` will result in `4`, because it was manually updated.
```


### By Reference

Now let's say you do the same thing with an object (as opposed to a primitive value).

In this case, no copy of the object is created. Both variables point to the same object in memory.

This is called *by reference*.

```
var c = { greeting: 'Hi' };
var d = c;

console.log(d.greeting); // 'Hi'

c.greeting = 'Buzz off'; // mutate the object

console.log(d.greeting); // 'Buzz off'
```

This works with function parameters, too:

```
function changeGreeting(obj) {
  obj.greeting = 'Quiet!';
}

changeGreeting(d); // 'Quiet!'
```

As you can imagine, *by reference* and *by value* behave quite differently from each other.

Remember that all objects (including functions) interact by reference when setting them equal to each other or passing them into a function. This can cause confusion that is difficult to debug if you forget this.

*The equals operator sets up new memory space.* It is a new address in memory. Therefore . . .

```
c = { greeting: 'Buzz off' };
```

. . . will create a new `c` and put this new value in it, and `d` and `c` will no longer be pointing to the same location in memory. It's considering the object being created by object literal syntax and stored in the variable to be a brand new object. Since the new object didn't already exist in memory, it sets up a new place in memory to store it.

In the case of `var d = c;`, it checks and sees that `c` already exists, and just points `d` to that same place in memory. `{ greeting: 'Buzz off' }` did not exist in memory yet, so it creates a new location for `c` and stores it there.

*The difference is that mutating an object instead of creating a whole new object will allow you to use "by reference."*


## This

Remember that a function has an execution context that is created when that function is invoked.

Do not confuse this with the object that is a function that is sitting in memory. When that function is invoked, the execution context is created and put on top of the stack, and that determines how that code is executed.

- Each execution context has a variable environment, where the variables creaed inside that function live.
- It also has a reference to its outer lexical environment -- where it sits physically in the code. This tells it how to look down the scope chain when it doesn't find a variable it's looking for.
- And every time an execution context is created (aka every time a function is invoked), it gives us a variable called `this`. *And `this` will point at a different object depending on how the function is invoked.*