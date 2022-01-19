# Set Timeout

`setTimeout()` is used to run some code after a delay. Its unit of measurement is milliseconds, so `5000` = 5 seconds.


## General Format

Do not try to run this syntax, but this is the structure:

```
setTimeout( functionToRun, delayInMilliseconds );
```


### Example

The following code will wait 5 seconds, then print "Hi!" to the console:

```
setTimeout( function() { console.log('Hi!'); }, 5000 );
```


## Stop (Clear) Timer

See [clearTimeout]().


## How it Works Behind the Scenes

When `setTimeout()` is called, the browser runs it for you via a Web API, and the `setTimeout()` itself is removed from the top of the stack.  See [Web API]() for a full explanation.  Know that a `setTimeout()` will still have to wait for the call stack to clear before it actually gets executed, so this may affect the accuracy of your timer.  (Even running a `setTimeout()` of zero will force the function to pass through the Web API to the task queue, where it will then have to wait until the call stack is clear before it actually executes.)