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
    - Reduce any single-line rules to one line of code.
    - Add whitespace padding above and below multiple-line blocks of rules.

## Browser Compatibility

1. HTML:
  - Go to https://www.jsdelivr.com/ and do the following searches. For each one, paste the <script> links into the bottom of each of your HTML files.
    - Search for `respond`. (Older versions of IE.)
    - Search for `html5shiv`. (For pre-HTML5 browsers.)
    - Search for `selectivizr`. (For pre-CSS3 browsers.)
  - If you're confident these are still the latest links, you can just paste each of these:
    - <script src="https://cdn.jsdelivr.net/g/respond@1.4.2(respond.min.js+respond.matchmedia.addListener.min.js+cross-domain/respond.proxy.js+respond.matchmedia.addListener.src.js+respond.src.js)"></script>
    - <script src="https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js"></script>
    - <script src="https://cdn.jsdelivr.net/g/selectivizr@1.0.3b(selectivizr.min.js+selectivizr.js)"></script>
2. CSS:
  - Paste each CSS file's code into https://autoprefixer.github.io/, then copy and paste the results back into your original file. (This will add or remove all appropriate prefixes for cross-browser compatibility.)
  - NOTE: I find this method to be more thorough than using the Autoprefix CSS extension in SublimeText.

## Code Validation

Paste each HTML file's code (one file at a time) into the following links. Make any corrections necessary until the results come back clean.

1. HTML: https://validator.w3.org/#validate_by_input
2. CSS: https://jigsaw.w3.org/css-validator/#validate_by_input+with_options

## Minify

It is possible to minify CSS and JS files for faster load times. (Remove comments, whitespace, etc.) There are sites online that you can use to do this.

**However, this is only important if you have large amounts of code to compress. Otherwise, you are not saving that much space.**

If you do minify, know that it makes your code very difficult for humans to read, so only do this when you're ready to launch the website.

## Final Test

Now that you've made these changes to your files, test the entire site again:

1. All links.
2. Every single HTML page, including responsive web design.

## Actual Deployment

You are now ready to go live!