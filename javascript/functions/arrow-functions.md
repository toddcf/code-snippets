# Arrow Functions

```
const years = [ 1990, 1965, 1982, 1937 ];
```

## ES5:

Use map to create a new array of ages and store it in ages5:

```
var ages5 = years.map( function( el ) {
  return 2017 - el;
});

console.log( ages5 );
```


## ES6

ES6 uses an "arrow function," which is much more concise.

There are three ways of writing arrow functions:

1. One argument, and one line of code. The simplest.

```
let ages6 = years.map( el => 2017 - el );

console.log( ages6 );
```

2. Two arguments, which means using parentheses. Still able to use one line of code:

```
ages6 = years.map( ( el, index ) => `Age element ${ index + 1 }: ${ 2017 - el }.`);

console.log( ages6 );
```

3. Two arguments, and multiple lines of code (most complex). Must use curly braces to create a block, and use the return keyword at the end.

In this example, we'll get the current year and then calculate a person's age based on the current year and the element that was passed in:

```
ages6 = years.map( ( el, index ) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${ index + 1 }: ${ age }.`
});

console.log( ages6 );
```

## Arrow Functions: Lexical "This" Keyword:

Arrow functions do not have a "this" keyword. They use the "this" keyword of the function they are written in. Therefore, we say that they have a lexical "this" variable.

### ES5

Can't use "this" keyword without a workaround because it would be pointing to the global object.

```
var box5 = {
  color: "green",
  position: 1,
  clickMe: function() {
    var self = this;
    document.querySelector( ".green" ).addEventListener( "click", function() {
      var str = "This is box number " + self.position + ", and it is " + self.color + ".";
      alert( str );
    });
  }
};

box5.clickMe();
```

### ES6

With arrow function, you CAN use the "this" keyword because it shares the lexical "this" keyword of its surroundings:

```
const box6 = {
  color: "green",
  position: 1,
  clickMe: function() {
    document.querySelector( ".green" ).addEventListener( "click", () => {
      var str = "This is box number " + this.position + ", and it is " + this.color + ".";
      alert( str );
    });
  }
};

// box6.clickMe();
```

Another variation, using an arrow function in the first function. But "this" will now refer to the global object, so it won't work.

```
const box66 = {
  color: "green",
  position: 1,
  clickMe: () => {
    document.querySelector( ".green" ).addEventListener( "click", () => {
      var str = "This is box number " + this.position + ", and it is " + this.color + ".";
      alert( str );
    });
  }
};

box66.clickMe();
```

With function constructor:

```
function Person( name ) {
  this.name = name;
};
```

### ES5

```
Person.prototype.myFriends5 = function( friends ) {
  var arr = friends.map( function( el ) {
    return this.name + " is friends with " + el
  }.bind( this ));

  console.log( arr );
}

var friends = ["Bob", "Jane", "Mark"];
new Person( "John" ).myFriends5( friends );
```

### ES6

```
Person.prototype.myFriends6 = function( friends ) {
  var arr = friends.map( el => `${this.name} is friends with ${el}` );

  console.log( arr );
}

var friends = ["Bob", "Jane", "Mark"];
new Person( "Mike" ).myFriends6( friends );
```