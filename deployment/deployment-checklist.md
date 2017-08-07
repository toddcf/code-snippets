# Deployment Checklist

## Image Optimization

Optimize Images For Faster Load Times:

1. Reduce image sizes if possible.
  - Your original image size should be twice as large as the displayed size. (High-resolution displays such as Retina need the source images to be larger than what appears on the screen.)
  - NOTE: Sometimes with responsive web design, images get larger when the screen size shrinks and they stack up, so use the largest possible size for your comparison against the original.
  - Use Chrome Inspector to compare the original image size with the size of the image as displayed on the web page. If the original source image is more than twice the size of the largest displayed size, you should reduce it.
  - NOTE: When deciding your new image sizes, round up a little bit before doubling it, just to be safe.
  - Use an image editing program to make the changes. Save them with `-min` at the end of their file names.
  - After swapping out the new images, make sure to update their file names in your HTML and CSS files.
2. Compress images using Optimizilla.com.
  - After swapping out the new images, make sure to update their file names in your HTML and CSS files.

## Cleanup

1. Delete entire files and images that are no longer being used.
2. Clean up all remaining files:
  - Links to CSS and JS files that are no longer being used.
  - Links to fonts that are no longer being used.
  - Clean up comments.
  - CSS:
    - Reduce any single-rules to one line.

## Browser Compatibility

1. HTML:
  - Paste cross-browser compatibility links at the bottom of each file. To verify you are getting the most recent links:
    - 
  - Otherwise, here are the links used in the previous project:
    - 

## Code Verification

## Minify

It is possible to minify CSS and JS files for faster load times. There are sites online that you can use to do this. (Removes comments, whitespace, etc.)

**However, this is only important if you have large amounts of code to compress. Otherwise, you are not saving that much space.**

If you do minify, know that it makes your code very difficult for humans to read, so only do this when you're ready to launch the website.