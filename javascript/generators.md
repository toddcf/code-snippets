# Generators

A generator is a function that can be exited and entered multiple times.

Normally, we call a function, it runs, and then it's finished.

With generators, we can run some code, return a value, and then go right back into the function at the same place that we left it.

Stephen Grider calls generators "the mother lode of ES6, by far the most brain-bending feature."

NOTE: ARRAY HELPERS SUCH AS MAP AND FOREACH DO NOT WORK WITH GENERATORS.


## Syntax

The syntax is the same as any other function, except there is an asterisk either right after the `function` keyword:

```
function* shopping() {

}
```

...Or right before the name of the function:

```
function *shopping() {

}
```

And inside the generator, we use the `yield` keyword:

```
function* shopping() {
  
  // first block of code
  
  yield;

  // second block of code

}
```

The `yield` keyword is where you exit the generator, and where you'll re-enter.

To call a generator function:

```
const gen = shopping();
gen.next();
```

Nothing begins to execute until `gen.next();`.

When it hits `yield`, it pauses the generator and exits. It runs the next bit of code outside of the generator after `gen.next();`, until it hits the next instance of `gen.next();`. At this point, it re-enters the generator where it left off.

Here's the whole thing together, with more syntax. Let's say you're walking down the sidewalk with cash. You enter a store, spend the cash, and return to the sidewalk with groceries. Then you enter a laundromat, pick up your clean clothes, and return to the sidewalk with both your groceries and clean clothes.

```
function* shopping() {

  // Walking down the sidewalk with cash

  // Enter store with cash:
  const stuffFromStore = yield 'cash';

  // Resume walking down the sidewalk, this time with groceries instead of cash.

  // Enter laundromat:
  const stuffFromLaundromat =  yield 'laundry';

  // Resume walking down sidewalk with groceries and clean clothes.

  // Return home with groceries and laundry:
  return [stuffFromStore, stuffFromLaundromat];
}

const gen = shopping();

// Begin executing the generator:
gen.next();

// Walk into store and purchase groceries.

// Exit the store with groceries -- in other words, return to the generator where you left off:
gen.next('groceries');

// Walk into laundromat and pick up clean clothes.

// Exit the laundromat with clean clothes -- in other words, return to the generator where you left off:
gen.next('clean clothes');

```

You can use multiple yield statements to exit the generator multiple times.


### Example: Colors

```
function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const gen = colors();

gen.next();
gen.next();
gen.next();
gen.next();
```

Notice that you call `gen.next();` four times. These will return:

```
{"value":"red","done":"false"}
{"value":"blue","done":"false"}
{"value":"green","done":"false"}
{"done":"true"}
```


## Using Generators with for of Loops

### Example: Colors

Using the same colors generator as before, you can add this code:

```
function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const myColors = [];

for (let color of colors()) {
  myColors.push(color);
}
```

Now printing `myColors;` will result in: `['red', 'green', 'blue']`.

*So every single time you hit a yield statement inside the generator, it runs the for of loop.* The first time, color is equal to 'red' (and gets pushed to the myColors array). The second time it is equal to the string 'green', and so on.

In this manner, you don't have to deal with `.next()` or the `value:` or `done: true/false`.

So generators can iterate through all sorts of data structures, not just objects and arrays.


### Example: Multi-Step Generator

Let's say you have a team of engineers:

```
const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
};
```

And let's say you'd like to iterate through ONLY the people on the team, not the entire object. (In other words, you want to iterate over the lead, the manager, and the engineer, but NOT the size and the department.)

What you do is create a generator that will take an argument of `team` and yield each of these keys:

```
function* teamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}
```

Now you can use a for of loop:

```
const names = [];

for (let name of teamIterator(engineeringTeam)) {
  names.push(name);
}
```

Now when you print `names;`, you get just `["Jill","Alex","Dave"]`.

