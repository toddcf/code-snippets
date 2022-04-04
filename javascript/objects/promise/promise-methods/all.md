# all()

`Promise.all()` is a static method that takes in an array of promises and returns them all once the last one is finished.

```
function makePizza(toppings) {
  const pizzaPromise = new Promise(function (resolve, reject) {
    // Wait 5 seconds for the pizza to cook:
    setTimeout(function () {
      resolve(`Pizza made with ${toppings.join(', ')}.`);
    }, 5000);

  });
  return pizzaPromise; // Return the promise immediately after creating it.
}

const sausageOlives = makePizza(['sausage', 'black olives']);
const pepperoni = makePizza(['pepperoni']);
const quad = makePizza(['peppers', 'tomatoes', 'pesto sauce']);

const allPizzas = Promise.all([sausageOlives, pepperoni, quad]);
allPizzas.then(function ([a, b, c]) {
  //const [a, b, c] = pizzas;
  console.log(a, b, c);
});
```

The `allPizzas.then` method will return `Pizza made with sausage, black olives. Pizza made with pepperoni. Pizza made with peppers, tomatoes, pesto sauce.`


## Handling Errors

`.all()` will assume that everything in the array is supposed to resolve successfully, and that if they don't, you want your `.catch()` method to be invoked.  This means that you need to chain a `.catch()` *to the `.all()` method* (not the `.then()` method), like this:

```
function handleError(err) {
  // Graceful degredation code here.
}
const allPizzas = Promise.all([sausageOlives, pepperoni, quad]).catch(handleError);
```

If you want the other `.then()` methods to be able to run even if one or more of the others fail, use [allSettled()](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/promise/promise-methods/allSettled.md).