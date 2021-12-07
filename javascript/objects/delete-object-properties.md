# Delete Object Properties

Use the `delete` keyword, followed by the property you want to delete.

For example, if you have this object . . .

```
const person = {
  name: 'Peter',
  age: 12,
  job: 'shepherd'
}
```

. . . you can delete the name as follows:

```
delete person.name;
```

Now the object will be:

```
{
  age: 12,
  job: 'shepherd'
}
```


## Confirming the Deletion

You can actually console.log the deletion, because `delete` always returns a boolean to let you know whether or not it worked.  (`true` means it was deleted.)

```
console.log(delete person.name);
```

This would both delete `person.name` and return `true` to the console.