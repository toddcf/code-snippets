# Select Tag

The `<select>` tag is used to create dropdown menus.

Less preferable to radio or checkbox buttons because you often cannot see all the options at the same time, and you wind up having to click twice to choose an option.

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

### Value

But maybe you don't want the text from the option sent as the submission. In this case, you can specify a different VALUE for each option inside the `<option>` tag:

```
<form>
	<p>What's your current mood?</p>
	
	<select name="mood">
		<option value="happy">:)</option>
		<option value="numb">:|</option>
		<option value="sad">:(</option>
	</select>
</form>
```


### Multiple

If you add the `multiple` attribute, it allows the user to select more than one option.

```
<select name="name" id="idname" multiple>
```

But this will cause it to display all at once rather than dropping down.