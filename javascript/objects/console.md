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


### console.group

