# Variables

`var`, `let`, and `const` are the three types of variables you can declare. `var` variables are function-scoped. `let` adn `const` variables are block-scoped (as in, code between curly braces).


## Var

`var` variables are function-scoped.


## Const

"Constant" variable -- cannot be overwritten. Good to use by default so that your variables do not accidentally get overwritten and lead to bugs.

Block-scoped.


## Let

Similar to `var` in that it can be overwritten, but it is block-scoped.


## Strict

If you don't write `var` when first declaring a variable, JavaScript will do it for you and save it to the global scope. In other words:

```
var dog = 'Snickers';
```

Is the same as:

```
dog = 'Snickers';
```

But this is bad practice.  It's sloppy, it can confuse other coders, and it can lead to bugs down the road.  Always use `var` (or `let` or `const`) when first declaring variables.

In any case, you can actually write this at the top of your JavaScript file:

```
'use strict';
```

And this will NOT allow the browser to make those compensations. It will throw errors and warnings instead. You can use this to ensure that you write better code.


## Naming Conventions

Variable names should not start with a capital (unless they are a class). It won't break things, but it's not the convention.

Variables must start with a letter (a-z), underscore, or `$`. (However, don't create your own variables with only the names `_` or `$` because the underscore is associated with Lodash and the dollar sign is associated with jQuery.)

- Camel Case (allowed): `var iLovePizza;`
- Upper Camel Case (allowed, but usually reserved for building classes): `var ILovePizza;`
- Snake Case (allowed): `var i_love_pizza;`
- Kebab Case (not allowed -- dashes are not allowed in variable names): `var i-love-pizza;`