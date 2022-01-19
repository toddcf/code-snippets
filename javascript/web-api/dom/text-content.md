# Changing HTML Text Content Using JavaScript

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

`tag.textContent`

This will retrieve `This is an awesome paragraph.` -- it will not include the `<strong>` tags. (Be careful using this, because you might remove tags when manipulating the textContent, which will change the way the page looks in unintended ways. If you want to keep the HTML elements intact, use `innerHTML`.)

3. Overwrite the textContent just like you would any variable:

`tag.textContent = "Check this out.";`

Note that if you try and pass any HTML tags into `textContent`, they're going to be treated as text. Meaning if you do this . . .

`tag.textContent = "Check <strong>this</strong> out.";`

. . . it will actually print those `<strong>` tags on the screen, which is probably not what you want. If you want to be able to pass HTML tags into it, use `innerHTML` instead of `textContent`.