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

if ( thisYear > 2016 ) {
	// Footer (IIFE):
	var footerInfo = ( function() {
		$( ".currentYear" ).html( " &ndash; " + thisYear + " " );
	}) ();
}
```