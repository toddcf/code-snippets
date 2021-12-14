# Shift / Unshift

## Unshift

ADDS an item to the *beginning* of an array. (To add an item to the *end* of an array, see `push`.)


### Alternative to Unshift

If you don't want to mutate the original array, you can make a copy of it (using the spread operator) and then add the new item before it:

```
const friends = ['Todd', 'Sammy', 'Kit'];
const friendsPlus = ['Ted', ...friends];
```

The above example will result in a new array called `friendsPlus` that contains `['Ted', 'Todd', 'Sammy', 'Kit']`.


## Shift

REMOVES (and `return`s) the *first* item of an array. (To remove the *last* item of an array, see `pop`.)

`colors.shift();` will remove the first element from the `colors` array.

## Name Origins

From older programming languages with "stacks" and "queues."

*An easy way to remember the difference is that the longer word makes the array longer.*