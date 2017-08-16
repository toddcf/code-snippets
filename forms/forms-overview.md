# Forms Overview

## Tags

`<form>`

### Action

Action tells the form what URL to send the data to when submitted:

```
<form action="/my-form-submitting-page">

</form>
```

### Method

Method tells the form what type of HTTP request to send. We could send a `get` request or a `post` request.
```
<form action="/my-form-submitting-page" method="post">

</form>
```

#### GET Request

Searching or retrieving data. A Google search is a GET request.

#### POST Request

Sending data that we want to add to a database -- POSTED to a server. Creating an account on Facebook is a POST request because it is adding data to Facebook's servers.

## Input

`<input>`

### Type

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