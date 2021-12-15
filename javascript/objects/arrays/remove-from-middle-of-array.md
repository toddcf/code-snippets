# Remove Items from the Middle of an Array

Let's say you have an array of bikes:

```
const bikes = ['bianchi', 'miele', 'benotto', 'panasonic', 'miyata'];
```

And you want to remove `'panasonic'`.  You can use a combination of [slice](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/arrays/splice.md) and a [spread operator](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/arrays/spread-operator.md).

```
const reducedBikes = [
  ...bikes.slice(0, 3),
  ...bikes.slice(4)
];
```

The first item in the `reducedBikes` array starts at the beginning of the `bikes` array, slices out the first three items, and adds them to the `reducedBikes` array.

The second item in the `reducedBikes` array starts at position `4` (right after `'panasonic'`) and slices everything else in the array through to the end (because no second argument is passed into the `slice()` method that time).


## Insert Items in the Middle of an Array

To do the opposite, see [Insert in Middle of Array](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/arrays/insert-in-middle-of-array.md)