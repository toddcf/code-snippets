# Math


## Math.abs

`Math.abs()` makes the number inside its parentheses an absolute number, meaning it won't be a negative.


## Math.random

`Math.random()` generates a random number between 0 and 1.


## Math.floor

`Math.floor()` rounds the number inside its parentheses down to the next whole number, making it an integer.


## Combinations


### Math.floor and Math.random

```
Math.floor( Math.random() * 6 ) + 1;
```

What this does:

1. `Math.random()` generates a random number between 0 and 1.
2. That number gets multiplied by 6, making it a random number between 0 and 6 (but not including 6).
3. `Math.floor()` rounds this number down to the nearest whole number between 0 and 5.
4. Adding 1 to this value gives us a random number between 1 and 6.