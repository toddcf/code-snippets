# Query Selector All

`querySelectorAll` selects every element in your document that matches the CSS selector of your choice. (To select only the first match, see `querySelector`.)

You can then access the items in that list as if they were in an array:

```
document.querySelectorAll('.hondaBtn')[0].style.color = 'white';
document.querySelectorAll('.hondaBtn')[1].style.color = 'blue';
```