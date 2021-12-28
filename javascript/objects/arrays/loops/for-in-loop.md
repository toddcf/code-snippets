# For In Loop

Returns the keys of an object.  (Used for looping over the keys of an object.)


## Syntax

```
const wes = {
  name: 'Wes',
  age: 100,
  cool: true,
}
for (const prop in wes) {
  console.log(prop);
}
```

Will return the keys (not the values):

```
name
age
cool
```


## When to Use a For In Loop

This is not better or worse than using `Object.keys()`, `Object.entries()`, or `Object.values()`.

But a For In Loop will grab from the object's prototype, whereas those other methods will not.