# Some

Condense everything in an array down into a single value -- a true or false. You are basically asking, "Do ANY the records match my criteria?" Or, "Does AT LEAST ONE thing in this array match my criteria?"

*NOTE: This is a close cousin of "every."*


## Example: Find Out if ANY Computers Have at Least 16GB of RAM

Let's say you need to install some software that requires at least 16GB of RAM.

```
var computers = [
  {name: 'Apple', ram: 24},
  {name: 'Compaq', ram: 4},
  {name: 'Acer', ram: 32}
];
```

Just by eyeballing it, you can see that the Apple and Acer will fit the criteria, and the Compaq will not.

Using `filter` would return a list of the computers with at least 16GB of RAM. But maybe you don't want that much info returned -- maybe you just want to know whether you have ANY computers that fit this criteria.

So create two boolean variables: one for whether or not ALL computers can run the program, and one for whether SOME can. We'll assume they all can by default, and will only change that to false if we find any that can't.

```
var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;
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
    onlySomeComputersCanRunProgram = true;
  }
}
```


### The BETTER some Way:

```
computers.some(function(computer) {
  return computer.ram >= 16;
});
```

In this case, the function returns `true` if ALL computers are compatible, and `false` if some or none of the computers are compatible.


## Example: Names with Length of Greater Than Four Characters

Do ANY of the names in this array have a length of more than four characters?

```
var names = [
  'Alexandria',
  'Matthew',
  'Joe'
];

names.some(function(name) {
  return name.length > 4;
});
```

Yes. This will return `true`, because AT LEAST ONE of the names has more than four characters.


## When to Use some

You are basically asking, "Do ANY the records match my criteria?"

It is the equivalent of checking all the conditions with `||`. (By contrast, the `every` helper is the equivalent of checking all the conditions with `&&`.)