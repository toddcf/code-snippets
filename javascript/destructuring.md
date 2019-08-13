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

fileSummary(savedFile);
```

Because you are repeating `file.` multiple times, this can be reduced even further using destructuring:

