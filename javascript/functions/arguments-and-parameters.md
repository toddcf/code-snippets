# Arguments and Parameters

NOTE: ES6 uses `spread` instead of arguments. (See separate documentation.)

Parameters and arguments are very similar. You can remember "parameters" as "placeholders" that are passed into a function, like this:

```
function example(parameter1, parameter2) {
  return parameter1 + parameter2;
}
```

Now if you call `example(1, 2);`, it will return `3` (as in 1 + 2). `parameter1` and `parameter2` are just *placeholders* for whatever numbers you might decide to pass into the function.

. . . And you can remember that "arguments" are the *actual values* that you pass into the function (in this case, `1` and `2`).

Also: `arguments` is a special keyword or variable that is set up automatically by JavaScript in the execution context of a function. `arguments` contains a list of all the values of all the parameters that you pass to a function.

The arguments that you pass in can even be run as expressions. Taking the example above, you could actually call the function like this:

```
example(100 + 200 + 300, 1);
```

Everything before the first comma will be calculated and reduced down to a single value, making it the equivalent of:

```
example(600, 1);
```

And your result would be `601`.


## Parameters and Scope

It is actually okay to use the same name for parameters in different functions. For example, the following will not collide:

```
function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name) {
  return `HEY, ${name.toUpperCase()}!`;
}
```

This is because the parameter `name` in each function is not available outside of the scope of each respective function.

You could even get away with passing the result of one function into the other without collisions:

```
yell(doctorize('Todd'));
```

This will return `HEY, DR. TODD!`.


## Setting Defaults for Graceful Degradation

You can set a default for your parameter, just in case someone calls your function without passing any arguments into it:

```
function yell(name = 'Silly Goose') {
  return `HEY, ${name.toUpperCase()}!`;
}
```

This way, if someone calls `yell();`, it will return `HEY, SILLY GOOSE!`.

But if they pass an argument into the function, it will overwrite the default and run as usual:

`yell('Todd');` still returns `HEY, TODD!`.

You can even just default to an empty string, like this:

```
function yell(name = '') {
  return `HEY, ${name.toUpperCase()}!`;
}
```

`yell();` will return `HEY, !`.

If you have multiple parameters and you want to force one of them to fall back to its default, you can no longer get away with passing "nothing" in place of that parameter. Instead, you have to pass `undefined`. For example:

```
function billCalculator(food, tax = .09, tip = .2) {
  return food + food * tax + food * tip;
}
```

If you want to leave the tax as-is, you cannot just call `billCalculator(50, , .1);`. Instead, you would need to pass `undefined` as the argument for the tax, like this:

```
billCalculator(50, undefined, .1);
```

NOTE: This is *not* a truthy/falsy scenario. You cannot pass `true`, `false`, `0`, `null`, etc. in order to fall back to the default. Doing so will overwrite the default instead of falling back to it.