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


## Example

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