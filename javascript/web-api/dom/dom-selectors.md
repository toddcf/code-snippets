# Common DOM Selectors

## getElementBy

### getElementById

Selects the element with the ID you are looking for. Remember, there can be only one ID per HTML page.

`document.getElementById( "narrow" );`

### getElementByClassName

`document.getElementByClassName( "wide" );`

### getElementsByTagName

Selects anything with the tag you query, such as `<li>`, `<h1>`, etc.

`document.getElementsByTagName( "li" );`

### Storing in a Variable

It is often wise to store these queries in a variable in order to reduce confusion:

`var narrowId = document.getElementById( "narrow" );`

You can then call more methods on this ID:

`narrowId.style.color = #000;`

#### NodeLists

Let's say you've selected elements and stored them in a variable. That variable now contains a NodeList, so if you call that variable in the console, you'll get what looks very similar to an array, but which is actually a list of everything that was selected.

## querySelector

Returns the *first* element that matches a given CSS-style selector.

`var narrowId = document.querySelector( "#narrow" );`

Note the `#` in front of the ID in this example.

Can also select tags, just like you could with getElementBy:

`var h1 = document.querySelector( "h1" );`

You can also traverse the DOM to select elements within specific elements:

`var anchor1 = document.querySelector( "li a.happy" );`

The above code will select the first anchor tag `<a>` with the class `happy` that is NESTED INSIDE OF an `<li>`.

And to reiterate, this will only return the first match, even if you're searching for a className that has a ton of usages throughout your document. If you need to select multiples, use `querySelectorAll`.

## querySelectorAll

Works the same as the examples above, except it will return ALL instances of the queried element instead of just the first instance.