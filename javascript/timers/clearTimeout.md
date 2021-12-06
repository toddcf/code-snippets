# Clear Timeout

`clearTimeout()` is used to stop a `setTimout()` without having to wait for it to finish.

Every time you set a timeout, it generates an ID number so you can refer to it later. Store this number in a variable.

Then run `clearTimeout()` on that ID number, and it will stop the `setTimeout()` from running.


## Example

```
const tooLate = setTimeout( function() {
  console.log( `You lost.` );
}, 5000 );

clearTimeout(tooLate);
```

This code will console log `You lost.` after five seconds.  But the `clearTimeout(tooLate)` line will stop it from running.  (This would typically be stored in an event listener for a click on a button, etc.)