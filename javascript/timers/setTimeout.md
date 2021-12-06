# Set Timeout

`setTimeout()` is used to run some code after a delay. Its unit of measurement is milliseconds, so `5000` = 5 seconds.


## General Format

Do not try to run this syntax, but this is the structure:

```
setTimeout( functionToRun, delayInMilliseconds );
```


## Example

The following code will wait 5 seconds, then print "Hi!" to the console:

```
setTimeout( function() { console.log('Hi!'); }, 5000 );
```


## Clear Timer

See [clearTimeout]().