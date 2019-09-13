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

```
(function(a,b) {
  console.log(a+b);
})(2,3);
```

The above code would print `5`.

One common use for parameters in IIFEs is to store frequently used globals such as `window` and `document`. This can help for brevity (long names can be shortened) and performance (the browser doesn't have to look far to find the variables).

NOTE: This only speeds up the code that's inside the IIFE, since it's not accessible outside the IIFE.