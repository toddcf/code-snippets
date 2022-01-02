# Images


## Accessibility

`<img>` tags on their own are not accessible.

If you have a gallery of images, then ideally you want the user to be able to tab through each image, and when they click "Enter," open the selected image in a modal.

To achieve this, you can give each `<img>` tag a `tabindex="0"` attribute, like this:

```
<img tabindex="0">
```

Setting all of them to `0` rather than ascending numerical values allows the user to tab through them in chronological order.

However, this will not allow for the `Enter` key to open the image in the modal.  For this, you do need to add an event listener that listens for a `'keyup'` event of `"Enter"` and fires whatever the "open modal" function is.