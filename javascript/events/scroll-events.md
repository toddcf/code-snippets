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