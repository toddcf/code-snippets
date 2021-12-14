# JSON

JSON stands for JavaScript Object Notation. JSON is faster than XML because you don't have to send as much data -- you're not sending all the tags.

JSON is inspired by object literal syntax in JavaScript, and looks very similar to it.

BUT . . . it is not the same thing. Trying to treat it the same exact way can result in errors. Unlike a JavaScript object, JSON properties *must* be wrapped in quotes, like this:

```
{
  "firstname": "Mary",
  "isAProgrammer": true
}
```

Note that you *can* do it this way in JavaScript object literal syntax, but you don't have to.

Also, JSON will not allow you to put functions as values.


## Stringify

You can use `stringify` to convert a JavaScript object into JSON string syntax:

```
var objectLiteral = {
  firstname: 'Mary',
  isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));
```

The above will result in:

```
{
  "firstname": "Mary",
  "isAProgrammer": true
}
```


## Parse

The opposite of `stringify` is `parse`. `parse` can take a string and convert it into JavaScript object syntax:

```
var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');
```