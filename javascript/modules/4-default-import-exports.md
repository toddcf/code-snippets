# Default Import / Exports

Unlike named exports, you can only have one default export per module.


## How to Export as a Default

Use the `default` keyword:

```
const person = {
  firstName: 'Wes',
  lastName: 'Bos'
}

export default person;
```


## How to Import a Default Exports

Use the `import` keyword, then make up any variable name you want to use to reference it in the document you are importing into.

```
import instructor from './wes.js';
```

NOTE: Default imports *do not* go inside curly brackets.  (Only named imports do that.)


### When to Use Named vs. Default Imports

If a module does one thing, you can use `default`.

If a module is a library of many different things, you will have to use `named`.

Note that you can do both a default plus one or more named imports in a file.