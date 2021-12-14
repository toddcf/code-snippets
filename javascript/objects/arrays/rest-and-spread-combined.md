# Using Rest and Spread Operators Together

Let's say you want to make a shopping list. And you know you ALWAYS need to buy milk every time you go to the store, whether you remembered to add it to the list or not.

```
function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    return ['milk', ...items];
  }
  return items;
}

validateShoppingList('oranges', 'bread', 'eggs');
```