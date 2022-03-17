# Named Import / Exports

You can have as many named exports as you want.  (Unlike default exports, which can have only one per module.)

To continue the example in the Modules Overview document, let's say you're already exporting the `returnHi` function and now you want to also export a variable.


## Exporting

### Exporting Each Individual Variable

Just add the `export` keyword in front of each individual variable:

```
export const lastName = 'Tester';
export const middleName = 'Cowboy';
```


### Exporting a List of Variables

Or, instead of exporting each individual variable, you can list the named exports at the bottom of the file, like this:

```
export { last, middle };
```

Either method is fine; it's personal preference.


## Importing Named Exports

In the file you want to import *into*, you can list each item you want access to (comma-delimited) inside the curly braces.  In this example, `lastName` is a variable in the same imported module from the previous example:

```
import { returnHi, lastName, middleName } from './utils.js';
```

You would now have access to the `returnHi` function and both the `lastName` and `middleName` variables.


## When to Use Named vs. Default Imports

If a module does one thing, you can use `default`.

If a module is a library of many different things, you will have to use `named`.

Note that you can do both a default plus one or more named imports in a file.