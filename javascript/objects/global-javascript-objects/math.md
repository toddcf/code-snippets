# Math

The Math object is a collection of methods that let you do various operations besides arithmetic.

In alphabetical order:


## Math.abs

`Math.abs()` makes the number inside its parentheses an absolute number, meaning it won't be a negative.


## Math.ciel

`Math.ciel()` rounds up to the next whole number.

Note that even if the decimal is less than `.5`, it will still round up:

`Math.ceil(2.1)` = `3`


## Math.floor

`Math.floor()` rounds the number inside its parentheses down to the next whole number, making it an integer.

Note that even if the decimal is greater than `.5`, it will still round down:

`Math.floor(6.52)` = `6`


## Math.max

`Math.max()` finds the largest number that is passed into it.

`Math.max(2, 3, 10, 5)` = `10`


## Math.min

`Math.min()` finds the smallest number that is passed into it.

`Math.min(2, 3, 10, 5)` = `2`


## Math.pow

`Math.pow()` takes the first number that is passed into it and multiplies it to the power of the second number that is passed into it. For example:

`Math.pow(5,2)` is 5 to the power of 2, which would be 25.


## Math.random

`Math.random()` generates a random number between 0 and 1.


## Math.round

`Math.round()` rounds the number either up or down according to normal rules. (Anything below `.5` gets rounded down, and anything `.5` and above gets rounded up.)

`Math.round(2.4)` = `2`

`Math.round(2.5)` = `3`


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