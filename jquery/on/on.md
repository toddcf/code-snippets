# On

```
// Note that you must select "ul" rather than "li" because the click listener will only be added to elements that existed the first time the code was run.
// We then add a second argument of "li" to mean that whenever an "li" is clicked inside the "ul", do the following:
$( "ul" ).on( "click", "li", function() {

	// Add/remove COMPLETED class:
	$( this ).toggleClass( "completed" );

});
```
