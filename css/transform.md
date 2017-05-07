# Transform

## Scale

`transform: scale(1.15);`, for instance, would zoom in on an image by 15%.

If you do this, you may also want to go to the parent div for this image and set `overflow: hidden` so that the image does not expand outside of its container.

## Transition

`transform` can be used in combination with `transition` to create CSS3 animations.  Example from Omnifood project:

```
.meal-photo {
	width: 100%; /* 100% of its parent container, which is the <li>. */
	margin: 0; /* Groups all the photos so they are touching. Overrides the normalize.css file. */
	overflow: hidden;
	background-color: #000; /* So that the opacity of the images fades toward black. */
}

.meal-photo img {
	opacity: 0.7;
	width: 100%; /* 100% of its parent container, which is the <figure>. */
	height: auto;
	transform: scale(1.15); /* Zoom in 15% so that when we hover, we can zoom back out to normal. */
	transition: transform 0.5s, opacity 0.5s;
}

.meal-photo img:hover {
	opacity: 1;
	transform: scale(1.03); /* When hovering, zoom back out to normal size -- plus 3% to prevent a white gap from appearing at the bottom of the image. */
}
```

In this example, the default image is set to `scale(1.15)` with `opacity: 0.7`. When hovered over, it zooms out to `scale(1.03)` with `opacity: 1`.

The `transition` setting means that these each take 0.5 seconds to occur, giving it a sophisticated feel.