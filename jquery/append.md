# Append

Use the `append()` method to add a child element to an existing parent element.

## Example

For example, adding another `<li>` to an existing `<ul>`:

`$( "ul" ).append( "<li><span>X</span> " + todoText + "</li>" );`

First you grab the `<ul>`. Then you use the `.append()` method to add whatever HTML strings and/or JavaScript variables you want.