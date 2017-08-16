# Radio Buttons

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