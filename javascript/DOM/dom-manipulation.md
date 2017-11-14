# DOM Manipulation

Once you have selected an element . . .

`var tag = document.getElementById( "highlight" );`

. . . you can then manipulate it, much like CSS:

```
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";
```

THE DIFFERENCE between this an CSS is that with JavaScript, the values must be inside a string!

## A Note About Style

It is better to write your style rules in your CSS file, not in your JavaScript file like in the example above.

Instead, you can use JavaScript to `add`, `remove`, or `toggle` the classes on your elements, which will apply the CSS rules accordingly. For example:

### CSS File:

Write the class in your CSS file and give it the styles you want:

```
.subtle {
	color: #555;
}
```

### JavaScript File:

Then, in your JavaScript file, select the element you want to manipulate:

`var manipulated = document.querySelector( "h2" );`

Now you can add the appropriate class that will give that element the style you want it to have using `classList.add`:

`manipulated.classList.add( "subtle" );`

Or remove a class to remove that styling using `classList.remove`:

`manipulated.classList.remove( "subtle" );`

Or toggle between adding and removing that same styling using `classlIst.toggle`:

`manipulated.classList.toggle( "subtle" );`

In this manner, you are simply turning on or off the CSS from the CSS file, rather than writing CSS in the JavaScript file.

### A Note About classList

`classList` is technically not an array. So while you can use `.add`, `.remove`, and `.toggle` on it, you can't call `.push`, `.pop`, etc. on it.