# Select Tag

The `<select>` tag is used to create dropdown menus.

## Basics

Simply putting a `<select>` tag in the form will display a blank dropdown icon on your web page:

```
<form>
	<select></select>
</form>
```

## Options

The `<option>` tag will denote each individual option to be displayed inside the dropdown menu:

```
<form>
	<p>What's your favorite color?</p>

	<select>
		<option>Black</option>
		<option>Blue</option>
		<option>Red</option>
		<option>Orange</option>
	</select>
</form>
```

### Name

You must also add a NAME to the `select` tag in order to have the choice submitted:

```
<form>
	<p>What's your favorite color?</p>

	<select name="color">
		<option>Black</option>
		<option>Blue</option>
		<option>Red</option>
		<option>Orange</option>
	</select>
</form>
```

The browser takes whatever the text is inside the selected `<option>` and sends that as the value under the NAME inside the `<select>` tag. So in this example, it would send `color="Black"` if black was selected.