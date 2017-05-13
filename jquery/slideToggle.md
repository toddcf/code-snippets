# slideToggle

A jQuery method that opens and closes a box -- such as a dropdown nav menu.

```
$( ".js--nav-icon" ).click( function() {

	$( ".js--main-nav" ).slideToggle( 200 );

});
```

When the `.js--main-nav` class is clicked, the `slideToggle` method is called on it, which is what animates the opening and closing of the box.

The `200` means 200ms, which is the speed of the animation. You can set it however fast or slow as you like.