# allSettled()

The `.allSettled()` method takes in an array of promises and waits to return all the results when the last one is finished running, whether each one was resolved or rejected.

```
// function makePizza . . . etc. here

const p1 = makePizza(['pepperoni']); // This pizza will be baked successfully.
const p2 = makePizza(['anchovies']); // This pizza will be rejected because anchovies are prohibited.

const dinnerPromise2 = Promise.allSettled([p1, p2]);
dinnerPromise2.then(results => {
  console.log(results);
});
```

This will return an array of the results.  The first item in the array will be the promise result for `p1`, which is the fulfilled pepperoni pizza.  The second item in the array will be the promise result for `p2`, which is the rejected anchovie pizza.


## Difference Between .allSettled() and .all()

[.all()](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/promise/promise-methods/all.md) will assume that everything in the array is supposed to resolve successfully, and that if they don't, you want your `.catch()` method to be invoked.  