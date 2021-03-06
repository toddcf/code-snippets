# Fetch

The `fetch` helper is a new feature for ES6 that is already implemented inside of your browser. It can be used to make AJAX requests across the internet and fetch resources that are available to us.


## Syntax

The first thing we do is decide which URL we want to make a fetch request to.

```
const url = "https://jsonplaceholder.typicode.com/posts/";
```

To make an AJAX request using fetch, we simply call fetch and pass in the url:

```
fetch(url);
```

Now you need to tell it what to do once the fetch is resolved or rejected:

```
fetch(url)
  .then(data => console.log(data));
```

However, the object that you get back will not have the JSON data. You just get an object that represents the response that you got back from the server. To actually get access to the data, you have to call a method on it:

```
fetch(url)
  .then(response => response.json());
```

And only after calling this json can we get access to the actual data we wanted:

```
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
```

Now you'll get back a list of objects.


## Interpreting the Response

```
ok: true
```

This will mean things went okay.

If the server throws an error, you will see a status value of `300` or above. A common one:

```
ok: false
status: 404
```

But a problem with using fetch is that even if you get back a status code of 300 or higher, it does *not* enter the catch case. The only time your `catch` will run is if the network request flat out failed to be made. This is counterintuitive and a very major drawback. No other AJAX library has this anomoly. With any other library, if the request fails for any reason, the promise will enter the rejected state.

Stephen Grider actually recommends skipping fetch and making use of libraries such as Axios, SuperAgent, or even jQuery if you have to. Otherwise, you're going to have to reinvent the wheel and write a lot of boilerplate code around fetch to make it behave the way that you'd expect.