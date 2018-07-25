# Clearfix



## CSS

```
.clearfix:after {
	content: "";
	display: table;
	clear: both;
}
```

## Explanation

- `clear: both` does the real work of clearing floats.
- The `.clearfix` class has the pseudo-element `:after` because we want it to happen at the end of the element upon which we assigned the clearfix class.
- Overall, this is a "hack" -- it just works.