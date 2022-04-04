# Object Reference vs. Value

When you store the same string in two different variables (or store the first variable in the second variable), the two variables will be equal to each other (just as you would expect):

```
const name1 = 'wes';
const name2 = 'wes';
// Or: const name2 = name1;
(name1 === name2) // true
```

This is because the actual value of the string was stored in the variables.

But if you store two identical objects (same goes for arrays and functions -- they are objects, too) in variables, the two variables will *not* be equal to each other.  This is because the actual value of the object is *not* stored in the variables -- a *reference* to each object is stored.

```
const person1 = {
  first: 'wes',
  last: 'bos'
}
const person2 = {
  first: 'wes',
  last: 'bos'
}
(person1 === person2) // false
```


This also means that if you store one (object) variable in the other, you're not making a copy of it, you're storing a reference to the other variable.  Once you've done that, if you edit one, you edit both:

```
const person3 = person1;
person3.first = 'Larry';
person3.first; // 'Larry' -- as expected
person1.first; // 'Larry' -- NOT as expected
```


Passing an object into a function, and using the function to modify that object, will result in the same phenomenon: the original object will be modified, too, since it is being referenced rather than copied.

```
const meatInventory = {
	bacon: 2,
	sausage: 3,
}
const veggieInventory = {
	lettuce: 5,
	tomatoes: 3,
}
const inventory = { ...meatInventory, ...veggieInventory};
/*
// Will result in:
{
  bacon: 2,
  sausage: 3,
  lettuce: 5,
  tomatoes: 3
}
*/
function updateInventory(data) {
  data.tomatoes = 3000;
}
updateInventory(inventory);
/*
// inventory will now be:
{
  bacon: 2,
  sausage: 3,
  lettuce: 5,
  tomatoes: 3000
}
*/
```


## How to Copy an Object

If you do want to make a copy of an object instead of referencing the same object, you could use a spread (newer, more concise) or `Object.assign()` (older, less concise).


### Spread

Split this out and merge with the existing [Spread](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/arrays/spread-operator.md) document:

```
const person3 = { ...person1 };
```

This will copy each key/value pair of the `person1` object (or array) into the new `person3` variable.


### Object.assign()

```
const person3 = Object.assign({}, person1);
```

This creates a new empty object, then folds `person1` into it.  This gets stored in the new `person3` variable.


### Caveat: Shallow Copy

Making a copy of an object only works one level deep -- known as a "shallow copy."  If you have an object within an object, and you update that on the copy, it will also update the original.

```
const person1 = {
  first: 'wes',
  last: 'bos',
  clothing: {
    shirts: 10,
    pants: 2
  }
}
const person3 = { ...person1 };
person3.clothing.shirts = 100;
person1.clothing.shirts; // Will now also equal 100.
```

If you do need to copy all the levels, this is called a "deep clone" or "deep copy."


### Deep Clone / Deep Copy

One way is to use the utility library such as [Lodash](https://lodash.com/).  Typically needs to work with something like "unpkg" (short for "unpackage").  (Using modules, you can load just the portions you need.)