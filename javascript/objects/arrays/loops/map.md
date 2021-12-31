# Map

Loops through an array and returns a brand new array (which is something forEach does not do). The advantage is that you do not alter your original array and create problems in the codebase.

*Note that the array returned by Map will always be the same length as the original array.*

This is the most widely used array helper.


## Example: Double Each Number in an Array and Push Each One into a New Array

```
var numbers = [1, 2, 3];
var doubledNumbers = [];
```

Here is the OLD way of using a for loop and push:

```
for (var i = 0; i < numbers.length; i++ ) {
  doubledNumbers.push(numbers[i] * 2);
}

doubledNumbers; // [2, 4, 6]
```

The BETTER way, using map:

```
var doubled = numbers.map(function(number) {
  return number * 2;
});

doubled; // [2, 4, 6]
```

*Note that the `return` keyword is used. If you don't return a value from the inner function, map will think you're returning "undefined."* One of the most common mistakes is forgetting to use a return statement.


## Example: Create New Array with List of Car Prices

First, create an array of objects, each one being a car and its price:

```
const cars = [
  {model: 'Buick', price: 'CHEAP'},
  {model: 'Camaro', price: 'expensive'}
];
```

Now, map each price into a new array and print the array:

```
const prices = cars.map(function(car) {
  return car.price;
});

prices; // ['CHEAP', 'expensive']
```


## Using Map to Delete Items from a List

```
deleteItem: function( type, id ) {
  var ids;
  var index;
  // Loop over all items in either the Income or Expenses array and return a new array with the current id:
  ids = data.allItems[type].map( function ( current ) {
    return current.id;
  });

  // Get the index of the id that we passed into the method, and store it in the variable INDEX:
  index = ids.indexOf( id );

  // Only delete if the index exists:
  if ( index !== -1 ) {
    // Start deleting at the index number; only delete that one element:
    data.allItems[type].splice( index, 1 );
  }
}
```


For each loop iteration, call the getPercentage method, return it, and then store it in the allPerc variable:

```
getPercentages: function() {
  var allPerc = data.allItems.exp.map( function( cur ) {
    return cur.getPercentage();
  });
  return allPerc;
}
```


## Where Would You Use Map?

For rendering lists of data. Facebook, Instagram, blogs, etc. are all lists of posts. So each post might be an object in the backend. You can use map to pull the posts you want to display and then generate some HTML in order to display them. (And you do all this without altering the master array.)

Map allows you to take in the info you need, and then use backticks to build the HTML around it that you need to display it to the user, and spit that back out.