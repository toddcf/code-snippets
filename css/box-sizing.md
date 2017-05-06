# CSS Box Model

All HTML elements can be seen as boxes. From inside to outside:

1. Content
2. Padding
3. Border
4. Margin

"Content" is not a CSS property; the rest are.

In the standard box model, you can only define height and width for the content, not for the entire box. This means that padding, border, and margin will be added to the height and width we specify.

But if you set `box-sizing: border-box` in CSS, you can define height and width for an entire box, not just the content.

## Block and Inline Elements

In HTML, there are "block" elements and "inline" elements.

### Block Elements

Block elements use the full width of the browser, and force line breaks. (Headings and paragraphs are examples of block elements.)

### Inline Elements

Inline elements don't do any of that. (Examples: images, links, strong, em, u.) You cannot set their height or width.

### Inline-Block Elements

Like an inline element, but can have padding and margin. Does not for a line break.

`display: inline-block;`

## Margins

All browsers add some default margins between elements if you don't specify any.

You can reset these using the `*` to affect all elements on the page, and then writing your own margin and padding values.

You can then specify margins for specific elements.

```
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
```