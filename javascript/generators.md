# Generators

A generator is a function that can be entered and exited multiple times.

Normally, we call a function, it runs, and then it's finished.

With generators, we can run some code, return a value, and then go right back into the function at the same place that we left it.

Stephen Grider calls generators "the mother lode of ES6, by far the most brain-bending feature."


## Syntax

The syntax is the same as any other function, except there is an asterisk either right after the `function` keyword:

```
function* numbers() {

}
```

...Or right before the name of the function:

```
function *numbers() {

}
```