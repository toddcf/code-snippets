# Object Freeze

You can (kind of) prevent [mutation of an object](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/object-mutation.md) by using `Object.freeze()` to create a new object that *cannot* be mutated.

```
const person = {
  name: 'Peter',
  age: 12,
  job: 'shepherd'
}
const personFrozen = Object.freeze(person);
```

Now if you try to mutate `personFrozen`, it will not change.