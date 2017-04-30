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

 ## Further Resources

 - https://css-tricks.com/snippets/css/media-queries-for-standard-devices/