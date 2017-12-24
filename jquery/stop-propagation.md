# Stop Propagation

## Explanation:

If you put a click event listener on an element, clicking that element will also register a click on all of its parent divs up the line. This is known as "event bubbling."

This can cause problems. For example, maybe you don't want your click to register on the parent div because it will trigger another event listener.

To solve this problem, you can stop event bubbling by using the `.stopPropagation()` jQuery method.

## Example:

Let's say you want to be able to click on any `<span>` in the HTML below, and not have the click register on the `<li>` , `<ul>`, or anything above them.

HTML:

```
<ul>
	<li><span>X</span> Krav Maga</li>
	<li><span>X</span> Rock Climbing</li>
	<li><span>X</span> Sayoc Kali</li>
</ul>
```

In your jQuery file, you would put a variable such as `event` inside the callback function, and then call the `stopPropagation()` method on it, like this:

```
// Click X to delete:
$( "span" ).on( "click", function( event ) {

	alert( "Clicked a span." );
	// Prevent event bubbling so that the parent element (li, etc.) does not register the click event:
	event.stopPropagation();
	// $( this ).

});
```
