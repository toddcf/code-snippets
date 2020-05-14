# Pre-Deployment Checklist

## HTML Accessibility

- CREATE CHECKLIST FOR ACCESSIBILITY FEATURES.

## HTML Pre-Validation

Each HTML individual page must be checked for:

- Verify each HTML page has a title.
- Verify each HTML page has a favicon.
- Every `<img>` has an `alt=""`.

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
  - HTML:
  	- Links to CSS and JS files that are no longer being used.
  	- Links to fonts (and font weights) that are no longer being used.
  	- Clean up comments.
  - CSS:
    - Clean up comments.
  - JavaScript:
    - Clean up comments.
    - Check console for any errors.
  - ReadMe:
  	- Create GIF video of the project being used:
  	  - https://showmore.com/
  	  - Dimensions: 1350 x 900 (or any x1.5 ratio).
  	- Ensure the following categories:
  	  - Title
  	  - Description
  	  - Image / GIF: `![Hangman - Robert De Niro Edition](https://github.com/toddcf/hangman-de-niro/blob/master/assets/img/bg1.jpg "Hangman - Robert De Niro Edition")`
  	  - Live Link (to be updated once deployed)
  	  - Technology Used
  	  - Challenges / What I Learned
  	  - Future Iterations
  	- Update all info.

## Browser Compatibility

1. HTML:
SKIP IF YOU USED BOOTSTRAP!
  - Go to https://www.jsdelivr.com/ and do the following searches. For each one, paste the `<script>` links into the bottom of the `<body>` in each of your HTML files -- but BEFORE all your other script links.
	- Search for `respond`. (Older versions of IE.)
	- Search for `html5shiv`. (For pre-HTML5 browsers.)
	- Search for `selectivizr`. (For pre-CSS3 browsers.)
  - If you are confident these are still the latest links, you can just paste each of these . . .

```
<!-- Scripts for compatibility with old IE versions -->
<!-- https://www.jsdelivr.com/ SEARCH FOR "respond" -->
<script src="https://cdn.jsdelivr.net/g/respond@1.4.2(respond.min.js+respond.matchmedia.addListener.min.js+cross-domain/respond.proxy.js+respond.matchmedia.addListener.src.js+respond.src.js)"></script>

<!-- Script for pre-HTML5 compatibility -->
<!-- https://www.jsdelivr.com/ SEARCH FOR "html5shiv" -->
<script src="https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js"></script>

<!-- Scripts for CSS3 features that won't work with older browsers -->
<!-- https://www.jsdelivr.com/ SEARCH FOR "selectivizr" -->
<script src="https://cdn.jsdelivr.net/g/selectivizr@1.0.3b(selectivizr.min.js+selectivizr.js)"></script>
```

2. CSS Autoprefixing:
  1. Paste each CSS file's code into https://autoprefixer.github.io/, then copy and paste the results back into your original file. (This will add or remove all appropriate prefixes for cross-browser compatibility.) NOTE: I find this method to be more thorough than using the Autoprefix CSS extension in SublimeText.
  2. Save all files and refresh your browser to check that nothing broke.

## Code Validation

Paste each file's code (one file at a time) into the following links. Make any corrections necessary until the results come back clean.

1. CSS: https://jigsaw.w3.org/css-validator/#validate_by_input+with_options
2. HTML: https://validator.w3.org/#validate_by_input

## Minify

It is possible to minify CSS and JS files for faster load times. (Remove comments, whitespace, etc.) There are sites online that you can use to do this.

**However, this is only important if you have large amounts of code to compress. Otherwise, you are not saving that much space.**

If you do minify, know that it makes your code very difficult for humans to read, so only do this when you're ready to launch the website.

## Final Test

Now that you've made these changes to your files, test the entire site again:

1. All links.
2. Every single HTML page.
  a. Resize window on each one to check mobile responsiveness.


## Remove .html Extension from URL

1. Use this code snippet in the `.htaccess` file:

```
# Global Settings:

RewriteEngine On


# Remove filename extensions from URL:

# If the folder exists on the server, don't run the rule:
RewriteCond %{REQUEST_FILENAME} !-d

# If an HTML file doesn't exist, don't run the rule:
RewriteCond %{REQUEST_FILENAME}\.html -f

# Show the page that has the .html extension:
RewriteRule ^(.*)$ $1.html [NC,L]
```

2. Place the `.htaccess` file in the root directory.
3. Remove `.html` extension from all internal links on the site. (This is done at the end, after link testing is complete on your local machine -- they won't work after this.)


## HTTPS

Force the site to HTTPS, even if the user types in HTTP:

1. Add SSL Certificate to site via Dreamhost: https://help.dreamhost.com/hc/en-us/articles/215089118-Adding-an-SSL-certificate-overview
2. In FileZilla, confirm that host key matches (if you see the warning pop-up): https://help.dreamhost.com/hc/en-us/articles/360004634231-The-server-s-host-key-is-unknown
3. Use htaccess file to force the site to HTTPS even if user types in HTTP: https://help.dreamhost.com/hc/en-us/articles/215747758-Force-your-site-to-load-securely-with-an-htaccess-file

```
# Global Settings:

RewriteEngine On


# Force HTTPS:

RewriteCond %{HTTPS} !=on
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301,NE]
```

NOTE: This plus Cloudflare can cause a “too many redirects” error that won’t let the site load.  Log into Cloudflare and set SSL/TLS to “strict.”  See https://help.dreamhost.com/hc/en-us/articles/216475197 for more details.


## Deployment Checklist

You are now ready to go live!

## Post-Deployment Checklist

1. README:
  1. Add live URL.
  2. Add GIF.
  3. Push up to GitHub.
3. Add description and live URL to GitHub page.