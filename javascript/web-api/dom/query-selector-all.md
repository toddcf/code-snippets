# Query Selector All

`querySelectorAll` selects every element in your document that matches the CSS selector of your choice. (To select only the first match, see `querySelector`.)

You can then access the items in that list as if they were in an array:

```
document.querySelectorAll('.hondaBtn')[0].style.color = 'white';
document.querySelectorAll('.hondaBtn')[1].style.color = 'blue';
```

This works for singling out each returned element. But if you want to select everything with a certain class, you then need to loop through the returned list:

```
let hondaButtons = document.querySelectorAll('.hondaBtn');

for ( let i = 0; i < hondaButtons.length; i++ ) {
  hondaButtons[i].style.color = 'blue';
}
```

NOTE: Always store your query selector results in a variable so you can reuse them. You don't want to slow down your page by asking the system to keep searching the entire document just to make multiple changes to the same elements.

You could also speed things up by searching only for everything inside a specific container:

```
const mySpans = document.getElementById('myDiv').querySelectorAll('span');
```


## Select All Radio Buttons or Checkboxes

Use the `:checked` pseudo-class selector from CSS to get all inputs that are checked:

```
let checked = document.querySelectorAll('input:checked');
```

Or you could get all checked radio buttons inside the `#myQuiz` element:

```
let checked = document.querySelectorAll('#myQuiz input[type=radio]:checked');
```

More info: https://developer.mozilla.org/en-US/docs/Web/CSS/:checked