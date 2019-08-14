# Destructuring

## Destructuring Objects

Destructuring objects is all about pulling out properties.

Let's say you have an object for expenses:

```
var expense = {
  type: 'Business',
  amount: '$45 USD'
};
```

If you want to access the values inside that object, you would do so as follows:

### ES5 Version

```
var type = expense.type;
var amount = expense.amount;
```

### ES6 Version

```
const { type } = expense;
const { amount } = expense;
```

This is essentially saying, "I want to create a new variable called 'type,' and I want it to reference the `expense.type` property."

Note that we are NOT creating an object by putting curly braces to the left of the equals sign.

#### Destructuring

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

Destructuring of arrays is all about pulling out individual elements.

```
const companies = [
  'Google',
  'Facebook',
  'Uber'
];
```

Note that unlike destructuring an object, where you put the variable name inside the curly braces of an object, when you are destructuring an array, the variable name goes inside square brackets:

```
const [ name ] = companies;
```

However, even though `{ name }` will return `undefined` because there is no property called `name`, you *can* pull other properties that *do* exist, such as `{ length }` -- because an array has a length.

The order we place the elements in the array is the order in which we'll get them back. For example, in the above snippet, `name` would return `Google`. To get the other names:

```
const [name, name2, name3];
```

`name` would return `Google`.
`name2` would return `Facebook`.
`name3` would return `Uber`.

Note that using destructuring to get the first element of an array is cleaner syntax than...

```
const firstCompany = companies[0];
```

### Destructuring Arrays and Using a Spread Operator

```
const [ name, ...rest ] = companies;
```

Now if you view `rest;`, you will get the other two companies:

```
['Facebook', 'Uber']
```

To take this even further, if you keep adding variables (such as `name2`)...

```
const [ name, name2, ...rest ] = companies;
```

...there will be fewer companies remaining when you view `rest;`:

```
['Uber']
```

## Destructuring Arrays and Objects Simultaneously

### Example: Get location of first company

This time, let's say we have an array of companies -- but they are stored as objects:

```
const companies = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];
```

Here's how you would access Google's location:

```
const [ { location } ] = companies;

location;
```

This is utelizing two sets of destructuring, and it works from the outside in -- in this case, that means square brackets, then curly braces.


### Example: Get first location of a company

This time, let's say we have an array of several of Google's office locations:

```
const google = {
  locations: ['Mountain View', 'New York', 'London']
};
```

And let's say you want to access 'Mountain View':

```
const { locations: [ location ] } = google;

location;
```

Which will return:

```
Mountain View
```

This is tricky. You're basically saying, "Get the `locations` property. It's going to return an array. Then pull the first element out that array."


## When to Use Destructuring


### Example: Allowing a Function to Accept a Multitude of Arguments in Any Order

Let's say you write a function that takes in new user signup info:

```
function signup(username, password, email, dob, city) {

}

signup('Todd', 'password12345', 'todd@example.com', '1/1/1990', 'Los Angeles');
```

As you can see, there are quite a few arguments. And the more there are, the easier it is to screw up their order. What if you accidentally pass in the dob before the email address?

Instead of passing a list of strings, you can pass in an object that contains all these properties:

```
const user = {
  username: 'Todd',
  password: 'password12345',
  email: 'todd@example.com',
  dob: '1/1/1990',
  city: 'Los Angeles'
}
```

Now, instead of passing in a list of strings, you can just pass in the whole object:

```
signup( user );
```

NOW, you can destructure all of the properties off of the function's first argument. You can do this just by wrapping them in curly braces:

```
function signup( { username, password, email, dob, city } ) {

}
```

You are now pulling all of those properties off the `user` object. You no longer have to worry about the order of arguments that you are passing into the function! Whenever you destructure properties, the order no longer matters.


### Example: Changing the Format of Data

Let's say you have an array containing more arrays, which are data points of `x` and `y` coordinates:

```
const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];
```

And let's say you want to convert those into objects with key/value pairs instead, like this:

```
const points = [
  {x: 4, y: 5},
  {x: 10, y: 1},
  {x: 0, y: 40}
];
```

Rather than use a for loop, you can use map:

```
points.map(pair => {
  const x = pair[0];
  const y = pair[1];
});
```

Which can be destructured as follows:

```
points.map(pair => {
  const [ x, y ] = pair;
});
```

In fact, you can destructure in the argument rather than inside the function -- and inside the function you can return the object format you desire:

```
points.map(([ x, y ]) => {
  return { x: x, y: y }
});
```

AND, because your keys and values are identical to each other, they can be further reduced in ES6:

```
points.map(([x, y]) => {
  return { x, y };
});
```

This will return:

```
[{"x":4,"y":5},{"x":10,"y":1},{"x":0,"y":40}]
```