# Promise (Overview)

ES6 brings along a native implementation of promises.  This allows promises to be standardized across browsers, rather than have the quirks of the various libraries that use them, such as jQuery, Axios, etc.

In JavaScript, there is no such thing as pausing execution of code.  Therefore, if you send an AJAX request, the system does not wait for its response before continuing on to execute the next line of code.  This can cause problems if the next line of code depends on the response from that AJAX request.

A `promise` is a way to prevent a block of code from executing until after the prior block of code has *finished* executing.

Promises are also a flatter way of writing code than nesting multiple setTimeouts within each other and getting stuck in "callback hell."


## Syntax Overview

The following example will take in an array containing whatever toppings you want and "bake" a pizza with them.  (The "baking" consists of a setTimeout of 5 seconds so that our Promise has something to wait for.)  See below for walkthrough.

. . . Unless the user tries to pass "anchovies" as a topping.  The first thing the Promise does is invoke the `reject` method if that happens.

```
function makePizza(toppings) {
  const pizzaPromise = new Promise(function (resolve, reject) {
    // Reject if user tries to make with anchovies:
    if (toppings.includes('anchovies')) {
      reject(`No anchovies allowed.`);
    }
    // Wait 5 seconds for the pizza to cook:
    setTimeout(function () {
      resolve(`pizza made with ${toppings.join(', ')}.`);
    }, 5000);
  });
  return pizzaPromise; // Return the promise immediately after creating it.
}

const sausageOlives = makePizza(['sausage', 'black olives']);
console.log(sausageOlives);
const pepperoni = makePizza(['pepperoni']);
console.log(pepperoni);
const quad = makePizza(['peppers', 'tomatoes', 'pesto sauce']);
console.log(quad);
const anchovies = makePizza(['cheese', 'anchovies']);
console.log(anchovies);

sausageOlives.then(function (pizza) {
  console.log(`Here is your ${pizza}`);
  console.log(sausageOlives);
});

pepperoni.then(function (pizza) {
  console.log(`Here is your ${pizza}`);
  console.log(pepperoni);
});

quad.then(function (pizza) {
  console.log(`Here is your ${pizza}`);
  console.log(quad);
});

anchovies.then(function (pizza) {
  console.log(`Here is your ${pizza}`);
  console.log(anchovies);
}).catch(function (err) {
  console.log(`There was a problem making your pizza: ${err}`);
});
```

After creating the Promise, we immediately `return` it.

Next, we invoke the `makePizza` function several times, each time passing in different sets of toppings.  We store these in descriptive variables so we can keep them straight.  When we `console.log` those variables, they each return a Promise with a state of "pending" because the Promise has not resolved yet -- the 5 seconds are not up.

After the 5-second setTimeout is complete, the `resolve()` function (inside the setTimeout, which is inside the Promise) is invoked.  The `.then` method is invoked for that particular pizza.  (The variable in which the invoked `makePizza` function was stored, such as `sausageOlives.then`.)

These `.then` methods take in a callback function that takes in whatever the `resolve` function returned -- which in this case is the "pizza made with . . ." (and the dynamic list of toppings) sentence.  It then `console.logs` that sentence inside the "Here is your . . ." sentence, the end result being, "Here is your pizza made with . . ." and a list of toppings.

Just for our information, the `.then` method also `console.logs` the Promise itself again, so that we can see that its state has changed from "pending" to "fulfilled."

To demonstrate what happens if the Promise is rejected, we attempt to pass "anchovies" as a topping.  The Promise invokes the `reject` method, and `anchovies.catch()` is therefore invoked instead of `anchovies.then()`.  `.catch()` takes in the error that was passed by `reject()`, which is the string `No anchovies allowed.` and inserts it dynamically into the string `There was a problem with your pizza: `.  The end result is: `There was a problem with your pizza: No anchovies allowed.`.


## Three States of Promises

1. Unresolved: Waiting for something to finish. (The default state for a promise.)
2. Resolved/Fulfilled: Something finished, and everything went okay.
3. Rejected: Something finished, but something went wrong.

Once the promise comes back either resolved or rejected, it runs the appropriate callback function: `then` if resolved, or `catch` if rejected.


## Syntax Detail

Thanks to the native implementation of promises in ES6, the keyword `Promise()` is available inside of the browser (as long as your browser supports it):

```
let promise = new Promise();
```

*NOTE: This will not work with `const`; you must use `let`.*

Pass a callback function inside the promise. And inside the arguments, pass in two more functions: resolve, and reject:

```
let promise = new Promise((resolve, reject) => {

});
```

This will result in a `pending` status in the console, which is the same as "unresolved."

Now you can actually invoke either function inside your promise like so:

```
let promise = new Promise((resolve, reject) => {
  resolve();
});
```

This will change the promise's status to "resolved" in the console.

Likewise . . .

```
let promise = new Promise((resolve, reject) => {
  reject();
});
```

. . . will change the promise's status to "rejected" in the console.  Note that only doing this will still throw an error in the console because you need to do more than change the status to "rejected" -- you need to have more graceful degradation.


## Then and Catch

Whenever you create a promise and assign it to a variable, that promise object includes `.then()` and `.catch()` properties.  You need to use both in order to tell the system what to do whether your promise is resolved or rejected.

1. See the [then](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/promise/promise-methods/then.md) document for detail on how to tell the system what to do if your promise is resolved successfully.
2. See the [catch](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/promise/promise-methods/catch.md) document for detail on how to tell the system what to do if your promise is rejected.


## See Also

[fetch()](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/functions/fetch.md)


## When to Use Promises

The vast majority of promises are used with AJAX requests.  (The two go hand in hand, but you can make one without the other.)

As mentioned at the top, promises are also a flatter way of writing code than nesting multiple callback functions inside each other.