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
const myCar = new Car( 'red', 200);
```