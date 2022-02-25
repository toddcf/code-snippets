# Web APIs

*Merge/link the following documents:*
- api:
  - [api.md](https://github.com/toddcf/code-snippets/blob/master/api/api.md)
- javascript:
  - objects:
    - json:
      - [json.md](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/json/json.md)
  - web-api:
    - [web-api.md](https://github.com/toddcf/code-snippets/blob/master/javascript/web-api/web-api.md)

Web APIs are extra things provided by the browser, such as:

- DOM
- AJAX
- Timers (setTimeout, setInterval, etc.)


## How it Works

Even though JavaScript is single-threaded, callback functions (such as `setTimeout()`) are passed off to the Web API and handled there.  The callback function is then removed from the call stack and the next task in the call stack can be executed while the Web API continues to handle the callback function.

When the callback function is ready to execute, it can't just interrupt the current call stack.  So before it returns to the call stack, it is first pushed to the "task queue."

The "event loop" monitors the task queue and the call stack.  As soon as the call stack is empty, it takes the first thing from the top of the task queue, and pushes it to the call stack.  Only now does the callback function actually get executed.