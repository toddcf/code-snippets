# Promises

ES6 brings along a native implementation of promises.  This allows promises to be standardized across browsers, rather than have the quirks of the various libraries that use them, such as jQuery, Axios, etc.

In JavaScript, there is no such thing as pausing execution of code.  Therefore, if you send an AJAX request, the system does not wait for its response before continuing on to execute the next line of code.  This can cause problems if the next line of code depends on the response from that AJAX request.

A `promise` is a way to prevent a block of code from executing until after the prior block of code has *finished* executing.

Promises are also a flatter way of writing code than nesting multiple setTimeouts within each other.


## Three States of Promises

1. Unresolved: Waiting for something to finish. (The default state for a promise.)
2. Resolved: Something finished, and everything went okay.
3. Rejected: Something finished, but something went wrong.

Once the promise comes back either resolved or rejected, it runs the appropriate callback function: `then` if resolved, or `catch` if rejected.


## Syntax

Thanks to the native implementation of promises in ES6, the keyword `Promise()` is available inside of the browser (as long as your browser supports it):

```
let promise = new Promise();
```

*NOTE: This will not work with `const`; you must use `let`.*

Put a function inside the promise. And inside the arguments, pass in two more functions: resolve, and reject:

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

Whenever you create a promise and assign it to a variable, that promise object has two properties on it:

```
promise.then();
```

And:

```
promise.catch();
```


### Then

Let's begin by working with `then`.  Call `resolve();` in your promise.  And write a `promise.then();` that tells the system what to do when the promise is resolved.

```
let promise = new Promise((resolve, reject) => {
  resolve();
});

promise.then(() => {
  console.log('Finally finished!');
});
```

The result will be that `Finally finished!` is printed to the console.

You can even chain on another `then()` like so:

```
promise
  .then(() => {
    console.log('Finally finished!');
  })
  .then(() => {
    console.log('Second THEN in the chain has also been run.');
  });
```

The result will be that both `Finally finished!` and `Second THEN in the chain has also been run.` will be printed to the console.


### Catch

Just like `.then()`, you have access to the `.catch()` handler as well, and you need to use both.  You are telling the system what to do whether the promise is resolved or rejected.

```
promise
  .then(() => {
    console.log('Finally finished!');
  })
  .then(() => {
    console.log('Second THEN in the chain has also been run.');
  })
  .catch(() => {
    console.log('Something went wrong.');
  });
```

Now if you call . . .

```
let promise = new Promise(resolve, reject) {
  reject();
}
```

. . . the console will print `Something went wrong.`.  No error message will be thrown this time, because you've built in your graceful degradation.


## See Also

[fetch()](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/functions/fetch.md)


## When to Use Promises

The vast majority of promises are used with AJAX requests.  (The two go hand in hand, but you can make one without the other.)

As mentioned at the top, promises are also a flatter way of writing code than nesting multiple callback functions inside each other.