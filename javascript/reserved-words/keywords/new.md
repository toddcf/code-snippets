# New

When you use the `new` keyword to create an object, etc., the new object will include all the built-in methods.

For example, even creating a number with `new Number()` means you will have a list of methods attached to the number, such as `toFixed()`.

NOTE: This is the same as creating a number (or array or object, etc.) with literal syntax.  The following are no different from each other:

```
let num = 8; // Literal syntax
let num = new Number(8); // new keyword
```

```
let arr = ['wes', 'kait']; // Literal syntax
let arr = new Array('wes', 'kait'); // new keyword
```

```
let obj = {name: 'wes'}; // Literal syntax
let obj = new Object({name: 'wes'}); // new keyword
```

However, some things such as `Date` do not have a literal syntax, so you have to use the `new` keyword:

```
let bronze = new Date('May 10, 1994');
```


## new function

When you use the `new` keyword to create a function, it creates and returns a new *object* that is an *instance of* that function instead of whatever would have been returned from that function.  For example:

```
function Pizza() {
  console.log('Making a pizza.');
}

const pepperoniPizza = Pizza();
console.log(pepperoniPizza);
```

In the console, this will show `'Making a pizza.'` followed by `undefined`.  The latter is because the Pizza function doesn't actually return anything.

But if you run the same code with the following `new` keyword added . . . `const pepperoniPizza = new Pizza();`

. . . the console will show an object called `Pizza` that contains a prototype.

And if you run `(pepperoniPizza instanceof Pizza)`, it will return `true`.

The way that you attach properties onto that instance is with the `this` keyword:

```
function Pizza(toppings = [], customer) {
  this.toppings = toppings;
  this.customer = customer;
}

const pepperoniPizza = new Pizza(['pepperoni'], 'Wes Bos');
const canadianPizza = new Pizza(['pepperoni', 'mushrooms'], 'Kait Bos');
```

In this example, each pizza winds up with its own properties.