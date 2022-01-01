# dispatchEvent()

You can pass your own `CustomEvent` into your `dispatchEvent()`, like this:

```
el.dispatchEvent(new CustomEvent('customEventNameHere'));
```

The name you create in the new custom event is the name that you will listen for:

```
list.addEventListener('customEventNameHere', callbackFunctionNameHere);
```


## Walkthrough

Wes Bos's "Beginner JavaScript" has a walkthrough for how to build this in "Lesson #57: Shopping Form with Custom Events, Delecation, and localStorage."  (It's actually pretty fun.)