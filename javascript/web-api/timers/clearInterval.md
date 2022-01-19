# Clear Interval

`clearInterval()` is used to stop a `setInterval()` from running endlessly.

Every time you set an interval, it generates an ID number so you can refer to it later. Store this number in a variable.

Then run `clearInterval()` on that ID number, and it will stop the `setInterval()` from running.


## Example

```
let count = 0;

const sayHi = setInterval( function() {
  console.log( `Current Number: ${count}` );
  count++;
  if ( count > 9 ) {
    clearInterval(sayHi);
  }
}, 1000 );
```

This code will count from `0` to `9`, printing each number to the console. After it hits `9`, `clearInterval()` will stop it.