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

When something happens inside your promise that causes the `reject()` function to be invoked . . .

```
let promise = new Promise(resolve, reject) {
  reject();
}
```

. . . the `catch()` method will be invoked.  Rather than throwing an error in the browser, Whatever you've put in your `.catch()` method (in this case, print `Something went wrong.`) will happen, because you've built in your graceful degradation.


## One Catch to Handle Them All

If you have a chain of `.then()` methods, you don't need to write an individual `.catch()` for each one.  You can just chain a single `.catch()` method to the end of the chain, like in the above example.

HOWEVER . . .

If you have several `.then()` methods on your chain, and one in the middle throws an error, it will invoke `.catch()` and will not run the rest of the `.then()` methods.  If this is what you want, then that is a good thing.

But if it's not what you want, do not chain multiple `.then()` methods to each other.  Instead, use [.all()](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/promise/promise-methods/all.md), [.allSettled()](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/promise/promise-methods/allSettled.md), or [.race()](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/promise/promise-methods/race.md), depending on your needs.