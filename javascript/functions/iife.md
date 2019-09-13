# IIFE (Immediately Invoked Function Expression)

IIFEs are run right away, and their code is kept out of global scope, so it won't be overwritten or overwrite anything else.

You can give an IIFE a name, but you won't be able to access it outside the function, so there's no point. Just make it anonymous.


## Syntax

The syntax is that of an anonymous function wrapped in parentheses and then invoked:

```
(function() {
  // code goes here
})();
```


## Example

```
(function() {
  const message = `Secret message.`;
  console.log( message );
})();
```

In the above code, the `message` variable is not accessible anywhere else.


## Parameters

IIFEs also allow you to use parameters:

