# Background

## Background Image Link

`background-image: url(../img/food/hero.jpg);`

## Show Entire Image

`background-size: cover;`

## Center Image

`background-position: center;`

## Match Background Height to Viewport Size

One method is to put the entire page in a container, and then set the height of the container to 100% of the viewport height:

```
.container {
	height: 100vh;
}
```

However, it can be better to set the background image in `html` as opposed to the `body` or a `div`, as html will always be 100% of the viewport. It resizes automatically and more easily for mobile responsiveness.

```
html {
	background-image: url(../img/food/hero.jpg);
	background-size: cover;
}
```
There are also some webkits for this. See https://css-tricks.com/perfect-full-page-background-image/.

## Fixed Background

If you don't want the background to move:
  - `background-attachment: fixed;`
  - Note that this does not work on iOS devices. Use a media query to target smaller devices and set it to `background-attachment: scroll;`.

## Darkened Image Background

To make the background image darker:

```
background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.7)), to(rgba(0, 0, 0, 0.7))) , url(../img/food/hero.jpg);
background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url(../img/food/hero.jpg);
```

The gradient "from" and "to" values are both set to the same value in this example, meaning it will simply darken the entire image instead of doing a gradient from one color to another.

Note that rgba is used, meaning the first three values are rgb colors (each set to zero, for black), and the fourth value is transparency (set to 70% in this example).

### Alternate Method if the Above Doesn't Work

Sometimes the text overlay gets darkened, too, despite the above method. If that happens, try this intead:

#### HTML

```
<div id="header-img">

  <div id="h1-container">
    <h1>Join a Legacy of Growth and Excellence </h1>
  </div>

</div> <!-- Close #header-img -->
```

#### CSS

```
#header-img {
  background: url(https://s3.amazonaws.com/fzautomotive/dealers/5b5badedd8508.jpg) no-repeat #00000050;
  background-size: cover;
  background-position: center center;
}
```

The `background: #00000050` code is what is creating the darkened background. The first six digits are the hex code for black. The last two digits are the percentage of opacity (in this case, 50%).

## Background Opacity

If you just want to have a shaded (or lightened) background (as opposed to an image):

`div {background: rgba(0, 0, 0, 0.5);}`

This is better than using `opacity`, which would cause the children of that div to inherit that opacity as well -- meaning that your text will be hard to read on top of the background.

## Sections

To differentiate sections in your website, you can give each one a slightly different background color.

## Further Resources

- https://css-tricks.com/snippets/css/media-queries-for-standard-devices/