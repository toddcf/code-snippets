# Navigation Bar

## HTML

```
<nav>
	<div class="row">
		<img src="assets/img/logos/logo-white.png" alt="Omnifood Logo" class="logo"> <!-- White logo for normal nav -->
		<img src="assets/img/logos/logo.png" alt="Omnifood Logo" class="logo-black"> <!-- Black logo for sticky nav -->
		<ul class="main-nav js--main-nav">
			<li><a href="#" class="js--scroll-to-features">Food Delivery</a></li>
			<li><a href="#" class="js--scroll-to-works">How It Works</a></li>
			<li><a href="#" class="js--scroll-to-cities">Our Cities</a></li>
			<li><a href="#" class="js--scroll-to-plans">Sign Up</a></li>
		</ul>
		<!-- Mobile-Responsive Navigation -->
		<a class="mobile-nav-icon js--nav-icon"><i class="ion-navicon-round"></i></a>
	</div>
</nav>
```

## CSS

```
.main-nav {
	float: right;
	list-style: none; /* Remove bullet points */
	margin-top: 55px;
}

.main-nav li {
	display: inline-block;
	margin-left: 40px;
}

.main-nav li a:link,
.main-nav li a:visited {
	color: #fff;
	text-decoration: none;
	text-transform: uppercase;
	font-size: 90%;
	border-bottom: 2px solid transparent;
	-webkit-transition: border-bottom 0.2;
	transition: border-bottom 0.2;
	padding: 8px 0;
}

.main-nav li a:hover,
.main-nav li a:active {
	border-bottom: 2px solid #e67e22;
}

.mobile-nav-icon {
	cursor: pointer;
}
```

## JavaScript

```
// BUTTON CLICK SCROLLING

// I'm Hungry & Plans buttons:
$( ".js--scroll-to-plans" ).click( function() {
	// Select HTML and BODY:
	$( "html, body" ).animate( { scrollTop: $( ".js--section-plans" ).offset().top }, 1000 );
});

// Show Me More & Features buttons:
$( ".js--scroll-to-features" ).click( function() {
	// Select HTML and BODY:
	$( "html, body" ).animate( { scrollTop: $( ".js--section-features" ).offset().top }, 1000 );
});

// Works button:
$( ".js--scroll-to-works" ).click( function() {
	// Select HTML and BODY:
	$( "html, body" ).animate( { scrollTop: $( ".js--section-works" ).offset().top }, 1000 );
});

// Cities button:
$( ".js--scroll-to-cities" ).click( function() {
	// Select HTML and BODY:
	$( "html, body" ).animate( { scrollTop: $( ".js--section-cities" ).offset().top }, 1000 );
});

// MOBILE NAVIGATION

// Mobile Nav
$( ".js--nav-icon" ).click( function() {
	
	var nav = $( ".js--main-nav" );
	var icon = $( ".js--nav-icon i" );

	// Open and close the box:
	nav.slideToggle( 200 );

	if ( icon.hasClass( "ion-navicon-round" ) ) {
		icon.addClass( "ion-close-round" );
		icon.removeClass( "ion-navicon-round" );
	} else {
		icon.addClass( "ion-navicon-round" );
		icon.removeClass( "ion-close-round" );
	}
	
} );

// Ensure that .main-nav reappears after mobile nav has been closed and screen size increased again:
// This works basically like a media query for jQuery, where we can take different actions depending on the screen width
$( window ).resize( function() {

	var nav = $( ".js--main-nav" );
	var icon = $( ".js--nav-icon i" );

	if ( $( window ).width() > 767 ) {
		nav.css( "display", "block" );
		icon.addClass( "ion-close-round" );
		icon.removeClass( "ion-navicon-round" );
	} else {
		nav.css( "display", "none" );
		icon.addClass( "ion-navicon-round" );
		icon.removeClass( "ion-close-round" );
	}

} );

```