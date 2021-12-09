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

*Order is guaranteed.*  Unlike a standard JavaScript object, where the key-value pairs may change order inside the object, the order in which you add key-value pairs to your Map is the order they will always be in.


## get()

Get retrieves the value of the key you ask for:

```
myMap.get('name'); // Will return 'wes'
```

The nice thing about being able to set any type as a key is that you can look things up by an entire object, or by a number (without having to convert the number into a string).  This is especially nice when you are pulling in a number dynamically:

```
let score = 100;
const prizes = new Map();
prizes.set(100, 'Bear');
prizes.set(200, 'Duck');
prizes.set(300, 'Car');
console.log(`You won a ${prizes.get(score)}!`);
```

You can use `forEach()` on a Map, but it will just return the values, not the keys:

```
prizes.forEach(entry => {
  console.log(entry);
});
```

The above will simply result in:

```
Bear
Duck
Car
```

If you want the full key-value pairs, you can use a "for of" loop:

```
for (const prize of prizes) {
  console.log(prize);
}
```

The above loop will return the following:

```
[100, 'Bear']
[200, 'Duck']
[300, 'Car']
```

Or you could go deeper and console.log each key and each value:

```
for (const prize of prizes) {
  console.log(prize[0], prize[1]);
}
```

The above will return:

```
100 'Bear'
200 'Duck'
300 'Car'
```

Or you could destructure it:

```
for (const [points, prize] of prizes) {
  const li = `<li>${points} - ${prize}</li>`;
}
```


## delete()

```
myMap.delete('name');
```

Removes the specified element from the Map object by key.


## Size

```
myMap.size;
```

Very similar to `Array.length`.


## When to Use a Map vs. an Object

Use a Map if you need to maintain the order of your items.

However, a Map has no literal, meaning you have to create one using `new Map()` and then use `set()` to add elements to it.

In a Map, you cannot put a function (method) inside the same way you can with an object literal.  Maps are simply for storing data, not invoking code.

Also, Maps do not work with JSON.  (You cannot convert a Map into a string -- something you can do with an object literal.)  However, you could first convert a Map into an object literal and then stringify that:

```
Object.fromEntries(myMap);
```

But it's not perfect.  If you used an object as a key, that will not convert correctly.