# Responsive Images

To load different-sized images for different breakpoints:

1. Create versions of the same image with widths equal to the max-width of each breakpoint. (640px, 1024px, 1200 or 2500px (depending).)
2. Embed the actual images into HTML for all but the largest breakpoint. (Make sure you keep the height ratio the same for each one.) This will make window resizing responsiveness better than using a background image in CSS.

## Foundation 6 HTML Example:

```
<div class="row">
	<!-- Small image (640px wide) -->
	<img src="https://s3.amazonaws.com/fzautomotive/dealers/5ab0101151de7.jpg" alt="Woman driving a convertible" class="show-for-small-only">
	<!-- Medium image (1024px wide) -->
	<img src="https://s3.amazonaws.com/fzautomotive/dealers/5ab0104029860.jpg" alt="Woman driving a convertible" class="show-for-medium-only">
	<!-- Large image (2500px wide) -->
	<img src="https://s3.amazonaws.com/fzautomotive/dealers/5ab131bcaf021.jpg" alt="Woman driving a convertible" class="show-for-large-only">
	<!-- 2500px and up image is displayed as CSS background -->
</div>
```

3. For the very largest breakpoint, use a CSS background:

### Foundation 6 CSS Example:

```
.show-for-large-only {
	display: none;
}

/* Large only */
@media screen and (min-width: 1024px) and (max-width: 2499px) {

	.show-for-large-only {
		display: block !important;
	}

}

/* Above 2500px */
@media screen and (min-width: 2500px) {

	#title-card {
		min-height: 909px;
		background-image: url("https://s3.amazonaws.com/fzautomotive/dealers/5ab131bcaf021.jpg");
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

}
```
