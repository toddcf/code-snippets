# Creating Objects

(Colt Steele explanation)

Here are three ways to create (or "initialize") an object:

## Make an Empty Object and Then Add Data To It

```
var person = {};
person.name = "Travis";
person.age = 21;
person.city = "Los Angeles";
```

## Object Literal Notation

Object Literal Notation is when you create the object and fill it with data at the same time:

```
var person = {
	name: "Travis",
	age: 21,
	city: "Los Angeles"
};
```

## Use the NEW OBJECT Function

```
var person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "Los Angeles";
```
