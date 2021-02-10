# Query Selectors

JavaScript uses query selectors to locate and select elements on the page.

`querySelector` finds the first match and stops.

`querySelectorAll` finds all the matches.

They look for selectors such as tags, classes, ids, data attributes, etc., and their syntax is similar to CSS.


## Query Selector

To select the first `<p>` tag on the page:

```
document.querySelector('p');
```

You can also store them in a variable:

```
var paragraph = document.querySelector('p');
```

This will return a `<p>` element.


## Query Selector All

To select ALL the `<p>` tags on the page:

```
var paragraph = document.querySelectorAll('p');
```

This will return a nodelist (even if only one element is found), which is similar to an array, but not identical.


### Converting a Nodelist to an Array

See the "nodelist" document in the "arrays" directory.


## Selector Syntax

Selectors go inside quotes.  You use CSS selector syntax (a dot for class, hashtag for id, etc.).

```
document.querySelector('.class');
document.querySelector('#id');
```

Likewise, you can use parent selectors, too:

```
document.querySelectorAll('.item img`);
```

This syntax would select all images that were inside an element with the `item` class.


## Narrowing Your Search

You are not limited to using this method on the entire document.  If you want to limit your search to just one element, you can call `querySelector` or `querySelectorAll` on just that element.

Let's say you have two different forms on the page that a user could fill out and submit, and you only want to select one of those submit buttons:

```
const form2 = document.querySelector('#form2');
const submitBtn = form2.querySelector('button .submit');
```

Notice how in the second line, `querySelector` is called on the `form2` variable instead of the entire `document`.


## Alternative Methods

`querySelector` and `querySelectorAll` are typically the best way to select elements on a page.

Older methods that are a bit more cumbersome and no longer used as frequently include:

- getElementById
- getElementsByClassName
- getElementsByTagName
- getElementsByTagNameNS

Note that if you *do* use these, you do *not* use the CSS selector syntax such as `.` or `#` because JavaScript already knows what type of selector it's searching for based on the method.  Example:

WRONG: `document.getElementById('#id');`
CORRECT: `document.getElementById('id');`

But use query selectors instead.  They are more flexible.