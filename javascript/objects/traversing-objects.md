# Traversing Objects

If you have the following object . . .

```
const person = {
  name: 'Peter',
  age: 12,
  job: 'shepherd'
}
```

. . . and you want to get the age, you can use either *dot notation* or *bracket notation*.


## Dot Notation

`person.age` will return `12`.

This is the more concise way of retrieving values.


## Bracket Notation

`person['age']` will also return `12`.

While not as concise as dot notation, this method does offer some additional functionality.  For example, you could dynamically pass in a property name that you want to retrieve the value of (or check the existence of):

```
function propertyCheck(prop) {
  return person[prop];
}
propertyCheck('age');
propertyCheck('name');
```

This would return `12` and `Peter`, respectively.

Or, if your object keys are strings (because they contain characters that couldn't be used in actual keys, such as spaces, hyphens, etc.), you cannot retrieve them with dot notation.  Instead, you would have to do this:

```
const person = {
  'side job': 'Web Developer',
  'hyphen-example': 'hyphenated'
}
person['side job'];
person['hyphen-example'];
```

This would return `Web Developer` and `hyphenated`, respectively.

(Ideally, you don't want to use keys like this.  But sometimes your data comes from another language, or server-side, and you cannot change it.)