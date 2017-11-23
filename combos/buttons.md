# Buttons

## HTML

```
<a class="btn btn-full js--scroll-to-plans" href="#">I'm hungry</a>
<a class="btn btn-ghost js--scroll-to-features" href="#">Show me more</a>
```

NOTE: A `<button>` tag cannot be inside an `<a>` tag. Simply forego the `<button>` tag. Use and style only the `<a>` tag.

## CSS

```
/*The links will look the same before and after they've been clicked:*/
.btn:link,
.btn:visited,
input[type=submit] {
	display: inline-block;
	padding: 10px 30px;
	font-weight: 300;
	text-decoration: none;
	border-radius: 200px;
	-webkit-transition: background-color 0.2s, border 0.2s, color 0.2s;
	transition: background-color 0.2s, border 0.2s, color 0.2s; /* Transition takes 0.2 seconds. */
}

.btn-full:link,
.btn-full:visited,
input[type=submit] {
	background-color: #e67e22;
	border: 1px solid #e67e22;
	color: #fff;
	margin-right: 15px;
}

.btn-ghost:link,
.btn-ghost:visited {
	border: 1px solid #e67e22;
	color: #e67e22;
}

/* Button color darkens when hovered or clicked: */
.btn:hover,
.btn:active,
input[type=submit]:hover,
input[type=submit]:active {
	background-color: #cf6d17;
}

/* Adds border when hovered or clicked, for consistency with btn-ghost: */
.btn-full:hover,
.btn-full:active,
input[type=submit] {
	border: 1px solid #cf6d17;
}

.btn-ghost:hover,
.btn-ghost:active {
	border: 1px solid #cf6d17;
	color: #fff;
}
```

### Remove Blue Border on Click:

```
button:focus {
	outline: 0;
}
```

## jQuery

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
```
