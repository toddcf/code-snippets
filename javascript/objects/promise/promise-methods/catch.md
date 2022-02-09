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


## One .Catch to Handle All the .Thens

If you have a chain of `.then()` methods, you don't need to write an individual `.catch()` for each one.  You can just chain a single `.catch()` method to the end of the chain, like in the above example.

HOWEVER . . .

If you have several `.then()` methods on your chain, and one in the middle throws an error, it will invoke `.catch()` and will not run the rest of the `.then()` methods.  If this is what you want, then that is a good thing.

But if it's not what you want, do not chain multiple `.then()` methods to each other.  Instead, use [.all()](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/promise/promise-methods/all.md), [.allSettled()](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/promise/promise-methods/allSettled.md), or [.race()](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/promise/promise-methods/race.md), depending on your needs.


## Try & Catch Error Handling

You can wrap your function invokation inside a `try` and put your error handling inside the `catch`, like this:

```
function makePizza(toppings = []) {
  return new Promise(function (resolve, reject) {
    // Reject anchovies:
    if (toppings.includes('anchovies')) {
      reject('we do not make pizza with anchovies here');
    }
    const amountOfTimeToBake = 500 + (toppings.length * 200);
    setTimeout(function () {
      resolve(`Your pizza with ${toppings.join(', ')} is ready.`);
    }, amountOfTimeToBake);
  });
}
const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

function tryCatch() {
  try {
    const pizza = makePizza(['anchovies']);
  } catch(err) {
    console.log(err);
  }
}
```

But the drawback is that if you have multiple tasks inside your `try` and one of them fails, the whole thing fails.


## Async Await .Catch Error Handling

You can chain a `.catch()` onto the end of your `await`.

This method is helpful if you want to handle errors at the time that you define a function as opposed to when you call that function.

```
function handleError(err) {
  console.log('Oh, no!');
  console.log(err);
}
async function promiseCatch1() {
  const pizza = await makePizza(['anchovies']).catch(handleError);
  console.log(pizza);
}

promiseCatch1();
```

If instead you want to handle the error when the function is called, chain your .catch() to the function invokation instead of the function declaration.  (Doing it this way means you will also catch unrelated errors within the function.)

```
async function promiseCatch2() {
  const pizza = await makePizza(['anchovies']);
  console.log(pizza);
  return pizza; // When you mark a function as async, it will immediately return a PROMISE to you.  When it's NOT marked async, it is a regular function that will return the data that you want.  But this means that you can actually await an async function because it is in and of itself a Promise.
}

promiseCatch2().then(result => {
  console.log(result);
}).catch(handleError);
```

This is the variation Wes Bos uses most.


## Higher Order Function Version

A higher order function is a function that returns another function.  You combine all your functions as if you were never going to have any errors.  You don't worry about error handling inside of those functions.  Then when you need to handle your errors, you have two options: You can catch it at runtime (like in the example above), or you can make a safe function with a high order function (like in the example below).

You make a function that takes in one function (plus its error handler) and returns another function that returns the original function that was passed in with a `.catch` chained onto that.

```
function makeSafe(fn, errorHandler) {
  return function() {
    fn().catch(errorHandler);
  }
}

const safeGo = makeSafe(promiseCatch2, handleError);
safeGo();
```

This is nicer than writing the code to handle the error multiple times within the same function.