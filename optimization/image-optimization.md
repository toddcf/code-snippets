# Optimizing Images for Faster Load Times

1. Reduce image sizes if possible.
  - Your original image size should be twice as large as the displayed size. (High-resolution displays such as Retina need the source images to be larger than what appears on the screen.)
  - NOTE: Sometimes with responsive web design, images get larger when the screen size shrinks and they stack up, so use the largest possible size for your comparison against the original.
  - Use Chrome Inspector to compare the original image size with the size of the image as displayed on the web page. If the original source image is more than twice the size of the largest displayed size, you should reduce it.
  - NOTE: When deciding your new image sizes, round up a little bit before doubling it, just to be safe.
  - Use an image editing program to make the changes. Save them with `-min` at the end of their file names.
  - After swapping out the new images, make sure to update their file names in your HTML and CSS files.
2. Compress images using Optimizilla.com.
  - After swapping out the new images, make sure to update their file names in your HTML and CSS files.