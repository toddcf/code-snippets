# Generators

A generator is a function that can be exited and entered multiple times.

Normally, we call a function, it runs, and then it's finished.

With generators, we can run some code, return a value, and then go right back into the function at the same place that we left it.

Stephen Grider calls generators "the mother lode of ES6, by far the most brain-bending feature."


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