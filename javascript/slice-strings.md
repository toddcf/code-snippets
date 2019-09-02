# Slice (Strings)

(See also `slice.md` in the `arrays` directory.)

The `slice()` method removes (and `return`s) a portion of a string. The general syntax structure is:

```
slice( startPosition, endPosition );
```

But the end is optional.


## Example

```
let str = 'Here is some text.';

let result = str.slice(1, 7);

console.log(result);
```

This will print `ere is` in the console. (Remember that `0` is the first position.)


## Start

If you just enter a starting point (`slice( 3 )`), it will give you everything from that starting position to the end of the whole string.


## Last Characters of a String

If you want to get the last few characters of a string, use a negative number:

```
slice( -3 );
```

This will give you the last three characters of the string. In other words, we told our script to start at the third to last character, and we didn't specify an end, so it went all the way to the end.


## Getting Everything Except the First and Last Characters

You can also use a negative at the end. Let's say you want to get everything EXCEPT the first two and last two characters of a string:

```
let str = 'xxHere is some text.xx';

let result = str.slice( 2, -2);

console.log(result);
```

This will give you `Here is some text.`.