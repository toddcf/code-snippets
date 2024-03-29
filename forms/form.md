# Form

## Form Tag

The `<form>` element is the only element that every form is required to have.

You can have more than one `<form>` element on a page, but they cannot be nested within each other.

Input elements can go outside the `<form>` element on the same page if you link them to the `<form>` element, but not all browsers support this.


## Labels

According to Simple Steps JavaScript, you should put your `<input>` *inside* of your `<label>`. This allows the user to click on the entire label rather than just the tiny checkbox:

```
<label>
	<input type="checkbox">
	Check This
</label>
```

Avoid using questions as your labels, as they make the labels longer and more difficult for the user to scan. (People like to scan ahead and see what info they're going to need to fill out.) Instead of `What is your name?`, just say `Name`.

In CSS, `vertical-align: middle;` will make the text line up with the middle of its adjacent field.


## Method

Tells the form what to do when the user hits `submit`. Method is typically `get` or `post`.


### Get

```
<form method="get">
```

(The `get` method is less common than the `post` method.)

`get` means the browser is sending an HTTP request for a resource with an empty body in the request. This means that the data from the form is included in the URL that is sent to the server or sent to a different page. It will look something like this:

```
https://www.example.com/?color=blue&design=striped
```

Servers may limit the length of the URL, and therefore limit the amount of data that can be sent.

SECURITY NOTE: Do not use this method for transferring sensitive data, as it can be intercepted from the URL.


### Post

```
<form method="post">
```

The browser sends an HTTP request, with the data in the body of the request rather than in the URL.

This is the preferred method, as it is much more secure. All the user will see is the URL their data is being sent to; their data will not be visible.

After the server receives the request, it responds by sending data back to the user's computer. It may simply tell the browser to display a confirmation page. Or it may return data based on the form entries (such as search results).


## Action

Tells the form what to do when the user hits `submit`. Action tells the form what URL the data is being sent to.

```
<form action="url">
```

The `action` attribute is not required, and if you don't have one, the default is the current page.

It's important to know whether the sending and receiving pages have HTTPS. This provides encryption, but not all websites have it.

If both the sending and receiving pages have HTTPS, everything is encrypted as it's sent. This is the best way to go.

If both pages are HTTP, then nothing is secure or encrypted. Definitely don't use this for sending passwords and other sensitive data.

If you send from an HTTP page to an HTTPS page, then the data *is* encrypted.

If you send from HTTPS to HTTP, the data is *not* encrypted, and the browser will probably display a warning.


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

## Attributes

Attributes are used to add additional information and browser instructions to an element in HTML.


### "Type" Attribute

```
<input type="text">
```


### "Name" Attribute

```
<input name="name">
```

Must go on every input, select, or textarea element. It labels the data when it is sent to the server or database.

Each name in a form should be unique.

The user does not see these names.

ALSO: According to Wes Bos, giving your `<form>` tag a name is a better way to identify it than giving it a class.  (I don't know how well this advice meshes with BEM.)


### "For" Attribute

The `for` attribute is for accessibility. It matches the `<label>` to the id of the `<input>` field.

```
<label for="animal">Animal
	<input type="text" id="animal">
</label>
```

`for` should be included on every `<label>` element.


### "Value" Attribute

Has a few different uses:

To set a default value for an entry field:

```
<input type="text" value="defaultValue">
```

To set the value for radio buttons, checkboxes, and option elements:

```
<input type="radio" value="optionValue">
```

```
<input type="checkbox" value="optionValue">
```

```
<option value="optionValue">
```

To set the text that is displayed on a button:

```
<input type="submit" value="Button Text">
```

`value` is optional on buttons. If you don't set one, the button will just display the default text.

You can also use `value` to get the value of a given field when clicked, like this:

```
event.currentTarget.name.value; // Will give you the value that the user filled into the NAME field.
event.currentTarget.email.value; // Will give you the value that the user filled into the EMAIL field.
```

(For this particular example to work, the fields would need to have "name" attributes.)


### "Placeholder" Attribute

Allows you to display a sample entry to give users an idea of what you're asking them for. (But this should not replace labels, and placeholders in general are unnecessary. If something needs more explanation, it's better to put this information in the label.)

```
<input placeholder="Placeholder text">
```

DRAWBACKS: If a user is scanning through the form, they may mistakenly think the field is already filled in. The user's eye tends to jump to the next empty field.


### Maxlength

```
<input type="text" maxlength="40">
```

Sets the maximum number of characters that can be entered in a field.

If you use this, it is a good idea to note this on the page so that users are warned in advance.

Also, be careful not to set limits that prevent people from entering longer data than you predicted.


### Pattern

```
<input type="text" pattern="[A-Za-z]{3}">
```

Sets the requirement for the exact characters that can be entered in a field.

In the above example, letters A-Z, uppercase and lowercase, can be entered. The `{3}` means that exactly three characters must be entered.

Same idea as *regular expressions*.


### Required

```
<input type="text" required>
```

Will not allow the form to submit unless this field is filled in properly.

Indicate on the page that a field is required. It should not be a surprise to the user when they try to submit the form.

Can be used on most fields. Is not used on "hidden" or "button" where it doesn't apply.


### Aria-Required

```
<input type="text" required aria-required="true">
```

This tells screen readers that a field is required, in case they don't support the `required` attribute. (Most screen readers will, but always use this as a backup.)


### Disabled

```
<input type="text" disabled>
```

With this attribute, no data can be entered and no data will be submitted from this field. It will be grayed out on the page.

Can be applied to each individual field, or to an entire fieldset, where it's inherited.


### Readonly

```
<input type="url" readonly value="value">
```

Similar to `disabled`. No data can be entered, but the value *will* be submitted to the database. (Maybe you're going to tell the user you've collected their IP address. You can show them the address without allowing them to edit it.)


### "Hidden" Attribute

```
<input type="text" hidden value="value">
```

Similar to `readonly`, except that it does not show up on the page at all. It is still submitted, however. (Maybe you want to submit a tracking code.)


## Input Types

The `<input>` element is an "empty element" -- you don't need a closing tag.


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

On mobile devices, you get a slightly different keyboard that is geared toward numeric characters.

If the browser does not support `type="number"`, it will convert this field to `type="text"`.

NOTE: Not everything that looks like a number should actually *be* a number. For example, zip codes. Some zip codes start with `0`, which can get stripped out by the database because it thinks it's just a regular number. (Instead, you can use a pattern attribute to use a text field, but only allow the user to enter digits.)


#### Step

`<input type="number">` includes a "stepper" at the right end of the field -- little up and down arrows that the user can click on to increase or decrease the value in the field to the next whole number.

If you want to change the increment, use `step`, like this:

```
<input type="number" step="2">
```

But keep in mind that this will *not* allow you to submit numbers in between those intervals. In Chrome, the default value is one, so it will only accept whole numbers. You can get around this by using `step="any"`.


#### Number Range

```
<input type="number" min="-4" max="12">
```


### Date

```
<input type="date">
```

This will include a `mm/dd/yyyy` placeholder in the field. HOWEVER, it may be in a different order (such as yyyy/mm/dd) depending on the user's operating system's localization settings.

When you're in any of those areas separated by a `/`, you will get a stepper that lets you increment up and down.

You also get a little `X` that will let you clear your entries.

Clicking the arrow on the end will display a calendar! However, this cannot be styled with CSS, so if you want to do that, you need to create your own calendar with JavaScript.

On mobile, the `date` input will provide the user with spinners.

NOTE: Not many browsers support `date` yet, so check caniuse.com.


#### Date Min and Max

The format here is year, month, and day.

So if you want to restrict the date to 2017:

```
<input type="date" min="2017-01-01" max="2017-12-31">
```

In this example, the date field will now have `2017` pre-filled for the user.


### Time

```
<input type="time">
```

The format here is hours, minutes, and then am/pm.


#### Step (Time)

You can add step intervals for time, as well. These are in seconds. Therefore . . .

```
<input type="time" step="1800">
```

. . . would be half an hour, because there are 1800 seconds in half an hour.


### Telephone

```
<input type="tel">
```

The `tel` field on desktop will allow you to enter anything you want. This is because in different locations, phone numbers are formatted with different symbols (and may even include letters).

On mobile, however, you will get a phone keyboard with bigger keys to allow the user to enter their phone number faster.


### Textarea

Can collect multiple lines of text.

Can be resized on the fly by the user by clicking and dragging the bottom corner (although most users don't know this).

Can also be resized by the coder using CSS.


### Color

Not supported in all browsers.

```
<input type="color">
```

And if you click on that, you'll see the color chooser that comes with your operating system.


### File

Allows the user to upload a file.

```
<input type="file">
```

```
<label for="resume">Upload Your Résumé</label>
<br>
<input type="file">
```

You can also allow the user to upload multiple files:

```
<input type="file" multiple>
```

CSS NOTE: Most browsers do not let you change the styling of the upload file button for security reasons. They want to make sure it is recognizable as genuine.


#### Accept Attribute

The `accept` attribute allows you to specify which file types are allowed.

For example . . .

```
<input type="file" accept="image/*">
```

. . . will tell the browser to accept any type of image (jpg, png, etc.) -- but no file types that are not an image.

SECURITY NOTE: This is hackable, so don't count on it to prevent users from uploading executable files, viruses, etc. Make sure you protect against this on the server side, as well.


### Password

```
<input type="password">
```

Masks the characters that are entered into the field.

SECURITY NOTE: This does not provide encryption.


### Hidden

```
<input type="hidden">
```

Contains data that is passed to the server, but not shown to the user. (Tracking codes, etc.)

```
<input type="hidden" value="1234" name="tracking">
```

(Does not need a label or id, since the user doesn't see it.)


### Range

```
<input type="range" min="value" max="value" step="value">
```

Allows user to choose from a range of values on a slider. You do ned the min, max, and step in order to set the range of the values on the slider, as well as the increments.

Drawback: It won't show the user what the exact numbers are. You'll need to use JavaScript to add that.


### Search

```
<input type="search">
```

Allows the user to enter a search term.

Will give you a gray `X` at the end once you begin typing, which allows you to clear the field.


### Submit

```
<input type="submit" value="submit">
```

This is the most basic way to code the submit button, but there are other ways, as well. This will send data to the server.

`value` is the text you want displayed on the button. Be descriptive. (Add to Cart, Donate, Check Out, etc.)

You can also create a button with a "type" of "submit":

```
<button type="submit">Submit</button>
```

This example would work exactly the same as `<input type="submit">`. It's just not a self-closing element. (There is text between the opening and closing `<button>` tags instead of in a `value` attribute.) Using `<button>` gives you more styling options with CSS.


### Reset

```
<input type="reset" value="Reset">
```

Allows the user to clear (reset) the entire form. MOST FORMS DON'T NEED THIS, AND YOU DON'T WANT USERS CLEARING THE ENTIRE FORM ACCIDENTALLY. If you do have both a `Submit` and `Reset` button on a form, make sure it's clear that the `Submit` button is the primary action.

`value` is the text you want displayed on the button.


### Button

```
<input type="button" value="value">
```

The input type "button" is used for a button that has no action associated with it. Nothing will happen when you click it. However, you can add customized behavior to it with JavaScript.

As mentioned in the `submit` type above, you can also create an actual `<button>` tag with a type of `submit`.


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

Also known as a dropdown menu. Less preferable to radio or checkbox buttons because you often cannot see all the options at the same time, and you wind up having to click twice to choose an option.

See `select-tag.md` in `forms` directory.


## Autocomplete

```
<form autocomplete="off">

</form>
```

Setting autocomplete to "off" means that the same boxes *won't* be checked if you refresh the page. You can put this setting in each individueal checkbox, or you can put it in the `<form>` tag to have it apply to everything.


## Autocapitalize




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


## Radio Buttons

See `radio-buttons.md` in `forms` and `buttons` directories.