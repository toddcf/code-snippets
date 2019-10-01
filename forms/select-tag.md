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


### Selected

Adding `selected` to one of the options makes it selected by default when the page is loaded.

```
<option selected>Black</option>
```


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

But this will multiple options to display all at once rather than dropping down.


### Size

Determines how many options display at a time without scrolling.

```
<select name="name" id="idname" multiple size="7">
```

Note that in this example, if you have fewer than 7 options, the box will still be large enough to fit 7, with white space at the bottom.


### Optgroup

Adds category labels to the list of options. Short for "option group."

```
<label for="pizza">What is your favorite pizza topping?</label>
<br>
<select name="pizza" id="pizza" multiple size="7">
  <optgroup label="vegetables">
    <option value="mushroom">Mushroom</option>
    <option value="olives">Olives</option>
    <option value="peppers">Peppers</option>
  </optgroup>
  <optgroup label="meats">
    <option value="sausage">Sausage</option>
    <option value="pepperoni">Pepperoni</option>
  </optgroup>
</select>
```

The user will be able to click on each option, but not the optgroup title.