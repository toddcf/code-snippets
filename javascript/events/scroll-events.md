# Scroll Events

If an element has CSS `overflow: scroll` set on it, you have to add an event listener to that particular element and use it to listen for the `'scroll'` event on it.

Let's say you want to only allow the "Accept" button to be enabled if the user has scrolled all the way to the end of the terms and conditions. The *older* way of doing this would be to use `scrollTop` and `scrollHeight` to calculate when the user has scrolled to the bottom:

```
const terms = document.querySelector('.terms-and-conditions');
terms.addEventListener('scroll', function(e) {
  // e.currentTarget.scrollTop;
  // e.currentTarget.scrollHeight;
});
```


## scrollTop

Tells you how far the user has scrolled from the top of the page.


## scrollHeight

The total height of the scrollable content (regardless of whether it is viewable).

Drawbacks: Margins and paddings interfere with the accuracy of this method.  It is better to use `IntersectionObserver`.


## IntersectionObserver

An IntersectionObserver takes a callback function that fires every single time that it needs to check for the thing you're asking it to check for.

Then you call the `observe()` method on the IntersectionObserver and pass it something to watch for.

Same example from above, but using `IntersectionObserver` instead:

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

Also, the information returned every time the event is observed will include a lot of data you can use for other things.