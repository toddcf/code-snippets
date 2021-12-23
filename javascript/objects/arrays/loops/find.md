# Find

Very similar to the filter helper. Searches an array for a particular item. As soon as that item is found, that result is returned.

Note that once it finds the first matching result, it stops looking for more -- because you are required to use the keyword `return` inside your iterator function. This can be good or bad depending on what you WANT your results to be.

Unlike `filter()`, it does not return the result in an array.

If no matches are found, it returns `undefined`.


## Example: Find a User with a Certain Name

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


### The Old For Loop Way:

```
for (var i = 0; i < users.length; i++ ) {
  if users[i].name === 'Alex' {
    user = users[i].name;
    break; /* To prevent looping through the rest of the array once the desired result has been found -- providing you know there will only be one matching result. */
  }
}

user;
```


### The BETTER Find Way:

```
const alex = users.find(function(user) {
  return user.name === 'Alex';
});
```

Note that you do NOT need to write an if statement that returns true if the user name matches -- this would be more code than simply using the return statement shown above.


## Example: Find a Car with Specific Criteria

Let's say you want to find the Ford Focus inside your cars array.

```
function Car(model) {
  this.model = model;
}

var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

cars.find(function(car) {
  return car.model === 'Focus';
});
```


## Example: Find a Comment on a Blog Post with a Specific ID

First, you have your array of posts:

```
var posts = [
  {id: 1, title: 'New Post'},
  {id: 2, title: 'Old Post'}
];
```

Next, you have a single comment (not a list of comments):

```
var comment = {postId: 1, content: 'Great Post'};
```

Now you have your function, which will take your single comment's ID and find its corresponding post. So this is going to:

1. Search through your posts array.
2. Return the first comment that matches the post ID you are looking for.

```
function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

postForComment(posts, comment);
```


## When Would You Use Find?

When you have a *single* element you want to find inside a large collection.

The advantage over the for loop, in this situation, is that it will not continue iterating over the entire array once it has found the one element you are looking for.