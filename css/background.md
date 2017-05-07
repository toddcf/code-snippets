# Background

## Background Image Link

`background-image: url(../img/food/hero.jpg);`

## Show Entire Image

`background-size: cover;`

## Center Image

`background-position: center;`

## Match Background Height to Viewport Size

`height: 100vh;`

## Fixed Background

If you don't want the background to move:
  - `background-attachment: fixed;`
  - Note that this does not work on iOS devices. Use a media query to target smaller devices and set it to:
  - `background-attachment: scroll;`

## Linear Gradient

To make the background image darker:

```
background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url(../img/food/hero.jpg);
```

The gradient "from" and "to" values are both set to the same value in this example, meaning it will simply darken the entire image instead of doing a gradient from one color to another.

Note that rgba is used, meaning the first three values are rgb colors (each set to zero, for black), and the fourth value is transparency (set to 70% in this example).

## Sections

To differentiate sections in your website, you can give each one a slightly different background color.

## Further Resources

- https://css-tricks.com/snippets/css/media-queries-for-standard-devices/