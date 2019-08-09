# Enhanced Object Literals

## Old Way:

```
function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title).price;
    }
  };
}

const inventory = [
  {title: 'Harry Potter', price: 10},
  {title: 'Eloquent JavaScript', price: 15},
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');
```


## ES6 - Enhanced Object Literals - Way

ES6 differences:

1. If your key/value pair are the same word (in this case, `inventory: inventory`), you can condense them down to one word (`inventory`).
2. If your key/value pair contains a function, you can eliminate the `function` keyword and the colon. So `inventoryValue: function()` becomes `inventoryValue()`.

```
function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title).price;
    }
  };
}

const inventory = [
  {title: 'Harry Potter', price: 10},
  {title: 'Eloquent JavaScript', price: 15},
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');
```