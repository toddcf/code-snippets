# Async Await

`async` and  `await` are still Promises, but their syntax is cleaner than chaining a long list of `.then()` methods to each other.

The function that generates the `new Promise` remains the same.  The difference is where you would normally be calling `.then()` methods.

You can only use `await` *inside* a function that is marked `async`.  (You can mark any type of function `async` -- function declarations, arrow functions, callback functions, methods, etc.  See the various syntaxes for each toward the end of this document.)

You put the word `await` in front of a Promise-based function, and it will wait for that function to finish before it continues.  (You cannot use `await` anywhere else except inside functions marked `async`.)


## Example 1 - Single Await

```
const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

async function go() {
  console.log('Starting');
  await wait(2000);
  console.log('Ending');
}

go();
```

The above code will console.log `Starting`, wait two seconds, and then console.log `Ending`.


## Example 2 - Multiple Awaits

```
const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

async function go() {
  console.log('Starting');
  await wait(2000);
  console.log('Running');
  await wait(2000);
  console.log('Ending');
}

go();
```

The above code will console.log `Starting`, wait two seconds, then console.log `Running`, then wait two more seconds, and then finally console.log `Ending`.


## Function Declaration Syntax

Just like the example above:

`async function go() {};`


## Arrow Function Syntax

`const go = async () => {};`


## Callback Function Syntax

`window.addEventListenter('click', async function() {});`


## Method Syntax

```
const person = {
  sayHi: async function() {

  }
}
```


## Method Shorthand Syntax

```
const person = {
  async sayHi() {

  }
}
```


## Function Property Syntax

```
const person = {
  sayHi: async () => {

  }
}
```