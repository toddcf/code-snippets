# Waypoints

Waypoints is a jQuery plugin that allows you to trigger functions based on the user's position on the page.

## Setup

1. Go to http://imakewebthings.com/waypoints/guides/jquery-zepto/ and download the files to your project folder.
2. You probably only need `jquery.waypoints.min.js`, and can delete the rest.
3. Link to `jquery.waypoints.min.js` in your `index.html` file. Make sure it is *before* the link to your own `.js` file.

## Coding

### Sticky Nav

In this example, a sticky nav will appear at the top of the page when the user scrolls beyond a certain point, which is set by us:

```
$( ".js--section-features" ).waypoint( function( direction ) {
		// If user scrolls down, add "sticky" class to <nav> element:
		if ( direction == "down" ) {
			$( "nav" ).addClass( "sticky" );
		}
		// If user scrolls up, remove "sticky" class from <nav> element:
		else {
			$( "nav" ).removeClass( "sticky" );
		}
	}, {
		offset: "60px;"
});
```

`$( ".js--section-features" )` is the class we set in the html tag that we want this method applied to.

`function( direction )` means that scrolling up or down will be the trigger.

`$( "nav" ).addClass( "sticky" );` will *add* the class `sticky` to the tag `<nav>` in the html file when triggered. In this example, the trigger is scrolling down.

`$( "nav" ).removeClass( "sticky" );` will *remove* the class `sticky` from the tag `<nav>` in the html file when triggered. In this example, the trigger is scrolling up.

`offset: "60px;"` means we want this function to be triggered 60px *above* the `$( ".js--section-features" )` tag in the html file.

### Scroll on Button Clicks

In this example, the site will scroll to certain elements in the html file, as dictated by us, when the user clicks specific buttons:

```
$( ".js--scroll-to-plans" ).click( function() {
	// Select HTML and BODY:
	$( "html, body" ).animate( { scrollTop: $( ".js--section-plans" ).offset().top }, 1000);
});
```

`$( ".js--scroll-to-plans" )` is the class assigned to the button the user is going to click.

When clicked, the site will scroll to the top of the element we have given the class `.js--section-plans` to.

`1000` gives it a speed of 1000 ms, or 1 second.