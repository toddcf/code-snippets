# Map Object

A Map object holds key-value pairs and remembers the original insertion order of the keys.

The keys can be any type -- not just strings.  They can even be references to objects.  (As in, store an object in a variable, and use the variable as a key in your Map.)


## Create a Map Object

```
const myMap = new Map();
```


## set()

Set adds or updates an element with a specified key and a value to a Map object.  It takes in two arguments.  The first is the key, the second is the value.

```
myMap.set('name', 'wes');
```


## get()

Get retrieves the value of the key you ask for:

```
myMap.get('name'); // Will return 'wes'
```

The nice thing about being able to set any type as a key is that you can look things up by an entire object, or by a number (without having to convert the number into a string).