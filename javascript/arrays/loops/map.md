# Map

Loops through an array and returns a brand new array (which is something forEach does not do).

This is the most widely used array helper.



Method for deleting items from the list:

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