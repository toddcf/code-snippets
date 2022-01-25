# Then

Call `resolve();` in your promise.  And write a `promise.then();` that tells the system what to do when the promise is resolved.

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