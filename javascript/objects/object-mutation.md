# Object Freeze


## Object Mutation

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

However, you can prevent mutation (kind of) by using `Object.freeze()` to create a new object that *cannot* be mutated.

```
const personFrozen = Object.freeze(person);
```

Now if you try to mutate `personFrozen`, it will not change.