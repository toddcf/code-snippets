# Lorem Pixel

Random image generator. Custom pixel sizes.

## URL

http://lorempixel.com

## How To Use

First, create an `<a>` tag in your HTML file with a link inside like this:

	`<a href="http://lorempixel.com/560/560/business/1"></a>`

The numbers are the width and height. Then you can denote a category. And the last number is an ID for the image.

Then, put an `<img>` tag inside the `<a>` tag, like this:

	```
	<a href="http://lorempixel.com/560/560/business/1">
		<img src="http://lorempixel.com/400/400/business/1" alt="Business 1">
	</a>
	```

NOTE: Why the smaller pixel size in the `<img>` tag, and why is it necessary to basically use the URL twice?

When you have more than one image like this in your file, you can simply change the ID on each one in order to get a different image.