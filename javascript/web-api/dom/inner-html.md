# innerHTML

Similar to `textContent`, but also retrieves the HTML structure and tags, not just the text.

## HTML:

```
<p>
	This is an <strong>awesome</strong> paragraph.
</p>
```

## JavaScript:

1. Select the `<p>` tag:

`var tag = document.querySelector( "p" );`

2. Retrieve the text content:

`tag.innerHTML`

This will retrieve `This is an <strong>awesome</strong> paragraph.` -- including the `<strong>` tags!

(NOTE: If you want only the text, WITHOUT the HTML, use `textContent` instead.)