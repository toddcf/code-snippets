# Promise.race()

`Promise.race()` is a static method that takes in an array of promises and returns the first one as soon as it is finished.

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

const firstPizza = Promise.race([sausageOlives, pepperoni, quad]);
firstPizza.then(function (a) {
  console.log(`Here is the first pizza: ${a}`);
});
```

The `firstPizza.then` method will return `Here is the first pizza: Pizza made with sausage, black olives.`