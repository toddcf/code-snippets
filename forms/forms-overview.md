# Forms Overview

## Tags

`<form>`

### Action

Action tells the form what URL to send the data to when submitted:

```
<form action="/my-form-submitting-page">

</form>
```
If you don't specify an action, clicking submit will simply send the data to the page you're on, meaning it will refresh and the fields will clear. Nothing will really happen.

### Method

Method tells the form what type of HTTP request to send. We could send a `get` request or a `post` request.
```
<form action="/my-form-submitting-page" method="post">

</form>
```

#### GET Request

Searching or retrieving data. A Google search is a GET request.

This is the default. If you don't specify a method on your form, it will be a GET request.

#### POST Request

Sending data that we want to add to a database -- POSTED to a server. Creating an account on Facebook is a POST request because it is adding data to Facebook's servers.

## Label

Use a `<label>` tag instead of a `<p>` tag to describe your fields to your user. This is so if someone is visually impaired, their text-reading software will know to read these labels out loud.

You can nest the `<input>` tags INSIDE the `<label>` tags if you wish:

```
<form>
	<label>
		Username:
		<input type="text" name="username">
	</label>
</form>
```

But it can be neater to do them separately. You just have to include the `for=""` inside the `<label>` tag to ensure it is linked to the proper `<input>` tag. (Again, mainly for helping the visually-impaired.)

```
<form>
	<label for="username">Username:</label>
	<input type="text" name="username">
</form>
```

## Input

`<input>`

The input tag creates interactive controls.

### Type

`<input type="">` specifies what type of input your field will accept. A few examples (many, many more on MDN):

#### Text

`<input type="text">`

Gives you a blank field to type text into.

#### Date

`<input type="date">`

Gives you a field with a date template in it.

#### Color

`<input type="color">`

Gives you a field with a color picker in it.

#### File

`<input type="file">`

Gives you a field with a `Choose File` button so you can upload from your computer.

#### Checkbox

`<input type="checkbox">`

Displays a checkbox.

### Name

`<input type="text" name="username">`

If you put a `name` in the input tag, it will appear in the query string of your browser's URL when submitted.

So you would NOT do this for a password. You would use a POST request (not a GET request).