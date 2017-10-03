#CK Editor

Add a WYSIWYG text editor to your site.

## How:

1. Go to https://cdn.ckeditor.com/ and get the latest CDN link.  Paste it at the end of your js links at the bottom of the HTML file:

`<script src="https://cdn.ckeditor.com/4.7.3/standard/ckeditor.js"></script>`

2. From the same page, copy and paste their sample code right below the CDN link:

`<script>CKEDITOR.replace( 'editor1' );</script>`

3. Now all you have to do is add `name="editor1"` to any `<textarea>` you want to have the WYSIWYG editor.