# Media Queries

For basic starting points, use screen width break points for popular devices such as the iPhone and iPad.

But as you get more advanced, set your break points based on where your design starts to look bad as the screen size shrinks.

Start with the smallest screen sizes and work up from there.

## Small Phones

`if <= 480px`

# Large Phones

`if > 480px && <= 768px`

# 

`if > 768px && <= 1024px`

# Tablets

`if > 1024px`

Max may be 1200px, but I suppose that can always change.

# And / Or

To be safe, you can set both the min and max:

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