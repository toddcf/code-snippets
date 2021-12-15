# Spread Operator

The Spread Operator (`...`) is new for ES6.  It is more concise than the "apply" operator of ES5.

It is pretty much the same as the `concat` operator, except that it's easier for humans to read and understand when they're looking at the code -- especially when you're combining tons and tons of arrays into one.

It is a convenient way to expand elements of an array, like arguments and function calls.


## Spread vs. Rest Operators

The spread operator is the opposite of "rest parameters."  The spread operator is used in the function *call*; rest parameters are used in the function *declaration* to accept an arbitrary number of parameters.

The Spread Operator is used to flatten or spread variables out.

The Rest Operator is used to gather them together.


## Example 1: Color Arrays

Let's say you have two arrays of colors: one for default colors, and one for favorite colors.

```
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
```

And let's say you want to combine them all into one array so you can see all the colors in one place. But if you just do this...

```
[ defaultColors, userFavoriteColors ];
```

...the result will be this:

```
[['red', 'green'], ['orange', 'yellow'];
```

In other words, two arrays inside of one array.

To remove them from their original arrays and combine them into your new array, you can use the spread operator as follows:

```
[ ...defaultColors, ...userFavoriteColors ];
```

This will create a new array and output:

```
['red', 'green', 'orange', 'yellow'];
```

Another benefit of using the Spread Operator is that you can easily add individual elements to your new array with no problem:

```
[ 'blue', ...defaultColors, ...userFavoriteColors ];
```

Which would return:

```
['blue', red', 'green', 'orange', 'yellow'];
```


## Example 2

Let's say a function adds four ages together:

```
function addFourAges( a, b, c, d ) {
	return a + b + c+ d;
};

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);
```

What if the ages were in an array?

```
var ages = [18, 30, 12, 21];
```

The spread operator is the ellipses:

```
const sum3 = addFourAges( ... ages );
```

It will expand the ages array into its components, which in this example are then passed into the function and added together, returning `81`.


## Combining Arrays

You can use the spread operator to combine arrays (by using the spread operator on each one):

```
const familySmith = [ "John", "Jane", "Mark" ];
const familyMiller = [ "Mary", "Bob", "Ann" ];
let bigFamily = [ ... familySmith, ... familyMiller ];
console.log( bigFamily );
```


## Inserting New Items Between Two Arrays

You can even add a new item in the middle:

```
bigFamily = [ ... familySmith, "Lily", ... familyMiller ];
```

`bigFamily` will now equal `['John', 'Jane', 'Mark', 'Lily', 'Mary', 'Bob', 'Ann']`.


## Redundant Keys

If you have any redundant key names, the most recent one will overwrite the earlier ones.  In this example, "oysters" will overwrite itself:

```
const meatInventory = {
	bacon: 2,
	sausage: 3,
	oysters: 10,
}
const veggieInventory = {
	lettuce: 5,
	tomatoes: 3,
	oysters: 15
}
const inventory = { ...meatInventory, ...veggieInventory};
```

This will result in `oysters` having the more recent value of `15`:

```
{
	bacon: 2,
	sausage: 3,
	oysters: 15,
	lettuce: 5,
	tomatoes: 3
}
```


## Spread Operators and Nodelists

The spread operator can also be used on a nodelist instead of an array.


### Example

Change all boxes to purple using querySelectorAll, which returns a nodelist:

```
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
```

Now use the spread operator instead of individually changing the text color of the h1 element and then looping through all the elements with a class of box:

```
const all = [ h, ... boxes ];
```

Now we've stored h1 and all the boxes (expanded) in the "all" variable.

Then convert the nodelist to array:

```
Array.from(all).forEach( cur => cur.style.color = 'purple' );
```