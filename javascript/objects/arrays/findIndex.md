# findIndex()

The `findIndex()` method is new for ES6.  It will return the index number of the array item you are looking for.

## Example

Let's say you have an array of people's ages:

```
const ages = [ 12, 17, 8, 21, 14, 11 ];
```

And you want to return the index numbers of each age that is over `18`:

```
console.log(ages.findIndex( cur => cur >= 18 ));
```

This example will return `3`.