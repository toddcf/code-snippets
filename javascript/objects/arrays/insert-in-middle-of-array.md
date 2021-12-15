# Inserting Items in the Middle of an Array

There is no direct method for inserting items in the middle of an array, but you can use a combination of [slice](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/arrays/splice.md) and a [spread operator](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/arrays/spread-operator.md).


## Example

Let's say you have an array of bikes:

```
const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
```

And you want to insert `'benotto'` in the middle.  You can use a spread operator and slice together and store the result in a new variable:

```
const newBikes = [
  ...bikes.slice(0, 2),
  'benotto',
  ...bikes.slice(2)
];
```

The first part of this array starts at the beginning of the `bikes` array, slices out the first two items, and inserts them into the `newBikes` array.

The second part manually adds the `'benotto'` string to the `newBikes` array after the first two items.

The third part starts at the third item (`2` is right before the third item) in the `bikes` array.  Since no other argument is passed into the slice method, it just goes to the end of the `bikes` array, taking everything.  And those items get added to the `newBikes` array.

So the result is that `newBikes` equals `['bianchi', 'miele', 'benotto', 'panasonic', 'miyata']`.


## Removing Items from the Middle of an Array

To do the opposite, see [Remove Items from Middle of Array](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/arrays/remove-from-middle-of-array.md).