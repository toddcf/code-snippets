# JavaScript Object Overview

## To Retrieve Data From An Object

Let's say you have this object:

```
var person = {
	name: "Travis",
	age: 21,
	city: "Los Angeles"
};
```

You can retrieve data from it in one of two ways: bracket notation, or dot notation:

### Bracket Notation

This way is similar to arrays. You use the name of the object, then square brackets, and then the name of the key:

`console.log( person[ "name" ] );`

### Dot Notation

Use the name of the object, a dot, and then the name of the key:

`console.log( person.name );`