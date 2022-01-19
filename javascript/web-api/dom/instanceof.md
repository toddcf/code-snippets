# instanceof

You can use `instanceof` to validate elements, etc.

When an HTML element is created, under the hood it is being created with the Element class.  Therefore, it inherits all methods and properties that are common to all kinds of elements.


## Example

If you need to check whether something is an element:

```
(document.querySelector('.slider') instanceof Element)
```

This will return `true` if `document.querySelector('.slider')` is an element, and `false` if it is not.