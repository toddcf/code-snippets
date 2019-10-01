# Form Validation

Validation means the form tells the user they've made a mistake after they've entered the data.


## Basic HTML5 Form Validation

This will be enforced by the browser, and not every browser does this or does it the same way. So it is an extremely basic solution.

It is not a foolproof security feature; rather, it can help make sure data is submitted in the way you want it to be submitted -- numbers only, letters only, etc.


## Three Categories of Validation

1. Client-side validation (on submit -- handled by the browser before sending to the server)
2. Client-side validation (inline -- as they are filling out the form, but *before* they click submit)
3. Server-side validation (after submit, when the server sends back an error message)

Client-side is faster than waiting for the server to send back a response. But it's not 100% foolproof. It may not be supported by all browsers, and anything in the browser is hackable.

So do both client-side and server-side validation to cover all bases.

Server-side validation should verify everything you already checked with client-side validation. Note that some tasks can *only* be completed by server-side validation, such as checking if a password is correct when signing in. Or if a user enters a credit card number, running the charge to make sure it goes through.

You can do inline validation with CSS, but it's fairly limited. You can use `:valid` or `:invalid` to target and style valid and invalid fields. Note that an empty field will be considered a valid field, however.

Another drawback to doing inline validation with CSS, is that it will be marking a field invalid while the user is still typing, which makes them want to yell at the computer, "But I'm not done yet!"


### Required

This is called a "presence" validation. It makes sure that something is there -- the field cannot be left blank.

It's simple: type `required` inside the `<input>` tag.

```
<input type="" name="" required>
```

Note that you DO NOT have to write `required="required"` or `required="true"`. You can simply write `required`.


### Data Type / Format

This will check that the FORMAT of the text entered into a field matches certain criteria for the DATA TYPE that was specified inside the `<input>` tag.

For example, if `<input type="email">`, then it will check that the user's input has an `@` symbol and a `.` domain.