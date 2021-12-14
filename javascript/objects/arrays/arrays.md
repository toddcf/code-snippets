# Arrays

An array is an object that is used to hold a list of items (key/value pairs) where the order matters. Each key is always a chronological number (starting with 0).

Whereas objects are contained within curly braces `{}`, arrays are contained within square brackets `[]`.

Each item in the array is separated by a comma.


## Creating an Array

You can create an array literal (most common): `const arr = [];`

Or you can create a new array object: `const arr = new Array();`


## Array Items

Each key/value pair inside an array is called an item. Each item can be any type -- string, number, boolean, object, even another array.


## Array Index

Each item's position in an array is called its "index."


## Type

Arrays are a type of object, so running `typeof` on an array will return `"object"`.

If you need to determine than the element is specifically an array, you can use the `Array.isArray()` static method and pass the name of the array into it:

```
const friends = ['Todd', 'Sammy', 'Kit'];
Array.isArray(friends); // returns true
```


## Accessing Items in an Array

Use the index number:

```
const friends = ['Todd', 'Sammy', 'Kit'];
const kit = friends[2]; // Remember that the first item's index is 0.
```


## Array Length

`array.length` returns the total number of items inside the array.

Note that this will start counting at 1 instead of 0. So it is different than the index.

You can also edit the max length of an array by doing this:

```
const names = ['Bowser', 'Mario', 'Luigi'];

names.length = 2;
```

In this case, Luigi will be omitted from the array.

### Shortcut to Finding the Last Item in an Array

```
names[names.length - 1];
```

This will return the item at the last index number of the array.  (Remember, you must subtract 1 because the indexes are zero-based and the `.length` method is not.)


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

You can store strings, numbers, variables, objects, functions, and even other arrays inside an array:

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

### Accessing Inner Arrays

To access an array item inside an array: `stuff[3][0]` in the above example would give you `inner array item 1`.

### Accessing Functions Inside Arrays

```
const stuff = [
  'first item',
  function() { alert('Hi'); },
  'last item'
];
```

To run this function:

`stuff[1]();`


## Mutable Array Methods

Some array methods are "mutable methods," meaning that they actually change the array that they are called on.


### reverse()

```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersReversed = numbers.reverse();
```

Now `numbersReversed` will be `[9, 8, 7, 6, 5, 4, 3, 2, 1]`, which is no surprise.

However, the original `numbers` array is now also `[9, 8, 7, 6, 5, 4, 3, 2, 1]`, because it has been mutated by having the `reverse()` method called on it.

Which means that when you use a mutable method such as `reverse()`, you actually don't need to store it in a new variable if you don't want to.  You can simply do this:

```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.reverse();
```

And `numbers` will now equal `[9, 8, 7, 6, 5, 4, 3, 2, 1]`.

This is neither good nor bad, you simply need to be aware of this result in your coding so that nothing unintended happens.

If you still need the original array, make a copy of it and mutate the copy instead:

```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversedNumbers = [...numbers]; // Use a spread.
reversedNumbers.reverse(); // Mutates the copy instead of the original "numbers" array.
```

NOTE: You can even reduce the last two lines of code down to one by calling `reverse()` directly on the spread operator:

```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversedNumbers = [...numbers].reverse();
```


## Immutable Array Methods

Other array methods leave the original array intact.  These are known as "immutable" methods.


### slice();

```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const slicedValues = numbers.slice(2, 4); // returns [3, 4]
```

`slice()` takes in the starting and end points of the array items you want to get.  It "slices" out and returns those two items and everything in between. (More on this in the [Slice](https://github.com/toddcf/code-snippets/blob/master/javascript/arrays/slice.md) document.)

But the point here is that while it returns a new array containing the slices values, the original array it sliced them from remains intact.