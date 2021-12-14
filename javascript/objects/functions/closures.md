# Closures

A closure is the ability to access the parent level scope from a child scope even after the parent function has finished executing -- aka *closed*.

Let's say you have an inner and an outer function:

```
function outer() {
  const outerVar = 'Outer Variable';
  function inner() {
    const innerVar = 'Inner Variable';
    console.log(innerVar);
    console.log(outerVar);
  }
  inner();
}
outer();
```

If you run `outer();`, it creates `outerVar`, creates `innerVar()`, and then invokes `innerVar()`.  Once invoked, `innerVar()` creates `innerVar` and console logs `innerVar` and `outerVar`.  (It has the ability to console log `outerVar` because of scope lookup -- functions can access variables and functions above them but not below them.)

Closures come into play when you don't call `inner();` from inside the `outer()` function.  Instead, you call it after `outer()` has finished running.  This will involve *returning* the `inner()` function, then invoking the `outer()` function and storing its result in a variable.  Like this:

```
function outer() {
  const outerVar = 'Outer Variable';
  function inner() {
    const innerVar = 'Inner Variable';
    console.log(innerVar);
    console.log(outerVar);
  }
  return inner;
}
const innerFn = outer();
```

Now that that's set up, if you run `innerFn();`, the `outerVar` will still be accessible.  Invoking `innerFn();` will print `Inner Variable` and `Outer Variable` to the console.


## When Would This Be Useful?

You can write less code because you can reuse the same function for different things simultaneously.  Here is one example.

Let's say you want to track the score of a hockey game and a soccer game at the same time.  The function to do each one is identical, but you can't alternate between updating the score for the hockey game and the soccer game via the same function and keep the scores separate.  And you don't want to have to write two identical functions and just change the names to `hockeyScore()` and `soccerScore()` because that's not very D.R.Y.

Here's how a closure could help:

```
function createGame(gameName) {
  let score = 0;
  return function goal() {
    score++;
    return `Your ${gameName} score is ${score}.`;
  }
}

const hockeyGame = createGame('hockey');
const soccerGame = createGame('soccer');
```

Now each time you invoke `hockeyGame();`, it increments the score and prints `Your hockey score is . . .` to the console.

Likewise, each time you invoke `soccerGame();`, it increments a *different* score and prints `Your soocer score is . . .` to the console.

The two scores don't collide, even when you alternate which function you invoke.  The `score` variable is available as a separate value to each function.