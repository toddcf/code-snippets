# Slice

`slice()` takes a section of an array, like taking a slice of pizza takes a section of pizza out of the whole pie.

Let's say you have an array of fruits:

`var fruits = [ "banana", "orange", "lemon", "apple", "mango" ];`

You can use `slice();` to copy the second and third fruits by passing in the indexes where the desired elements start and end:

`var citrus = slice( 1, 3 );`

Note that these slices indicate the space between each element where the slice should happen, so `3` is the space between `"lemon"` and `"apple"`.

This DOES NOT alter the original `fruits` array:

```
citrus = [ "orange", "lemon" ];
fruits = [ "banana", "orange", "lemon", "apple", "mango" ];
```

You can also use `slice();` to copy an entire array by not passing anything into it:

```
var nums = [ 1, 2, 3 ];
var duplicateNums = nums.slice();
```

Now both `nums` and `duplicateNums` are `[ 1, 2, 3 ]`.