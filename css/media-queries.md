# Media Queries

## HTML Head

`<meta name="viewport" content="width=device-width, initial-scale=1">`

Include this in your head. It tells mobile devices not to zoom out too far.

## Break Points

Have a separate CSS file for your media query break points. Link to it in your HTML file AFTER your normal CSS stylesheet.

For basic starting points, use screen width break points for popular devices such as the iPhone and iPad.

But as you get more advanced, set your break points based on where your design starts to look bad as the screen size shrinks.

Start with the largest screen sizes and work down from there.

List only the code you want to change. Omit any code that will stay the same.

### Smaller Computer Screens

1024px to 1200px.

```
@media only screen and (max-width: 1200px) {

}
```

Anything bigger than this is just the regular formatting of your site.

### Tablet

768px to 1023px.

### Medium Phones

480px to 767px.

### Small Phones

Less than 480px.

### And / Or

To be safe, if you don't want to worry about getting the cascading order wrong, you can set both the min and max:

```
@media (min-width: 600px) and (max-width: 800px) {
	html {
		background-color: red;
	}
}
```

The comma means "or":

```
@media (min-width: 600px), (max-width: 800px) {
	html {
		background-color: red;
	}
}
```

Drawbacks: You may have to repeat some code, since it won't cascade down from the larger screen size queries.