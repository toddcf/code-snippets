# jQuery Selecting

## Output

Your output will look different because Chrome is showing you the jQuery object, not the element that you selected. In order to view the element, you must access it via `$('div')[0];`

## Selecting with $

Use `$( "selectorGoesHere" );` to select elements using a CSS style selector. It's very similar to `querySelectorAll();` in JavaScript.

Examples:

- To select all image tags: `$( "img" );`
- To select all elements with the class "sale": `$( ".sale" );`
- To select the element with the ID "bonus": `$( "#bonus" );`
- To select all `<a>` tags inside of `<li>`s: `$( "li a" );`