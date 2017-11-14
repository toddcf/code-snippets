# Common DOM Selectors

## getElementById

Selects the element with the ID you are looking for. Remember, there can be only one ID per HTML page.

`document.getElementById( "narrow" );`

## getElementByClassName

`document.getElementByClassName( "wide" );`

## getElementByTagName

Selects anything with the tag you query, such as `<li>`, `<h1>`, etc.

`document.getElementByTagName( "li" );`

## Storing in a Variable

It is often wise to store these queries in a variable in order to reduce confusion:

`var narrowId = document.getElementById( "narrow" );`

You can then call more methods on this ID:

`narrowId.style.color = #000;`

## NodeLists

Let's say you've selected elements and stored them in a variable. That variable now contains a NodeList, so if you call that variable in the console, you'll get what looks very similar to an array, but which is actually a list of everything that was selected.