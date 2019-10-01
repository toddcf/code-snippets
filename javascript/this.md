# JavaScript `this` Keyword

One of the quirkier parts of JavaScript, the `this` keyword can mean different things in different scenarios.

`this` refers to the object that contains it. Think of it as a shortcut to having to write out an entire filepath just to get back to the object you're already inside of.

By default (on a blank file), `this` refers to the `window` object. More on this later.


## Using `this` in a Method

If you have a method (a function inside of an object), you could use `this` to refer to the object that that method is inside of.

(Remember that if the value inside the object is a primitive, it's called a property. If the value is a function, it's called a method.)


### Example 1: Car Object

```
var car = {
  speed: 30,
  drive: function() {
    var speed = this.speed;
    console.log(`I'm driving ${speed} m.p.h.`);
  }
};

car.drive();
```

This is a pretty simple example in which `this` simply means `car`.

Now let's add a second method that adds another 10 m.p.h. to the car's speed:

```
var car = {
  speed: 30,
  drive: function() {
    var speed = this.speed;
    console.log(`I'm driving ${speed} m.p.h.`);
  },
  driveFaster: function() {
    this.speed += 10;
    this.drive();
  }
};

car.drive();
car.driveFaster();
```

This will result in a console log of `40`.


### Example 2: Where `this` Points

Create an object with a method (aka function) inside it.

```
var c = {
  name: 'The c object',
  log: function() {
    console.log(this);
  }
};
```

Then call that method:

```
c.log();
```

The result is that `The c object` will be printed to the console, because `this` points to the object that the method is sitting inside of.


### Quirk: The `this` Keyword Inside a Method Points to the Window Object

Building on the example above, let's say you add a function *inside* the method. Like this:

```
var c = {
  name: 'The c object',
  log: function() {
    console.log(this); // IN PROGRESS
  }
}
```


## Using `this` in a Function That is *Not* a Method

If a function doesn't belong to any object you've defined, then it automatically belongs to the `window` object. Therefore, the value of `this` will become `window`.

If you simply `console.log(this)` on a blank file, the result will be `window`.

And if you do this . . .

```
function a() {
  console.log(this);
}

a();
```

. . . the result will *also* be `window`, because you are simply invoking the function.

What if you create a function expression and store it in a variable?

```
var b = function() {
  console.log(this);
}

b();
```

Same thing: the `window` object.

*Whenever you create a function (whether it's an expression or a statement) in the global scope, `this` will point to the `window` because the scope is global.* In other words, what object is the function inside of? The global object. So that's where `this` points.

Because of this, you can actually create new variables inside the function using `this`, and they will get attached to the global object and be accessible even after the function has been invoked and is off the execution stack. (But only AFTER the function has been invoked.)

```
function a() {
  this.newVariable = 'Hello';
}

console.log(newVariable); // will throw an error and stop your code, because a() has not yet been invoked.

a();

console.log(newVariable); // will print 'Hello' to the console because it happens after a() has been invoked.
```

So for functions in the global scope, you are NOT attaching `this` to the function, you are attaching it to the global object. "When you are just invoking the function, it points to the global variable."