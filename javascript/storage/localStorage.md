# localStorage

`localStorage` is a way to store a string of data in the user's browser for an indefinite amount of time.

Whatever you want to save in localStorage must first be converted to a string (if it's not already).  One example would be to convert an object to JSON (`JSON.stringify(object)`), store it, and then upon retrieving it convert it back to an object (`JSON.parse('string')`).


## Viewing localStorage

Just type `localStorage` in your browser console to see what is currently being stored.


## Setting localStorage

Use the `setItem()` method, which takes in a key and a value:

```
localStorage.setItem('name', 'Wes');
```


## Getting localStorage

Use the `getItem()` method, which takes in just the key and returns that value:

```
localStorage.getItem('name'); // Will return 'Wes'
```