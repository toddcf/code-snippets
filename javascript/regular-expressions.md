# Regular Expressions

A regular expression lets you find patterns in text.

This is useful for searching through text, validating user input, and replacing text.

Regular expressions are also called `regex`, `regexp`, and `regexes`.

They result in very clean code.


## General Format

```
/pattern/modifiers
```

The `pattern` is the text you want to match.

The `modifiers` are things you can add to modify how the matches happen.

- `/hello/g`: The `g` modifier means `global`, so this would match all instances of `hello` in a string (and not just the first one).
- `/hello/`: There is no modifier, so it will match just the first instance of `hello`.
- `/hello/i/`: The `i` modifier means `case-insensitive`, so it will match any instance of `Hello`, `hello`, `hEllo`, etc.
- `/hello/ig/`: There are two modifiers, so both the `i` and `g` will be applied: `case-insensitive` and `global`.

The order *does not* matter,  `/hello/ig/` is the same as `/hello/gi/`.


## Example: Match

Used with `match`:

```
const str = 'Hi, here\'s some text. Hi again. Also, hi.';

let result = str.match(/hi/ig);

console.log(result);
```

This will print an array containing all instances of `hi` to the console.

Note that you could alternatively just use `match` to tell you whether or not there are any matches (without returning a list of them in an array):

```
const str = 'Hi, here\'s some text. Hi again. Also, hi.';

if (str.match(/hi/ig)) {
  console.log('We found it.');
}
else {
  console.log('We did not find it.');
}
```


## Example: Replace

```
const str = 'Hi, here\'s some text. Hi again. Also, hi.';

let result = str.replace(/hi/ig, 'BYE');

console.log( result );
```

This will print `BYE, here's some text. BYE again. Also, BYE.` to the console.


## Example: Replace (including conditions)

Just like the above example, except that `replace` allows you to run a function on each value that matches the pattern:

```
const str = 'Hi, here\'s some text. Hi again. Also, hi.';

let result = str.replace(/hi/gi, function(currentValue) {
  if (currentValue === 'Hi') {
    return 'Bye';
  }
  else {
    return 'bye';
  }
});

console.log(result);
```


## Example: Words with Five or More Characters

You could also use a regular expression to find all the words with five or more characters:

```
const str = 'Hi, here\'s some text. Hi again. Also, hi.';

let result = str.match(/\w{5,}/ig);

console.log(result);
```

This would return `["again"]`.