Note that this code is reusable. So if you had another team besides the Engineering Team (let's say SEO Team), you could pass that into the for of loop as well: `for (let team of teamIterator(seoTeam)) {}`


## Delegation of Generators

Let's say you have the same engineering team as before.

But within the engineering team, you also want to have a testing team (consisting of a Lead and a Tester):

```
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
};
```

Now you're going to add the testingTeam inside the engineeringTeam object, *making sure to declare your testingTeam BEFORE you declare your engineeringTeam*:

```
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
};

const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  testingTeam: testingTeam
};
```

And some quick ES6 cleanup: Because your key/value pair of `testingTeam: testingTeam` is identical text, you can reduce it to just `testingTeam`. And then, to follow good conventions, you should move any duplicate key/value pairs to the top of the object, like so:

```
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
};
```

If you want to iterate through one object PLUS an object inside of that object, that is called "generator delegation."

Now create an iterator for just the testingTeam:

```
function* testingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}
```

And then inside `teamIterator(team)`, add a `const` called `testingTeamGenerator` to the engineeringTeam, make it call the testingTeamIterator, and pass `team.testingTeam` into it:

```
function* teamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testingTeamGenerator = testingTeamIterator(team.testingTeam);
}
```

Furthermore, you will also add a `yield*` that makes sure that testingTeamGenerator gets iterated:

```
function* teamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testingTeamGenerator = testingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator;
}
```

Finally! Your result is now: `["Jill", "Alex", "Dave", "Amanda", "Bill"]`.


## Symbol Iterator

A symbol iterator is a tool that teaches objects how to respond to the `for of` loop.

An array can be iterated over automatically. But if you have a custom object, you can use the symbol iterator to tell the for of loop how to iterate over that custom object.

If we condense the above example into one block of code, we'll see that our iterator functions are separate from the objects that represent our teams:

```
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
};

function* teamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testingTeamGenerator = testingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator;
}

function* testingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = [];

for (let name of teamIterator(engineeringTeam)) {
  names.push(name);
}

names;
```

The symbol iterator will help us merge our iterator object into our team object.

Let's begin with `testingTeam`. We'll add our symbol iterator, and inside of that we'll put our generator function.

```
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
};
```

And inside of our `teamIterator`:

```
function* teamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  yield* team.testingTeam;
}
```

We can now DELETE THE `testingTeamIterator` COMPLETELY.

When we say `yield* team.testingTeam;`, we are telling the for of loop to do its best to iterate over `testingTeam`. The for of loop is then going to go to `testingTeam` and look for a key of `[Symbol.iterator]`. And if it finds one, it will use the generator that it's pointing at for iteration.

With ES6, we can use "key interpolation." If we want to have a dynamically generated key, we can wrap it with braces.

We can now also refactor the `engineeringTeam` object to use the `[Symbol.iterator]`, which will allow us to delete `function* teamIterator(team)` completely.

```
const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead; /* Jill */
    yield this.manager; /* Alex */
    yield this.engineer;  /* Dave */
    yield* this.testingTeam;  /* delegate to iterate over testingTeam as well */
  }
};
```

We can now delete `function* teamIterator(team)` and iterate directly over the `engineeringTeam`:

```
for (let name of engineeringTeam) {
  names.push(name);
}
```

The way it works is that when the symbol iterator hits a `yield`, the value to its right (such as `this.lead`) will pop up as a value in the for of loop (such as `name`).

And if it hits another generator function (such as `yield*`), it knows to stop and iterate through that object, as well.


## Generators with Recursion

Let's create a tree:

```
class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
}

const children = [
  new Comment('good comment', []),
  new Comment('bad comment', []),
  new Comment('meh', [])
];

const tree = new Comment('Great post', children);
```

Now if you print `tree;`, you get:

```
{"content":"Great post","children":[{"content":"good comment","children":[]},{"content":"bad comment","children":[]},{"content":"meh","children":[]}]}
```

Now for the symbol iterator. Since we're working with a class this time, the syntax is a little different. And remember, array helpers do not work inside of generators. So we're going to use the `for of` loop.

We are going to tell the computer to iterate through the parent node, plus its children.

```
class Comment {
  
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }

}
```

Now we'll create a `for of` loop to iterate over the `tree` variable, and for every node inside, we want to collect all the values:

```
const values = [];

for (let value of tree) {
  values.push(value);
}
```

Now when you print `values;`, you get:

```
4
["Great post","good comment","bad comment","meh"]
```