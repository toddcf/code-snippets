# JavaScript THIS Keyword

One of the quirkier parts of JavaScript, the `this` keyword can mean different things in different scenarios.

`this` refers to the object that contains it. Think of it as a shortcut to having to write out an entire filepath just to get back to the object you're already inside of.

## Using `this` in a Method

If you have a method (function) inside an object, you could use `this` to refer to the object that that method is inside of.

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

Now let's add a method that adds another 10 m.p.h. to the car's speed:

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