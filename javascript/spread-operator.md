# Spread Operator

`...`


## Example: Color Arrays

Let's say you have two arrays of colors: one for default colors, and one for favorite colors.

```
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
```

And let's say you want to combine them all into one array so you can see all the colors in one place. But if you just do this...

```
[ defaultColors, userFavoriteColors ];
```

...the result will be this:

```
[['red', 'green'], ['orange', 'yellow'];
```

In other words, two arrays inside of one array.

To remove them from their original arrays and combine them into your new array, you can use the spread operator as follows:

```
[ ...defaultColors, ...userFavoriteColors ];
```

This will create a new array and output:

```
['red', 'green', 'orange', 'yellow'];
```


## Spread vs. Rest Operators

The Spread Operator is used to flatten or spread variables out.

The Rest Operator is used to gather them together.