# Promises

ES6 brings along a native implementation of promises. This allows promises to be standardized across browsers, rather than have the quirks of the various libraries that use them, such as jQuery, Axios, etc.

In JavaScript, there is no such thing as pausing execution of code. Therefore, if you send an AJAX request, the system does not wait for its response before continuing on to execute the next line of code. This can cause problems if the next line of code depends on the response from that AJAX request.

A `promise` is a way to prevent a block of code from executing until after the prior block of code has *finished* executing.

## Three States of Promises

1. Unresolved: Waiting for something to finish. (The default state for a promise.)
2. Resolved: Something finished, and everything went okay.
3. Rejected: Something finished, but something went wrong.

Once the promise comes back either resolved or rejected, it runs the appropriate callback function: `then` if resolved, or `catch` if rejected.

## Example

```
const promise = new Promise();
```

## When to Use Promises

The vast majority of promises are used with AJAX requests. (The two go hand in hand, but you can make one without the other.)