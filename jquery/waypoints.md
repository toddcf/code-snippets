# Waypoints

Waypoints is a jQuery plugin that allows you to trigger functions based on the user's position on the page.

## Setup

1. Go to http://imakewebthings.com/waypoints/guides/jquery-zepto/ and download the files to your project folder.
2. You probably only need `jquery.waypoints.min.js`, and can delete the rest.
3. Link to `jquery.waypoints.min.js` in your `index.html` file. Make sure it is *before* the link to your own `.js` file.

## Sticky Nav

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

## Button Click Scrolling

In this example, the site will scroll to certain elements in the html file, as dictated by us, when the user clicks specific buttons:

```
$( ".js--scroll-to-plan" ).click( function() {
	// Select HTML and BODY:
	$( "html, body" ).animate( { scrollTop: $( ".js--section-plans" ).offset().top }, 1000);
});
```

`$( ".js--scroll-to-plans" )` is the class assigned to the button the user is going to click.

When clicked, the site will scroll to the top of the element we have given the class `.js--section-plans` to.

`1000` gives it 1000 ms, or 1 second, to complete this task.

## Animations on Scroll

In this example, we'll make an element fade in when we scroll to a certain point on the page.

### HTML

In your HTML file, assign a class to the element you want to animate. In this case, it will be `js--wp-1`:

`<div class="row js--wp-1">`

### jQuery

In your jQuery file:

```
$( ".js--wp-1" ).waypoint( function( direction ) {
		$( ".js--wp-1" ).addClass( "animated fadeIn" );
});
```

Explanation:

- `$( ".js--wp-1" )` selects the `js--wp-1` class.
- `( direction )` actually doesn't do anything in this example because this function will only get triggered once.
- `$( ".js--wp-1" ).addClass( "animated fadeIn" );` adds the classes `animated` and `fadeIn` to the element that already has the class of `.js--wp-1`.

### CSS

In order for the element to be able to fade in, it first needs to be made invisible. (Otherwise, it is already there and cannot be faded in.)

So we set that class's opacity to zero in our CSS file:

```
.js--wp-1 {
	opacity: 0;
}
```

And then once jQuery has added the `animated` class to the element with the `js--wp-1` class, we will want its opacity to become 1:

```
.js--wp-1.animated {
	opacity: 1;
}
```

**Note that there is no space between** `.js--wp-1` **and** `.animated`**.** This is because we are **not** selecting the `animated` class within the `js--wp-1` class. Rather, we are selecting the elements that have **both** classes combined. Think of it like `&&`.