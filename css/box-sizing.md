CSS Box Model: Content, Padding, Border, Margin.
All HTML elements can be seen as boxes.
"Content" is not a CSS property; the rest are.
In the standard box model, you can only define height and width for the content, not for the entire box. This means that padding, border, and margin will be added to the height and width we specify.
But if you set "box-sizing" to "broder-box" ("box-sizing: border-box") in CSS, you can define height and width for an entire box, not just the content.

In HTML, there are "block" elements and "inline" elements.
Block elements use the full width of the browser, and force line breaks. (Headings and paragraphs are examples of block elements.)
Inline elements don't do any of that. (Examples: images, links, strong, em, u.) You cannot set their height or width.

Margins:
All browsers add some default margins between elements if you don't specify any.
You can reset these using the * to affect all elements on the page, and then writing your own margin and padding values.
You can then specify margins for specific elements.

