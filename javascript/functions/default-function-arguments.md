# Default Function Arguments


## Example: AJAX Request

1. The first argument will be the URL that we want to make the request to.
2. The second argument will be the request method (get, put, post, delete).


### ES5 Version

Get requests are the most common, so coders often set the default to "GET" if the user does not specify a method.

```
function makeAjaxRequest(url, method) {
  
  if (!method) {
    method = 'GET';
  }
}
```

In this manner, the following two expressions would yield the same result:

```
makeAjaxRequest('https://www.google.com');
makeAjaxRequest('https://www.google.com', 'GET');
```

But the following expression would override the default 'GET' and use 'POST' instead:

```
makeAjaxRequest('https://www.google.com', 'POST');
```


### ES6 Version

In ES6, you can put the default right in the argument:

```
function makeAjaxRequest(url, method = 'GET') {
  
}
```

## Using Null

If you want to override the default to null, you can do this:

```
makeAjaxRequest('https://www.google.com', null);
```

Null is used to say, "Nothing exists here, and I as the developer want it to be that way." So passing `null` into the function will ensure it stays empty, whereas passing in `undefined` will result in the default overriding your `undefined`.