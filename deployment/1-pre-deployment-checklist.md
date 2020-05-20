# Pre-Deployment Checklist

## HTML Accessibility

- CREATE CHECKLIST FOR ACCESSIBILITY FEATURES:
  - Accessibility Documentation:
    - https://developer.mozilla.org/en-US/docs/Web/Accessibility
    - https://getbootstrap.com/docs/4.0/getting-started/accessibility/
    - https://www.w3.org/TR/UNDERSTANDING-WCAG20/
    - https://www.w3.org/WAI/fundamentals/accessibility-intro/
    - https://www.section508.gov/
  - Accessibility Checklists:
    - http://romeo.elsevier.com/accessibility_checklist/
    - https://a11yproject.com/checklist/ (uses WCAG)


## Manual HTML Validation

Each HTML individual page must be checked for:

- Verify each HTML page has a title.
- Verify each HTML page has a favicon.
- Every `<img>` has an `alt=""`.


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
    - Check console for any warnings or errors on every single page.


## Browser Compatibility

1. HTML:
SKIP IF YOU USED BOOTSTRAP OR FOUNDATION
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
3. Testing:
  - Test in Chrome
  - Test in Firefox
  - Test in Microsoft Edge


## Automated Code Validation

Paste each file's code (one file at a time) into the following links. Make any corrections necessary until the results come back clean.

1. CSS: https://jigsaw.w3.org/css-validator/#validate_by_input+with_options
2. HTML: https://validator.w3.org/#validate_by_input


## Final Manual Test

1. Click all links, internal and external.
2. Resize window on each page to check mobile responsiveness.


### Remove .html Extension from URL

(Make sure to do this *after* all link testing is complete, as it will no longer work the same on your local machine.)

1. Create an `.htaccess` file in your site's root directory.
2. Use this code snippet in the `.htaccess` file:

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

3. Delete `.html` extension from all internal links on the site.


### Minify JavaScript

1. Copy and paste JavaScript from your working files into https://javascript-minifier.com/
2. Save the minified code to a version of each file with `-min` at the end.
3. Update the links in the HTML files to point to the `-min` files instead.
4. Keep the non-minified versions of all files for future editing (and GitHub viewing), but don't upload them to the server when you deploy.
5. Test the local file in the browser to make sure everything still works.


### Minify CSS

1. Copy and paste CSS from your working files into https://cssminifier.com/
2. Save the minified code to a version of each file with `-min` at the end.
3. Update the links in the HTML files to point to the `-min` files instead.
4. Keep the non-minified versions of all files for future editing (and GitHub viewing), but don't upload them to the server when you deploy.
5. Test the local file in the browser to make sure everything still works.


### Minify HTML (last)

Minify HTML only after CSS and JavaScript have been minified, as you will need to update the links to those stylesheets and scripts first.

1. Copy and paste HTML from your working `-nonminified.html` files into https://kangax.github.io/html-minifier/
  - NOTE: IS THERE A SETTING THAT WILL *NOT* TRIM THE WHITESPACE BEFORE A LINK THAT IS IN THE MIDDLE OF TEXT?
2. Then copy it back out of that site and paste it into each `.html` file for your site.
3. Test the local file in the browser to make sure everything still works.


### HTTPS

Force the site to HTTPS, even if the user types in HTTP:

1. Add SSL Certificate to site via Dreamhost: https://help.dreamhost.com/hc/en-us/articles/215089118-Adding-an-SSL-certificate-overview
2. In FileZilla, confirm that host key matches (if you see the warning pop-up): https://help.dreamhost.com/hc/en-us/articles/360004634231-The-server-s-host-key-is-unknown
3. Add the following snippet to your `.htaccess` file to force the site to HTTPS even if user types in HTTP:

```
# Force HTTPS:

RewriteCond %{HTTPS} !=on
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301,NE]
```

More details: https://help.dreamhost.com/hc/en-us/articles/215747758-Force-your-site-to-load-securely-with-an-htaccess-file

NOTE: This plus Cloudflare can cause a “too many redirects” error that won’t let the site load.  Log into Cloudflare and set SSL/TLS to “strict.”  See https://help.dreamhost.com/hc/en-us/articles/216475197 for more details.