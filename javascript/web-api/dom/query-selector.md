# Query Selector

`querySelector` selects the *first* element of your document that matches the CSS selector of your choice. (To select *all* elements that match your CSS selector, see `querySelectorAll`.)

```
document.querySelector('.hondaBtn').style.color = 'blue';
```

Note that you need to put the `.` in front of the class name, as if you were selecting it in CSS. Selecting IDs and tags work the same way as if you were writing CSS, as well:

```
document.querySelector('#hondaBtn').style.color = 'blue';
```

```
document.querySelector('button').style.color = 'blue';
```