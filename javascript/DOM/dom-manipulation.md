# DOM Manipulation

Once you have selected an element . . .

`var tag = document.getElementById( "highlight" );`

. . . you can then manipulate it, much like CSS:

```
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";
```

THE DIFFERENCE between this an CSS is that with JavaScript, the values must be inside a string!

## A Note About Style

It is better to write your style rules in your CSS file, not in your JavaScript file like in the example above.

Instead, you can use JavaScript to `add`, `remove`, or `toggle` the classes on your elements, which will apply the CSS rules accordingly. For example:

### CSS File:

Write the class in your CSS file and give it the styles you want:

```
.subtle {
	color: #555;
}
```

### JavaScript File:

Then, in your JavaScript file, select the element you want to manipulate:

`var manipulated = document.querySelector( "h2" );`

Now you can add the appropriate class that will give that element the style you want it to have using `classList.add`:

`manipulated.classList.add( "subtle" );`

Or remove a class to remove that styling using `classList.remove`:

`manipulated.classList.remove( "subtle" );`

Or toggle between adding and removing that same styling using `classlIst.toggle`:

`manipulated.classList.toggle( "subtle" );`

In this manner, you are simply turning on or off the CSS from the CSS file, rather than writing CSS in the JavaScript file.

### A Note About classList

`classList` is technically not an array. So while you can use `.add`, `.remove`, and `.toggle` on it, you can't call `.push`, `.pop`, etc. on it.


## Creating Elements

The most common way to create a new element via JavaScript is by using `document.createElement`.  You'll typically want to store it in a variable and then add the variable to the page.

```
var newEl = document.createElement('');
document.body.appendChild(newEl);
```


### Creating HTML as a String

You can also write your HTML as a string in JavaScript, then add the string to your DOM.

- PROS: You can include variables in the string if you wrap it in backticks and put the variables inside `${}`.
- CONS: Cross Site Scripting (XSS) means there are security gaps in this method.  Also, you have to keep in mind that your string is not an element until you add it to the page, so you won't be able to select it, add attributes to it, etc. until then.

```
const item = document.querySelector('.item');
const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Something`;

const myHTML = `
	<div class="wrapper">
		<h2>Word ${desc}</h2>
		<img src="${src}" alt="${desc}"/>
	</div>
`;
```


### createRange, and createContextualFragment

You can turn your HTML strings into DOM elements using `createRange` and `createContextualFragment`.

```
const myFragment = document.createRange();
```

This will create something called a "range," which is a collection of elements or part of HTML that we can work with.

Once you've created your range, you can call `createContextualFragment` on it and pass in a string -- in this example, we'll use the HTML from the previous section:

```
const myFragment = document.createRange().createContextualFragment(myHTML);
```

This will give you something called a "document fragment."  *It transforms these strings into true DOM elements before you've even attached them to the page*, which means you can add event listeners, classes, etc.

And at that point, you can attach it to the page:

```
document.body.appendChild(myFragment);
```


## DOM Traversing

Examples of ways to select *elements* that are up, down, or next to a given element in the DOM:

```
el.children
el.firstElementChild
el.previousElementSibling
el.nextElementSibling
el.parentElement
```


Likewise, here are examples of ways to select *nodes* in relation to a given element in the DOM:

```
el.childNodes
el.firstChild
el.lastChild
el.previousSibling
el.nextSibling
el.parentNode
```


(Remember, elements are only the items wrapped in tags.  Nodes are *anything*, whether or not they are in tags.)


## Removing Elements from the DOM

```
el.remove();
```

Pretty simple.

However, if you create an element, add it to the DOM, and then remove it . . . does it still exist?

It won't exist in the DOM, but it will still be stored in memory.  For example, if you stored it in a variable, you could still `console.log` that variable and see it.