# dispatchEvent()

You can pass your own `CustomEvent` into your `dispatchEvent()`, like this:

```
el.dispatchEvent(new CustomEvent('customEventNameHere'));
```

The name you create in the new custom event is the name that you will listen for:

```
list.addEventListener('customEventNameHere', callbackFunctionNameHere);
```