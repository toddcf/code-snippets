# Links

## Text Decoration

To get rid of a link's automatic underlining:

```
a {
	text-decoration: none;
}
```

```
a:link,
a:visited {
	color: #e67e22;
	text-decoration: none; /* No default underline */
	border-bottom: 1px solid #e67e22; /* Our own custom underline */
	padding-bottom: 1px; /* Space for underline */
	-webkit-transition: border-bottom 0.2s, color 0.2s;
	transition: border-bottom 0.2s, color 0.2s; /* Transition takes 0.2 seconds. */
}

a:hover,
a:active {
	color: #555;
	border-bottom: 1px solid transparent;
}
```