# Styling with jQuery

## .css() Method

Use `$( selector ).css( property, value );` to style elements once they've been selected.

### Example 1

Select element with id "special" and give it a border:

`$( "#special" ).css( "border", "2px solid red" );`

### Example 2

You can also pass in an object with styles:

```
var styles = {
	backgroundColor: "pink",
	fontWeight: "bold"
};

$( "#special" ).css( styles );
```

## Compared to JavaScript

To accomplish the same thing in JavaScript, you have to use querySelectorAll, store it in a variable, then make a for loop that attaches the styles to each individual element that was returned.