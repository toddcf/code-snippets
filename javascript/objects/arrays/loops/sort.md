# Sort

Calling the `.sort()` method on an array sorts its items alphabetically from A to Z.


## Sorting Strings

`.sort()` is designed for sorting strings.  For example, `['a', 'z', 'e'].sort()` will return `['a', 'e', 'z']`.


## Sorting Numbers

If your array contains numbers, `.sort()` coerces them into strings and then sorts them alphabetically.  *This means that they will not necessarily be in numerical order.*

For example, `[1, 2, 3, 100, 200].sort()` will result in `[1, 100, 2, 200, 3]`.


### Workaround for Sorting Numbers

To get around this, you can write a custom function within `.sort()`:

```
const numbers = [1, 2, 3, 100, 200];
const numbersSorted = numbers.sort((firstItem, secondItem) => firstItem - secondItem);
```

The very truncated explanation of this is that you want it to sort based on whether the comparison results in a positive number, a negative number, or a zero.