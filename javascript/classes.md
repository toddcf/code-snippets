# Classes

JavaScript doesn't have true ojbect inheritance. It has prototypal inheritance. (And if you ask five different engineers how prototypal inheritance works, you will probably get five different answers.)

Classes are an ES6 feature used to organize code, set up a level of inheritance, and create objects. But under the hood, they are still making use of prototypal inheritance.

## Example: New Car Object

### ES5 Version

Write a function that creates a new object called Car:

```
function Car(options) {
  this.title = options.title;
}
```

Now you can create a new car object (in this case, for a Ford Focus) like so:

```
const car = new Car({ title: 'Focus' });
```

Now if you log `car;`, you will get:

```
{'title':'Focus'}
```

Now you can add a method onto Car. Whenever you add methods onto a class (or prototype), you add it to the prototype object of the constructor.

```
Car.prototype.drive = function() {
  return "Vroom";
}
```

Now if you call `car.drive();`, you get:

```
Vroom
```

BUT AGAIN, using this prototype method can be confusing. Which is why ES6 now has classes instead.


### ES6 Version

To make a new class, we write the `class` keyword, then the name of the class, and then curly braces:

```
class Car {

}
```

Once you've done that, you can create an "instance" of car:

```
const car = new Car();
```

Now, to add a method inside of the class, use the enhanced object literal syntax:

```
class Car {
  drive() {
    return 'Vroom';
  }
}
```

Now if you call `car.drive();` you get: `Vroom`.

To handle initialization or setup inside a class, we define a very special method called a constructor. This is a lot like `init`. The constructor method is the one and only method that will be called automatically whenever we create a new instance of this class.

```
class Car {
  
  constructor(options) {
    this.title = options.title;
  }
  
  drive() {
    return 'Vroom';
  }
}

const car = new Car({ title: 'Toyota' });
```

Note that you DO NOT separate the constructor and the method with commas. Even though they look like object syntax, if you put a comma between them, it will cause an error.

Now let's say you have both Car and Toyota constructors:

```
class Car {
  
  constructor(options) {
    this.title = options.title;
  }
  
  drive() {
    return 'Vroom';
  }
}


class Toyota {
  
  constructor({ color }) {
    this.color = color;
  }
  
  honk() {
    return 'Beep';
  }

}

const toyota = new Toyota({ color: 'red' });

toyota.honk();
```

And let's say you want Toyota to inherit from Car. All you'd have to do is:

1.  Add the words `extends Car` after `class Toyota`.
2. Add the `super();` keyword -- along with any options that were passed into the constructor (in this case, `options`) -- inside the Toyota's constructor.
3. Do any assignment inside your local constructor -- in this case `this.color = color` becomes `this.color = options.color;`.

Like this:

```
class Car {
  
  constructor(options) {
    this.title = options.title;
  }
  
  drive() {
    return 'Vroom';
  }
}


class Toyota extends Car {
  
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  
  honk() {
    return 'Beep';
  }

}

const toyota = new Toyota({ color: 'red' });

toyota.honk();
```

By doing this, we are saying we want `Toyota` to have access to all the methods and setups of `Car`.

`super();` is basically the same as calling `Car.constructor();`.  BUT, we don't typically use destructuring when using the `super();` method.


## When to Use Classes

