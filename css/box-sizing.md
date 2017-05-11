# CSS Box Model

All HTML elements can be seen as boxes. From inside to outside:

1. Content
2. Padding
3. Border
4. Margin

"Content" is not a CSS property; the rest are.

In the standard box model, you can only define height and width for the content, not for the entire box. This means that padding, border, and margin will be added to the height and width we specify.

But if you set `box-sizing: border-box` in CSS, you can define height and width for an entire box, not just the content.

## See Also:

`block-elements.md`



