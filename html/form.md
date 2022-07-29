# Form

## Method Attribute

The default is "GET", but you can change it to "POST":

`<form action="url_here" method="POST">`

But making this change means the query string is sent in the network call, but not included in the URL.

Either way, the information is sent in name/value pairs.


## Inputs

### Name Attribute

An input's `name=""` attribute sets the name of its query string parameter.  In other words, whatever you set this attribute to is what will be in the query string for this input when it gets passed in the URL.  If the input contains a `name="subject"` attribute and the user fills out `spycraft`, the form will pass `&subject=spycraft` in the query string parameters.