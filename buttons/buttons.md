# Buttons

## Buttons vs. Links

Buttons should be used for actions that happen inside an application.  (Save, submit, add friend, follow, etc.)

Links should be used to take you somewhere.  (To navigate to another page, etc.)  If you're using a link that doesn't go anywhere, it's not a link.

This distinction is very important for accessibility.


## role="button"

If you have an element (let's say an `<img>`) that you want to make clickable, it's not accessible to simply add a 'click' event listener to it.  This is because if the user is tabbing through the DOM trying to click on it, the tabs will skip the `<img>`.  You can still do this, but you just need to add a `role="button"` attribute to the `<img>`.  You would also give it an attribute of `tabindex="0"` (or whatever number).

HOWEVER, it would probably be better to just create a `<button>` tag and put the `<img>` tag inside of it.