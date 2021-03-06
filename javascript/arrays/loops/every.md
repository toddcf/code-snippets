# Every

Condense everything in an array down into a single value -- a true or false. You are basically asking, "Do ALL the records match my criteria?"

*NOTE: This is a close cousin of "some."*


## Example: Find all Computers with at Least 16GB of RAM

Let's say you need to install some software that requires at least 16GB of RAM.

```
var computers = [
  {name: 'Apple', ram: 24},
  {name: 'Compaq', ram: 4},
  {name: 'Acer', ram: 32}
];
```

Just by eyeballing it, you can see that the Apple and Acer will fit the criteria, and the Compaq will not.

Using `filter` would return a list of the computers with at least 16GB of RAM. But maybe you don't want that much info returned -- maybe you just want to know whether or not EVERY computer fits this criteria.

So we'll create a boolean variable that tells whether or not ALL computers can run the program. We'll assume they all can by default, and will only change that to false if we find any that can't.

```
var allComputersCanRunProgram = true;
```

### The OLD for loop Way:

```
for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  // If even one computer has less than 16GB of RAM, allComputersCanRunProgram is automatically set to "false."
  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  }
  else {
    allComputersCanRunProgram = true;
  }
}
```


### The BETTER every Way:

```
computers.every(function(computer) {
  return computer.ram >= 16;
});
```

In this case, the function returns `true` if ALL computers are compatible, and `false` if some or none of the computers are compatible.


## Example: Names with Length of Greater Than Four Characters

Do ALL of the names in this array have a length of more than four characters?

```
var names = [
  'Alexandria',
  'Matthew',
  'Joe'
];

names.every(function(name) {
  return name.length > 4;
});
```

No. This will return `false`, because ONE of the names has less than four characters.


## When to Use every

In all-or-nothing situations where you just want to know whether a condition applies to everything or not. You are basically asking, "Do ALL the records match my criteria?"

It is the equivalent of checking all the conditions with `&&`. (By contrast, the `some` helper is the equivalent of checking all the conditions with `||`.)

You could use this to validate a sign-in form: Does EVERY field have a value with a length greater than zero? (This is easier than having to write code to check every single individual field by name -- and having to update that code if the field names are ever changed, or fields are added or removed.)