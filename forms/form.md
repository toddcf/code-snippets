# Form

## Form Tag

The `<form>` element is the only element that every form is required to have.

You can have more than one `<form>` element on a page, but they cannot be nested within each other.

## Labels

According to Simple Steps JavaScript, you should put your `<input>` *inside* of your `<label>`. This allows the user to click on the entire label rather than just the tiny checkbox:

```
<label>
	<input type="checkbox">
	Check This
</label>
```


## Method

Tells the form what to do when the user hits `submit`. Method is typically `get` or `post`.

```
<form method="get">
```

```
<form method="post">
```


## Action

Tells the form what to do when the user hits `submit`. Action tells the form what URL the data is being sent to.

```
<form action="url">
```


## Label

```
<label>What is your favorite color?</label>
```

Should come above or to the left of the `<input>` field.

You can put the `<label>` *before* the `<input>` field in HTML, like this . . .

```
<label>What is your favorite color?</label>
<input type="text">
```

. . . or you can wrap the `<label>` tags *around* the `<input>` field, like this:

```
<label>What is your favorite color?
	<input>
</label>
```

### For Attribute

The `for` attribute is for accessibility. It matches the `<label>` to the id of the `<input>` field.


## Input

The `<input>` element is an "empty element" -- you don't need a closing tag.

### Type Attribute


### Text

`<input type="text">` is for plain text entry. Only accepts single-line entry; the browser will strip out any line breaks. (To accept data with line breaks, see the `<textarea>` element.)

### Email

`<input type="email">`

Advantages:

1. The browser may have built-in validation for email input types (`@` symbol, etc.). (If the browser does not support this, it will simply convert the `email` type to a `text` type.) You'll still want to do server-side email address validation, but browser-side validation is faster. Note that any browser messages can't be edited by CSS.
2. On mobile devices, you get a slightly different keyboard that is geared toward the characters used in email addresses.

#### Multiple

Adding the `multiple` attribute will allow the `<email>` field to accept more than one email address:

```
<input type="email" multiple>
```

The email addresses should be separated by a comma when entered into the field.


### URL

```
<input type="url">
```
Advantages:

1. Similar to `type="email"`, this does some basic browser-side validation to ensure that the user has entered something that could be a website address. (If the browser does not support this, it will simply convert the `url` type to a `text` type.)
2. On mobile devices, you get a slightly different keyboard that is geared toward the characters used in website addresses.


### Number

```
<input type="number">
```

This is used to collect positive or negative integers, including decimals.

Will prevent user from entering anything other than a digit `0-9`, `+` sign, `-` sign, or a single `.` decimal.

Also includes a "stepper" at the right end of the field -- little up and down arrows that the user can click on to increase or decrease the value in the field to the next whole number.

On mobile devices, you get a slightly different keyboard that is geared toward numeric characters.

If the browser does not support `type="number"`, it will convert this field to `type="text"`.

NOTE: Not everything that looks like a number should actually *be* a number. For example, zip codes. Some zip codes start with `0`, which can get stripped out by the database because it thinks it's just a regular number. (Instead, you can use a pattern attribute to use a text field, but only allow the user to enter digits.)


### Submit

`<input type="submit">` is the most basic way to code the submit button, but there are other ways, as well. This will send data to the server.


### Name Attribute

The name attribute labels the data when it is sent to the server. (This is not shown to the user.)

If you were asking the user their favorite color you might use:

```
<input name="favcolor">
```


### ID Attribute

The id attribute is used to associate each input field with the correct label. It should be unique on the page, and descriptive. It is often the same as the `name` attribute.

```
<input id="favcolor">
```

(You will use the `for` attribute in the `<label>` tag to match that label to this `<input>`.)


## Select


## Textarea


## Autocomplete

```
<form autocomplete="off">

</form>
```

Setting autocomplete to "off" means that the same boxes *won't* be checked if you refresh the page. You can put this setting in each individueal checkbox, or you can put it in the `<form>` tag to have it apply to everything.


## A Different Example

```
<form method="post" action="#" class="contact-form">
				
	<!-- NAME -->
	<div class="row">
		<div class="col span-1-of-3">
			<label for="first-name">First Name</label>
		</div>
		<div class="col span-2-of-3">
			<input type="text" name="first-name" id="first-name" placeholder="First Name" required>
		</div>
	</div>
	<div class="row">
		<div class="col span-1-of-3">
			<label for="last-name">Last Name</label>
		</div>
		<div class="col span-2-of-3">
			<input type="text" name="last-name" id="last-name" placeholder="Last Name" required>
		</div>
	</div>

	<!-- EMAIL -->
	<div class="row">
		<div class="col span-1-of-3">
			<label for="email">Email</label>
		</div>
		<div class="col span-2-of-3">
			<input type="email" name="email" id="email" placeholder="Your Email" required>
		</div>
	</div>

	<!-- HOW DID YOU FIND US? -->
	<div class="row">
		<div class="col span-1-of-3">
			<label for="find-us">How Did You Find Us?</label>
		</div>
		<div class="col span-2-of-3">
			<select name="find-us" id="find-us">
				<option value="friends" selected>Friends</option>
				<option value="search">Search Engine</option>
				<option value="ad">Advertisement</option>
				<option value="other">Other</option>
			</select>
		</div>
	</div>

	<!-- NEWSLETTER -->
	<div class="row">
		<div class="col span-1-of-3">
			<label for="news">Newsletter?</label>
		</div>
		<div class="col span-2-of-3">
			<input type="checkbox" name="news" id="news" checked>Yes, please!
		</div>
	</div>

	<!-- MESSAGE -->
	<div class="row">
		<div class="col span-1-of-3">
			<label for="message">Drop Us A Line:</label>
		</div>
		<div class="col span-2-of-3">
			<textarea name="message" placeholder="Your Message"></textarea>
		</div>
	</div>

	<!-- SUBMIT -->
	<div class="row">
		<div class="col span-1-of-3">
			<label>&nbsp;</label> <!-- Blank space to keep button aligned with input fields. -->
		</div>
		<div class="col span-2-of-3">
			<input type="submit" value="Send">
		</div>
	</div>

</form>
```