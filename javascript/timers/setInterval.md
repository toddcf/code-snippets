# Set Interval

`setInterval()` runs some code repeatedly at timed intervals. Its unit of measurement is milliseconds, so `5000` = 5 seconds.


## General Format

Do not run this syntax, but here is the general structure:

```
setInterval( functionToRun, intervalInMilliseconds );
```


## Example

The following code will print "Hi!" to the console every 2 seconds:

```
setInterval( function() { console.log('Hi!'); }, 2000 );
```