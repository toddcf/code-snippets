# getAttribute()

`getAttribute()` allows you to use JavaScript to get HTML data attributes.


## HTML

The first thing to do is give your HTML tags some data attributes. The format is basically `data-`, the label you want to give that attribute, and then `="attributeName"`:

```
<input id="sunroof" type="checkbox" value="1000" data-itemname="Sunroof">
```


## JavaScript

Now you can select it using this attribute in JavaScript:

```
const itemname = document.getElementById('sunroof').getAttribute('data-itemname');
```