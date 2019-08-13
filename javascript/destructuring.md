# Destructuring

Let's say you have an object for expenses:

```
var expense = {
  type: 'Business',
  amount: '$45 USD'
};
```

If you want to access the values inside that object, you would do so as follows:

## ES5 Version

```
var type = expense.type;
var amount = expense.amount;
```

## ES6 Version

```
const { type } = expense;
const { amount } = expense;
```

This is essentially saying, "I want to create a new variable called 'type,' and I want it to reference the `expense.type` property."

Note that we are NOT creating an object by putting curly braces to the left of the equals sign.

### Destructuring

These can be "destructured" into a single line, since they are both referencing `expense`:

```
const { type, amount } = expense;
```


## Destructuring Arguments

Let's say you have an object that contains info about an image:

```
var savedFile = {
  extension: '.jpg',
  name: 'repost',
  size: 14040
};
```

And you want to be able to print out a summary of this object:

```
function fileSummary(file) {
  return `The file ${file.name}${file.extension} is of size ${file.size}.`;
}
```

And then calling the function...

```
fileSummary(savedFile);
```

...would return "The file repost.jpg is of size 14040."

### The ES6 Deconstructing Version

Because you are repeating `file.` multiple times, this can be reduced even further using destructuring:

1. Instead of passing `file` in as an argument, you use curly braces and pass in the keys you want.
2. Instead of returning `${file.name}` and so forth, you can simply return `${name}`.

```
function fileSummary({ name, extension, size }) {
  return `The file ${name}${extension} is of size ${size}.`;
}
```

Note that when you do it this way, you are pulling properties off the *first* object that is passed into the function. Therefore, if you were passing in multiple arguments like this...

```
fileSummary(savedFile, {color: 'red'});
```

...it would only pull from `savedFile`, not `{color: 'red'}`.

If you want to pull properties from that second argument as well, you need to do something like this:

```
function fileSummary({ name, extension, size }, { color }) {
  return `${color} The file ${name}${extension} is of size ${size}.`;
}
```


## Destructuring Arrays

