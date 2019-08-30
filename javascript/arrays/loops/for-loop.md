# For Loop

## How a For Loop is Structured

DO NOT run this code:

```
for (A; B; C) {
  // code you want to repeat
}
```

A) Run this code one time before the loop starts.
B) Keep repeating the code block while this is true.
C) Run this statement every time the code block runs.

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
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```