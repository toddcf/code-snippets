# Arrays

## Array Index


## Array Length

Note that running `array.length` will count the number of items inside the array -- meaning it will start counting at 1 instead of 0. So it is different than the index.

You can also edit the max length of an array by doing this:

```
const names = ['Bowser', 'Mario', 'Luigi'];

names.length = 2;
```

In this case, Luigi will be omitted from the array.


## Add a Value to an Array

Similar to declaring a variable, just add an index that doesn't exist yet. For example, if the array doesn't have a fourth index yet:

`friends[4] = "Emma";`

Note that if you choose an index that is several numbers larger than the last index currently in the array, the system will have to create placeholder indeces in between, each of which will be `undefined`.

To add an element to the end of an array without having to count how many elements are already in there, use `push()` (see separate md file).


## Change an Existing Value Inside an Array

You can change the value of an array index the same way you would a variable, like this:

`friends[1] = "Charlie";`

This works even if an array value doesn't exist yet:

```
const names = ['Bowser', 'Mario', 'Luigi'];

names[3] = 'Donkey Kong';
```

This will result in `names = ['Bowser', 'Mario', 'Luigi', 'Donkey Kong'].`

You can even add a value further down the array, and empty slots will be added in between:

```
names[7] = 'Toad';
```

...will result in: `names = ['Bowser', 'Mario', 'Luigi', 'Donkey Kong', empty = 3, 'Toad']`.


## Almost Anything Can Be Stored Inside an Array

You can store strings, numbers, variables, objects, and even other arrays inside an array:

```
let x = 'This is X';

let stuff = [
  'strings work',
  12,
  x,
  ['inner array item 1', 'inner array item 2'],
  'last item'
];
```

And to access an array item inside an array: `stuff[3][0]` would give you `inner array item 1`.