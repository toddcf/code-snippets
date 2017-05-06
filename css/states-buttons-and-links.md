# States of Buttons and Links

Buttons -- and links in general -- in CSS have four different states:

1. Link
2. Visited
3. Hover
3. Active

## Link

How the element looks in a normal state.

You can stylize this as such (where the html `class` has been set to `btn`):

```
btn:link {
	/* Your code here */
}
```

## Visited

How the element looks after it's been visited (clicked).

If you want the element to look the same before and after it's been clicked:

```
btn:link,
btn:visited {
	/* Your code here */
}
```

## Hover

When the mouse rolls over the element (but doesn't click it).

## Active

When you click the element.

# Transitions

For example, you can make the background color change a little more gradually when you hover over it instead of instantaneously:

```
.btn:link {
	transition: background-color 0.2s;
}
```

This means the transition will take 0.2 seconds.  This goes in the main `link` CSS rules, and relates to the code you have in the other states, such as `hover`.



