# Console

`console` is a built-in JavaScript object.


## Console Methods

`console` contains several methods, which is what we call functions when they are stored inside an object.  Here are several of them:


### console.log

`console.log()` is probably the most common.  It simply logs a message to the browser's console.

```
console.log('This text will appear in the browser's console.');
```

You can log strings, numbers, variables, objects, functions, arrays, etc.


### console.info

`console.info()`.


### console.error

`console.error()` just changes what your message looks like in the console, typically to a red font.


### console.warn

`console.warn()` is similar to `console.error()` except that it gives a yellow triangle icon and a yellow background.


### console.table

If you have a set of objects, and they are all formatted consistently with each other, `console.table()` can print them to the console as a table.  Try running this in the browser:

```
const people = [
  {name: 'Wes', cool: true, country: 'Canada'},
  {name: 'Scott', cool: true, country: 'Murrica'},
  {name: 'Snickers', cool: false, country: 'Dog Country'}
];

console.table(people);
```

This can make it easier to understand data.


### console.count

`console.count()` is good for incrementing a count of how many times a block of code has been called.

```
function counter() {
  console.count('Iteration');
}
```

Each time you invoke `counter();`, it will print `Iteration: 1`, `Iteration: 2`, `Iteration 3`, etc. to the console.  Much easier than having to write out that syntax yourself in a console.log.


### console.group & console.groupEnd & console.groupCollapsed

Helpful if you have many things to print to the console and you want to print them out as one group instead of individually.

```
function doALotOfStuff() {
  console.group('Doing some stuff'); // The start of the group.
  console.log('Just letting you know.')';
  console.warn('Look out.');
  console.error('Too late!');
  console.groupEnd('Doing some stuff'); // End of the group -- pass the same string you used to start the group.
}
```

These will all print to the console inside of one collapsable message.

One use case for this:

```
const people = [
  {name: 'Wes', cool: true, country: 'Canada'},
  {name: 'Scott', cool: true, country: 'Murrica'},
  {name: 'Snickers', cool: false, country: 'Dog Country'}
];

people.forEach((person, index) => {
  console.group(`${person.name}`);
  console.log(person.country);
  console.log(person.cool);
  console.log(`Done!`);
  console.groupEnd(`${person.name}`);
});
```

This will print the name of each person as a group, and nested inside each one will be their respective country, coolness, and the word "Done!"

When you have a lot of data and you want to default these outputs to the collapsed state, you can replace `console.group` with `console.groupCollapsed`:

```
people.forEach((person, index) => {
  console.group(`${person.name}`);
  console.log(person.country);
  console.log(person.cool);
  console.log(`Done!`);
  console.groupEnd(`${person.name}`);
});
```


### console.time and console.timeEnd

You can log the amount of time from a starting and ending point of your choosing.  This is useful if you want to compare multiple methods to see which is more performant.

Pass the same string identifier into each one so it knows which start and end times relate to each other.

```
console.time('Function #1');
const function1 = () => {
  // Code here.
}
function1();
console.timeEnd('Function #1');
```

This will print ONE timestamp to the console like this: `Function #1: xxxxxx ms` (with the number of milliseconds where the xxxx are).