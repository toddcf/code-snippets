# JavaScript `this` Keyword

One of the quirkier parts of JavaScript, the `this` keyword can mean different things in different scenarios.

`this` refers to the object that contains it. Think of it as a shortcut to having to write out an entire filepath just to get back to the object you're already inside of.

By default (on a blank file), `this` refers to the `window` object. More on this later.


## Creation of `this` Variable

When a function is invoked, a variable called `this` is automatically created for that execution context.

But `this` points to a different object, depending on where the function is and *how it is invoked* . . . which can cause a lot of confusion.


## Using `this` in a Method

If you have a method (a function inside of an object), you could use `this` to refer to the object that that method is inside of.

(Remember that if the value inside the object is a primitive, it's called a property. If the value is a function, it's called a method.)


*NOTE: The following examples use `var` (instead of `const` or `let`) on purpose.*

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

This will result in a console logs of `I'm driving 30 m.p.h.` and `I'm driving 40 m.p.h.`.


### Example 2: Where `this` Points

Create an object with a method (aka function) inside it.

```
var c = {
  name: 'The c object',
  log: function() {
    console.log(this.name);
  }
};
```

Then call that method:

```
c.log();
```

The result is that `The c object` will be printed to the console, because `this` points to the object that the method is sitting inside of.

You can also *mutate* the object, which simply means to change it. In the following code block, we've added a line to the method that changes the name of the c object:

```
var c = {
  name: 'The c object',
  log: function() {
    this.name = 'Updated c object';
    console.log(this.name);
  }
}
```

Now when you call `c.log();`, `Updated c object` is what gets printed to the console.


### Quirk: The `this` Keyword Inside a Method Points to the Window Object

Building on the example above, let's say you add a function *inside* the method that updates `this.name` once again. Like this:

```
var c = {
  name: 'The c object',
  log: function() {
    this.name = 'Updated c object';
    var setname = function(newname) {
      this.name = newname;
    }
    setname('Updated the c object again!');
    console.log(this.name);
  }
}
```

Here's the quirk: `c`'s name will remain `Updated c object`. But if you console.log `window.name`, you will see `Updated the c object again!`. `this` is now pointing to the global object once again, even though it is in a function inside a method.


#### The Workaround

Thankfully, there is a workaround. In the very first line of your object method, you can store `this` in a variable (we'll call it `self`), and then replace `this` with `self` throughout the rest of the function:

```
var c = {
  name: 'The c object',
  log: function() {
    var self = this;
    self.name = 'Updated c object';
    var setname = function(newname) {
      self.name = newname;
    }
    setname('Updated c object again!');
    console.log(self.name);
  }
}
```

This works because when you create a variable, it is an object. Objects are set by reference. `self` will now be pointing to the same location in memory as the `this` keyword. And at the moment you're storing it in the `self` variable, `this` is pointing to the `c` object.

NOTE: The `let` keyword is intended to clear up some of these quirks.


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

. . . the result will *also* be `window`, because you are simply invoking the function.  Which is attached to the `window`.

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