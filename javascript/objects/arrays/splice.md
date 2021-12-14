# Splice

`Splice` is used to add or remove elements from anywhere in an array.

The following code will remove `"orange"` from the `fruits` array:

```
fruits = [ "banana", "orange", "lemon", "apple", "mango" ];

fruits.splice( 1, 1 );
```

The first argument passed into `splice` is the index where you want to begin the removal. (In this case, `1`, because `"orange"` is at index 1.)

The second argument is the number of elements you want to remove. Since we only want to remove one element (`"orange"`), this second argument is also `1`.

Think of it like this:

`arr.splice( startingPoint, quantityFollowingStartingPoint, );`


NOTE: Splice is mutable.  (The original array is changed.)