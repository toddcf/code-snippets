# To Retrieve Data From An Object

Let's say you have this object:

```
var person = {
	name: "Travis",
	age: 21,
	city: "Los Angeles"
};
```

You can retrieve data from it in one of two ways: bracket notation, or dot notation:

## Bracket Notation

This way is similar to arrays. You use the name of the object, then square brackets, and then the name of the key (in quotes, as a string):

`console.log( person[ "name" ] );`

Bracket notation takes longer to write, but is more forgiving. Unlike dot notation, you can use it to retrieve properties that . . .

1. Start with a number: `someObject[ "1brad" ]`
2. Are a variable:

```
var str = "name";
someObject[ str ];
```

3. Have spaces in the name: `someObject[ "fav color" ];` (Not that it's wise to have spaces in your names, anyway.)

## Dot Notation

Use the name of the object, a dot, and then the name of the key:

`console.log( person.name );`

HOWEVER, you CANNOT use dot notation to retrieve properties that . . .

1. Start with a number: `someObject.1brad`
2. Are a variable:

```
var str = "name";
someObject.str; // Will not work.
```

3. Have spaces in the name: `someObject.fav color;` (Not that it's wise to have spaces in your names, anyway.)