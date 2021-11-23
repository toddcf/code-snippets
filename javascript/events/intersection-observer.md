# Intersection Observer

An IntersectionObserver takes a callback function that fires every single time that it needs to check for the thing you're asking it to check for.

Then you call the `observe()` method on the IntersectionObserver and pass it something to watch for.


## Example

Same example from the [Scroll Events](https://github.com/toddcf/code-snippets/blob/master/javascript/events/scroll-events.md) document, but using `IntersectionObserver` instead:

```
// Declare the callback function (the thing you want to have happen when the event is observed):
function ioCallback(payload) {
   console.log(payload);
}

const io = new IntersectionObserver(ioCallback); // Create the IntersectionObserver and pass the callback function into it.
const terms = document.querySelector('.terms-and-conditions'); // In this example, this is what we will want the IntersectionObserver to watch for.

io.observe(terms); // Call the observe() method on the IntersectionObserver, and pass it the thing you want it to watch for.
```

This method fires right away on page load to initialize.  After that, it only fires when the expected event is observed.


## Array

There is an array of data returned every time the event is observed will include a lot of information you can use:


### target

The element that the Intersection Observer is watching for.


### isIntersecting

If `isIntersecting` is `true`, that means the target is at least partially intersecting the root element or document.

To expand on an excerpt from the example from above:

```
function ioCallback(payload) {
  console.log(payload[0].isIntersecting);
}
```

This will result in "true" being console logged every time the element in question is scrolled onto the screen and "false" when it scrolls back off.


### intersectionRatio

Tells you what percentage of the element is on the page.  (Value is a float between `0` and `1`.)

This is useful for being able to tell when the user has scrolled all the way to the bottom of the element.