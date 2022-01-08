# Template Literals

```
let year = 2019;
```

## OLD ES5 Version

```
'The year is ' + year;
```


## NEW ES6 Version

- Use backticks instead of quotes.
- Anywhere inside of those backticks that you want to insert a variable, use a dollar sign and and opening and closing curly brace: `${}`.

```
`The year is ${year}`;
```

You can even manipulate the variables like so:

```
`The year is ${year + 2}`;
```

This would print "The year is 2021".

In fact, any valid JavaScript expression could go inside the curly braces:

```
`The year is ${new Date().getFullYear()}`;
```


## Benefits of Using Template Literals

Easier for humans to read and edit.