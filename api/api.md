# API

*Merge/link the following documents:*
- api:
  - [api.md](https://github.com/toddcf/code-snippets/blob/master/api/api.md)
- javascript:
  - objects:
    - json:
      - [json.md](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/json/json.md)
  - web-api:
    - [web-api.md](https://github.com/toddcf/code-snippets/blob/master/javascript/web-api/web-api.md)

Application Programming Interface

https://github.com/public-apis/public-apis
A collection of public APIs.

https://ifttt.com/
This website shows you ways to connect multiple APIs.

https://www.programmableweb.com/
This is an API directory.

iTunes has an API!


## API Data Formats

When you query an API, you get back data. And that data needs to be in a predictable format so that you are able to parse and manipulate it. Therefore, it is sent in the form of either XML or JSON:


### XML

Stands for Extended Markup Language. Looks very similar to HTML, but is only data, not structure or styling. Very similar to an object, actually:

```
<person>
  <name>Travis</name>
  <age>27</age>
  <city>Los Angeles</city>
</person>
```


### JSON

(Merge this section with [json.md](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/json/json.md).)

Stands for JavaScript Object Notation. Looks like a JavaScript object, except that everything is a string:

```
{
  "person": {
    "name": "Travis",
    "age": "21",
    "city": "Los Angeles"
  }
}
```

JSON has become much more popular than XML because the format is so similar to JavaScript that you don't need to convert it from XML format in order to use it. (And you are most likely using JavaScript to do your API calls.) It's a little clunkier to use XML.


## Viewing JSON

(Merge this section with [json.md](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/json/json.md).)

Chrome extension "JSON View" can be used to extract JSON from one block of text to an easier-to-read format so you can visually parse it.

Or you can go to JSON viewing websites and paste your JSON code into that.


## How to Call an API in Node

You can use request (`npm install request --save`). See their documentation at https://github.com/request/request

Sample code:


```
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
```

Notice that a callback function was used. This is because making a JSON request takes time.

You are passing three things into this callback function: `error, response, body`.

The first is always `error` so that you can check for an error and tell the computer what to do if it experiences one. Here is more detailed syntax:

```
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (error) {
    console.log("Something went wrong:");
    console.log(error);
  }
  else {
    if (response.statusCode == 200) {
      console.log("Everything is running smoothly.");
      console.log(body);
    }
  }
});
```

Status code 200 means the response was "okay." This is important to check because you might get a response that is something other than "okay," and you want to proceed accordingly.

If things are "okay," then console.log the `body`, which is the response that came back from your request.


## Converting JSON String into an Object

(Merge this section with [json.md](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/json/json.md).)

Remember that when you receive a JSON response, it is actually a string (even though it looks very similar to an object). So in order to use it, you will need to convert it into an actual object. Here's how:

`JSON.parse(body);`

This is built into JavaScript. Use `JSON.parse`, followed by what it is you want to parse, which in this case is the `body`.

THEN, save that result into a variable:

`var parsedData = JSON.parse(body);`


## OMDB Colt Steele API

General Search: `http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb`

Movie ID Search: `http://www.omdbapi.com/?i=tt3896198&apikey=thewdb`

In other words, append `&apikey=thewdb` to the end of each query.