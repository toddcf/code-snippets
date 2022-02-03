# Async Await

`async` and  `await` are still Promises, but their syntax is cleaner than chaining a long list of `.then()` methods to each other.

The function that generates the `new Promise` remains the same.  The difference is where you would normally be calling `.then()` methods.

You can only use `async await` inside a function that is marked `async`.

You put the word `await` in front of a Promise-based function, and it will wait for that function to finish before it continues.


## Example

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