# Then

`.then()` is a method for the [Promise](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/promise/promise-overview.md) object that tells the system what to do when the promise is resolved successfully.

It is used in conjunction with the [catch](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/promise/promise-methods/catch.md) method (which tells the system what to do when the promise is rejected).


```
let promise = new Promise((resolve, reject) => {
  resolve();
});

promise.then(() => {
  console.log('Finally finished!');
});
```

The result will be that `Finally finished!` is printed to the console.

You can even chain on another `then()` like so:

```
promise
  .then(() => {
    console.log('Finally finished!');
  })
  .then(() => {
    console.log('Second THEN in the chain has also been run.');
  });
```

The result will be that both `Finally finished!` and `Second THEN in the chain has also been run.` will be printed to the console.


## Handling Multiple Promises Simultaneously

You can use the [all](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/promise/promise-methods/all.md) or [race](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/promise/promise-methods/race.md) methods to handle multiple promises at the same time.