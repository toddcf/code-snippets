# Promise.all()

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