# Footer

## HTML

```
<footer>

	<div class="col span-1-of-2">
		<h3>Copyright &copy; 2016<span class="currentYear"></span> <a href="http://www.tcf-webdesign.com" target="_blank">Todd Croak-Falen</a></h3>
	</div>

	<div class="col span-1-of-2">
		<h3><a href="https://github.com/toddcf/hangman-de-niro" target="_blank">GitHub</a></h3>
	</div>

</footer>
```

Remember to update the links as necessary.

CSS links:

1. grid.css.
2. style.css (or whatever your main file is called).

## CSS

```
footer {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: auto;
	text-align: center;
}
```

## JavaScript

```
// Pass current year into footer copyright:
var thisYear = new Date().getFullYear();

if ( thisYear > 2017 ) {
	// Footer (IIFE):
	var footerInfo = ( function() {
		$( ".currentYear" ).html( " &ndash; " + thisYear + " " );
	}) ();
}
```

Adjust 2017 if necessary.