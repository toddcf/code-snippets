# Object Reference vs. Value

When you store the same string in two different variables (or store the first variable in the second variable), the two variables will be equal to each other (just as you would expect):

```
const name1 = 'wes';
const name2 = 'wes';
// Or: const name2 = name1;
(name1 === name2) // true
```

This is because the actual value of the string was stored in the variables.

But if you store two identical objects in variables, the two variables will *not* be equal to each other.  This is because the actual value of the object is *not* stored in the variables -- a *reference* to each object is stored.

```
const object1 = {
  first: 'wes',
  last: 'bos'
}
const object2 = {
  first: 'wes',
  last: 'bos'
}
(object1 === object2) // false
```