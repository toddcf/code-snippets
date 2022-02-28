# JSON

*Merge/link the following documents:*
- api:
  - [api.md](https://github.com/toddcf/code-snippets/blob/master/api/api.md)
- javascript:
  - objects:
    - json:
      - [json.md](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/json/json.md)
  - web-api:
    - [web-api.md](https://github.com/toddcf/code-snippets/blob/master/javascript/web-api/web-api.md)

JSON stands for JavaScript Object Notation. JSON is faster than XML because you don't have to send as much data -- you're not sending all the tags.

JSON is inspired by object literal syntax in JavaScript, and looks very similar to it.

BUT . . . it is not the same thing.  It is a string, not an object.  Trying to treat it as an object can result in errors.

Also, unlike a JavaScript object, JSON properties *must* be wrapped in double quotes (not single quotes), like this:

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