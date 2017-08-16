# Form Validation

## Basic HTML5 Form Validation

This will be enforced by the browser, and not every browser does this or does it the same way. So it is an extremely basic solution.

### Required

This is called a "presence" validation. It makes sure that something is there -- the field cannot be left blank.

It's simple: type `required` inside the `<input>` tag.

```
<input type="" name="" required>
```

Note that you DO NOT have to write `required="required"` or `required="true"`. You can simply write `required`.