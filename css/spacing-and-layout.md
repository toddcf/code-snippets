# Spacing and Layout

## Whitespace

### Overview

- Every piece of good design uses whitespace well.
- You need a lot of whitespaces in the correct places on your site.
- Gives a clean, simple, inviting look and feel. Without whitespace, looks and feels cluttered and claustrophobic.
- Put whitespace between:
  - Elements.
  - Groups of elements.
  - Icons and text.
  - Sections.
  - Sections' headings and their content.
  - Paragraphs.
- But don't exaggerate. When elements are spaced out too much, they may lose their relationships to one another.
- Whitespace describes invisible relationships between the elements of your website. Communicates how the pieces of the website relate to one another.

### Placing Whitespace

1. Define where you want your audience to look first.
2. Establish a flow that corresponds to your content's message.
  - This hierarchy will guide the user from one element to the next.
3. Use whitespace to build that exact flow.

### Margins vs. Padding

Normally you would use margins to set your whitespace.

However, if you are going to use a background color and want it to be visible, use padding instead.

## When to use PX vs. %

1. Percentages.
  - Used mostly for "layout" elements, meaning we want to change them according to screen width.
  - Used for defining horizontal distances between elements.
    - Width
    - Margin-left
    - Margin-right
  - NOT used in vertical distances.
    - Responsive web design works in screen widths (horizontal).
    - NOTE: To set an element's height to fill the entire screen based on screen size, use `height: 100vh;` instead, which is viewport height.
  - Font sizes are defined in % except for the base font-size defined for the body element. This allows us to easily change font sizes for smaller screens.
2. PX.
  - Used to define some margins and padding.
    - For padding, we can only use px thanks to `box-sizing: border-box`, which ensures that the box width (defined in %) always stays the same no matter how much padding we add inside of it.
  - Used to define some smaller distances and distances that don't need to change when the screen size changes.
  - Used for the base `font-size`, which is defined in the body element. (All other `font-size`s are defined in percentages, which are relative to this base `font-size`.)

## Sections

To differentiate sections in your website, you can give each one a slightly different background color.

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