# Push-Pop

## Push

`Push` adds to the *end* of an array. (To add to the *beginning* of an array, see `unshift`.)

`colors.push( "green" );` would add `"green"` to the end of the `colors` array.


### Alternative to Push

If you don't want to mutate the original array, you can make a copy of it (using the spread operator) and then add the new item:

```
const friends = ['Todd', 'Sammy', 'Kit'];
const friendsPlus = [...friends, 'Ted'];
```

The above example will result in a new array called `friendsPlus` that contains `['Todd', 'Sammy', 'Kit', 'Ted']`.


## Pop

`Pop` removes (and `return`s) the *last* item of an array. (To remove the *first* item of an array, see `shift`.)

So when you execute `colors.pop();`, it pulls the last element out of the `colors` array and displays it.

## Name Origins

From older programming languages with "stacks" and "queues."

*An easy way to remember the difference is that the longer word makes the array longer.*