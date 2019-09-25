# Namespace

A namespace is simply a container for variables and functions.

It is typically used to keep variables and functions with the same name separate.

But . . . JAVASCRIPT DOESN'T HAVE NAMESPACES.

The good news is, you can *fake* namespaces.

## Faking Namespaces

Suppose you want both an English and a Spanish version of your web page. If you store the two versions in variables with the same name, the most recent one will override any previous ones. For example . . .

```
var greet = 'Hello';
var greet = 'Hola';

console.log(greet);
```

In this case, console logging `greet` will return `Hola`.

Now, try this:

```
var english = {
  greet: 'Hello'
};

var spanish = {
  greet: 'Hola'
};

console.log(english.greet);
```

No namespace collisions!

You could even go multiple layers deep. For example, each object (`english`, `spanish`) could have multiple greetings.

```
var english = {
  greetings: {
    basic: 'Hello',
    morning: 'Good morning',
    afternoon: 'Good afternoon',
    evening: 'Good evening'
  }
}

console.log(english.greetings.basic);
```

This will return `Hello`.