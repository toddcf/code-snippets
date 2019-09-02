# Working with URLs in JavaScript

To get the current page's URL:

```
let url = window.location.href;
```

To go to a new URL:

```
window.location.href = 'https://www.google.com';
```


## Pathname (or Path)

The URL path is the part of the URL after the domain name and before the `?` (if there is one).

For example, in this URL...

```
https://www.google.com/analytics/?whatever
```

...the path would be:

```
/analytics/
```

You can find the pathname of any page you're on by typing the following into your console:

```
window.location.pathname;
```


## Finding Out What Page the User is On

```
let url = window.location.pathname;
```


## Finding Out What Page the User Came From

```
document.referrer;
```

For example:

```
let previousPage = document.referrer;
console.log(previousPage);
```

(This will be blank if they typed the URL in directly from a blank page.)