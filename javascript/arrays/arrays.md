# Arrays

## Array Index

## Array Length

Note that running `array.length` will count the number of items inside the array -- meaning it will start counting at 1 instead of 0. So it is different than the index.

## Add a Value to an Array

Similar to declaring a variable, just add an index that doesn't exist yet. For example, if the array doesn't have a fourth index yet:

`friends[4] = "Emma";`

Note that if you choose an index that is several numbers larger than the last index currently in the array, the system will have to create placeholder indeces in between, each of which will be `undefined`.

To add an element to the end of an array without having to count how many elements are already in there, use `push()` (see separate md file).

## Change an Existing Value Inside an Array

You can change the value of an array index the same way you would a variable, like this:

`friends[1] = "Charlie";`

