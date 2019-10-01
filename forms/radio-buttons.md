# Radio Buttons

Radio buttons allow the user to select only one of the options.

`<input type="radio">`

You MUST give each `<input>` the same `name=""`, or else the radio buttons will allow the user to select more than one. In this example, both "cats" and "dogs" are given the name "petChoice".

```
<p>Do you prefer cats or dogs?</p>

<form>
	<label for="cats">Cats:</label>
	<input type="radio" id="cats" name="petChoice">

	<label for="dogs">Dogs:</label>
	<input type="radio" id="dogs" name="petChoice">
</form>
```

You also want each choice to have a `value`. This is what will be sent in the get/post request.

`<input type="radio" id="cats" name="petChoice" value="cats">`


## Checked

If you want to show one of the options selected by default, add the `checked` attribute:

```
<input type="radio" checked>
```

## Fieldset and Legend

Use these to group your radio buttons together.

```
<fieldset>
  <legend>Question</legend>
  <label for="choice1">
    <input type="radio" id="choice1" name="choices">Choice 1
  </label>
  <label for="choice2">
    <input type="radio" id="choice2" name="choices">Choice 2
  </label>
</fieldset>
```