# Prototypes

In JavaScript, objects can inherit properties from other objects.

A prototype is a hidden object that sits in the background and allows other objects to inherit its properties.

All JavaScript objects have a prototype.


## Example

Let's say you have your `Car` constructor:

```
function Car( color, speed ) {
  this.color = color;
  this.topSpeed = speed;
}
```

This object constructor will automatically have a prototype hiding in the background. And we can edit it like so:

```
Car.prototype.showCarInfo = function() {
  console.log( `Color: ${this.color}` );
  console.log( `Top Speed: ${this.topSpeed}` );
};
```

This has added the `showCarInfo` function to the `Car` prototype object.

Which means that every `Car` object will now get access to `showCarInfo`.

Let's create a bunch of cars before we test it out:

```
const myCar = new Car( 'red', 200) ;
const yourCar = new Car( 'blue', 150 );
const otherCar = new Car( 'green', 180 );
const anotherCar = new Car( 'gold' , 240 );
```

Now if you console.log `myCar`, you won't see `showCarInfo` (unless you click into the prototype):

```
console.log( `myCar:` );
console.log( myCar );
```

However, you can still call `showCarInfo` on `myCar` like this:

```
console.log( `showCarInfo:` );
yourCar.showCarInfo();
```


## Advantages to Prototypes

1. You can update just the prototype, and all your objects automatically receive the update.
2. Less clutter. Each object references one prototype object rather than having that info in every single object.
3. Saves space. It's better for memory when you're storing a function in one prototype object instead of putting it inside of each individual object.