# Find

Very similar to the filter helper. Searches an array for a particular item. As soon as that item is found, that result is returned.

Note that once it finds the first matching result, it stops looking for more -- because you are required to use the keyword `return` inside your iterator function. This can be good or bad depending on what you WANT your results to be.


## Example

Let's say you have an array of users' names:

```
var users = [
  { name: "Jill" },
  { name: "Alex" },
  { name: "Bill" }
];
```

And you want to find the user with the name "Alex" -- and then assign the result to a variable called "user":

`var user;`


## The Old For Loop Way:

```
for (var i = 0; i < users.length; i++ ) {
  if users[i].name === 'Alex' {
    user = users[i].name;
    break; /* To prevent looping through the rest of the array once the desired result has been found -- providing you know there will only be one matching result. */
  }
}

user;
```


## The BETTER Find Way:

```
users.find(function(user) {
  return user.name === 'Alex';
});
```

Note that you do NOT need to write an if statement that returns true if the user name matches -- this would be more code than simply using the return statement shown above.