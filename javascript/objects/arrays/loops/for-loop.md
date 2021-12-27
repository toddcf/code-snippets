# For Loop


## How a For Loop is Structured

```
for (A; B; D) {
  // C
}
```

A) Initial Expression.  (Run this code one time before the loop starts.)
B) Condition.  (If this condition is true, run the "C" code block.)
C) Code Block.  (If the "B" condition was true, this is the code block that gets executed.)
D) Increment/Decrement Expression.  (After the "C" code block is executed, come back up to "D" and either increment or decrement -- otherwise the "B" condition will always be met and the loop will run infinitely.)

NOTE: A and B have semicolons after them.  D does NOT.  Putting a semicolon after D will break the for loop.


### Example

```
for (let x = 0; x < 20; x=x+2) {
  console.log(x);
}
```

In this example, the code says:

A) Create a variable called `x` and set its value to `0`.
B) Keep repeating the loop as long as `x` is less than `20`.
C) Every time the code runs, increase `x` by `2`.


## Standard For Loop

```
for (let i = 0; i < array.length; i++) {
  console.log(i);
}
```

This uses `i` as its "iterator" variable.  Since it is looping over an array one time, the maximum value of `i` is set to the length of the array.  And with each iteration, `i` is increased by one.


## Using let vs. var

For scoping reasons, it is very important to use `let` instead of `var` in your initial expression.  `let` will be scoped to your for loop, whereas `var` will be globally scoped.

The problem with global scoping your iterator is that it will be available outside your for loop, and can collide with other parts of your code.  For example, if you used more than one for loop in the same file, they can't both use `i` as their iterator.  (Unless you use `let`, in which case they absolutely can.)