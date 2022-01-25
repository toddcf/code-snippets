# Catch

Just like `.then()`, you have access to the `.catch()` handler as well, and you need to use both.  You are telling the system what to do whether the promise is resolved or rejected.

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