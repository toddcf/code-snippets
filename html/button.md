# Button

A button is intended to perform an action, such as submitting a form.

A button is *not* intended for navigation -- anchor tags (links) should always be used for that.  Although it is possible to style an anchor tag to look like a button, it should not actually be a `<button>` tag.

There are a couple types of buttons in HTML:


## Button Tag

This is the more flexible option.

`<button type="submit">Button Text Here</button>`

The `<button>` tag allows for a more flexible UI -- in addition to text, you can put icons, images, etc. inside of buttons.

Type attribute options:

- submit (sends data)
- reset (clears the form)
- button (does nothing)


## Input Tag with type="button" or type="submit"

`<input type="button" value="send">`

The `value` attribute will determine the text of the button.

Note that the `type="button"` method does not have a default action.  To handle the action, you must use JavaScript.

However, if you change `type` to `submit` . . .

`<input type="submit" value="send">`

. . . the user agent will know what to do without additional JavaScript programming.

### Drawbacks to Input Buttons

`<input>` tags cannot have child elements, so you are limited to the text you are able to type into the `value` attribute.