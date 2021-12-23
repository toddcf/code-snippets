# Filter

Filter is more complex than the other array helpers. It lets you pull only array items that meet your desired criteria.

If no matches are found, an empty array is returned.


## Example: Filter by Type of Food

Let's say you want to find all the fruits in your array of foods:

```
const products = [
  {name: 'cucumber', type: 'vegetable'},
  {name: 'banana', type: 'fruit'},
  {name: 'celery', type: 'vegetable'},
  {name: 'orange', type: 'fruit'}
];

let filteredProducts = [];
```

The OLD for loop way:

```
for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}

filteredProducts;
```

The BETTER filter way:

```
const fruits = products.filter(function(product) {
  return product.type === 'fruit';
});
```

*Note that the `return` keyword is used. If you don't return a value from the inner function, map will think you're returning "undefined."* One of the most common mistakes is forgetting to use a return statement.

Also note that `product.type === 'fruit'` returns a truthy or falsy value. Therefore, it is not necessary to use an if statement -- this is much shorter than an if statement.


## Example: A More Complex Filter Than the Previous Example

This time we have added quantity and price to our objects.

```
var products = [
  {name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
  {name: 'banana', type: 'fruit', quantity: 10, price: 15},
  {name: 'celery', type: 'vegetable', quantity: 30, price: 13},
  {name: 'orange', type: 'fruit', quantity: 3, price: 5}
];
```

And this time, we want to search for *vegetables* that are in stock (*quantity > 0*), and that cost less than 10.

```
const vegInStockUnder10 = products.filter(function(product) {
  return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
});
```


## When Would You Use filter?

Any time you want to filter from a list -- search results on Amazon, New Egg, etc.

You may also need to use filter to get a blog post with a certain id number, and match it to any comments with a corresponding id number.