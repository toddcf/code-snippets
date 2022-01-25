# Catch

`.catch()` is a method for the [Promise](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/promise/promise-overview.md) object that tells the system what to do when the promise is rejected.

It is used in conjunction with the [then](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/promise/promise-methods/then.md) method (which tells the system what to do when the promise is resolved successfully).

```
promise
  .then(() => {
    console.log('Finally finished!');
  })
  .then(() => {
    console.log('Second THEN in the chain has also been run.');
  })
  .catch(() => {
    console.log('Something went wrong.');
  });
```

Now if you call . . .

```
let promise = new Promise(resolve, reject) {
  reject();
}
```

. . . the console will print `Something went wrong.`.  No error message will be thrown this time, because you've built in your graceful degradation.