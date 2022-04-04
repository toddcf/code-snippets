# Call Stack

A call stack is a data structure that programs where in the program we are.  When we step into a function, we push something onto the stack.  If we return from a function, we pop off the top of the stack.

JavaScript is "single-threaded," which means it only has one "call stack," which means it only executes one thing at a time.  (Some programming languages are "multi-threaded," meaning they can run multiple things at a time.  A thread is a sequential flow of control in a program.)

See [Web API](https://github.com/toddcf/code-snippets/blob/master/javascript/web-api/web-api.md) for an explanation of how multiple things can run simultaneously.