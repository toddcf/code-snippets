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

For example, you could "observe" the last element within the element you are scrolling through:

```
io.observe(terms.lastElementChild);
```

You can also pass an "options" object as your second argument into the Intersection Observer if you want to be more specific about what percentage of this element you want to be onscreen before the observer is triggered.  (See below.)


## Options Object

Inside this object, you will first tell it what the root of what you are scrolling for is.  (In this case, the terms and conditions.)

Second, you can give it a threshold, telling it which percentage you want to "observe" for.  This threshold could be a single value, or an array of values that trigger the observer at multiple percentages of visibility.  (`0` is off the page, `1` is 100% visible on the page.  Note that setting it to `1` may mean it never triggers if the element is large enough that the bottom is slightly cut off.)

```
const io = new IntersectionObserver(ioCallback, {
  root: terms,
  threshold: [0, 0.5, 1]
});
```


Furthermore, you can then set both an `if` and `else` condition in your callback function so that the action is done and undone as the user scrolls up and down:

```
function ioCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    // When the element is 100% on the page:
    button.disabled = false; // Remove the default "disabled" attribute from the button.
  } else {
    button.disabled = true;
  }
}
```


## Unobserve

Use `unobserve()` to cancel your Intersection Observer.  Pass the element into it that you want to stop observing.  (Typically used when the end result has been achieved and you don't want to continue burning performance on listening for events you no longer care about.)

```
function ioCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    // When the element is 100% on the page:
    button.disabled = false; // Remove the default "disabled' attribute from the button.
    io.unobserve(terms.lastElementChild); // Then stop observing it.
  }
}
```