# Object Mutation

If you store an object in a `const` variable, it can never be overwritten, but its values can be updated.

For example . . .

```
const person = {
  name: 'Peter',
  age: 12,
  job: 'shepherd'
}
```

. . . can be modified as follows . . .

```
person.age = 13;
```

. . . and the object will now be:

```
const person = {
  name: 'Peter',
  age: 13,
  job: 'shepherd'
}
```

## Object Freeze

However, you can (kind of) prevent mutation by using [Object.freeze()](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/object-freeze.md) to create a new object that *cannot* be mutated.