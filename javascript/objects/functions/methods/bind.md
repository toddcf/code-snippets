# Bind

`bind()` is a method that lives on all functions.  It is used to change the scope of what the [this](https://github.com/toddcf/code-snippets/blob/master/javascript/reserved-words/keywords/this.md) keyword is equal to.  It says, "Set the 'this' keyword equal to the argument passed into me."

`bind()` is similar to [call](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/functions/methods/call.md), but allows you to set the "this" variable explicitly.

BUT it does not immediately call the function.  Instead, it generates a copy of that function, which you can store in a variable.


## Example 1

Let's say you have an object containing a name, and a method that uses that name in a sentence:

```
const person = {
  name: 'Wes Bos',
  sayHi() {
    console.log(this);
    console.log(`Hey, ${this.name}!`);
  }
}
```

`person.sayHi();` will return `"Hey, Wes Bos!"`.

But if you store `person.sayHi` in a variable, you change the scope of the `this` keyword and screw everything up:

```
let sayHi = person.sayHi;
```

Now `sayHi();` will return `"Hey, !"` because `sayHi();` is being called without being bound to anything -- which means it is bound to the window, which means "this" is set to `window`.  ("this" is determined by where the function is being called, not where the function is declared.)

But using `bind()`, you can explicitly change `this` from representing the `window` to representing `person` again:

```
sayHi = person.sayHi.bind(person);
```

Now `sayHi();` will once again return `"Hey, Wes Bos!"`.


## Example 2

You can also bind to other objects.  In this example, you can use the `sayHi` method from the `person` object for the `jenna` object, even though the `jenna` object does not contain the `sayHi` method:

```
const jenna = { name: 'Jenna'};
sayHi = person.sayHi.bind(jenna);
```

Now `sayHi();` will return `"Hey, Jenna!"` because the `this` keyword has now been explicitly bound to the `jenna` object.

So `sayHi` gets called on the `person` object, but `this` references the `jenna` object.


## Adding Arguments to Bind

When you invoke `bind()`, you can pass in additional arguments that line up with the arguments of the function/method.

The first argument will always be the `this` object.  Each additional argument will need to line up with the parameters within the function/method being invoked.


### Example

```
const bill = {
  total: 1000,
  calculate(taxRate) {
    console.log(this.total + (this.total * taxRate));
  }
}
```

`const total = bill.calculate(0.13);` will return `1130`.

But you can use `bind()` and pass in arguments that match the `bill` object.  Here, we can pass in a total of $500 and a tax rate of 6%:

```
const calc = bill.calculate.bind({total: 500}, 0.06);
```

`console.log(calc());` will return `530`.