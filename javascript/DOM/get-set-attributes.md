# Getting and Setting Attributes

Use `getAttribute()` and `setAttribute()` to read and write attributes like `src` and `href`.

## HTML

```
<a href="https://www.google.com">This is a link</a>
<img src="logo.png">
```

## getAttribute()

First, you can select the elements you want and store them in variables:

```
var link = document.querySelector( "a" );
var img = document.querySelector( "img" );
```

Then you can "get" these variables in preparation for changing them:

```
link.getAttribute( "href" );
img.getAttribute( "src" );
```

This will get the link to `www.google.com` and the image `logo.png`.

## setAttribute()

Now you can change each one using `setAttribute()`:

```
link.setAttribute( "href", "http://www.dogs.com" );
img.setAttribute( "src", "corgi.png" );
```

As you can see, `setAttribute()` takes two arguments. The first is the name of the attribute. The second is what you want to change its value to.

The HTML will now read:

```
<a href="www.dogs.com">This is a link</a>
<img src="corgi.png">
```

## Using setAttribute() on Multiple Elements

Note that `setAttribute()` only exists on individual elements. So if, for example, you want to change all the links on a page, you need to loop through each one and change them one at a time.

So, let's say you grabbed all the anchor tags and stored them in a variable, like this:

`var links = getElementsByTagName( "a" );`

You CAN'T just `set` them all by doing this: `links.setAttribute();`

Keep in mind that the nodeList is NOT a real array, so you cannot use `forEach()`. You'll need to use a `for loop` or a `while loop`.

```
for ( var i = 0; i < links.length; i++ ) {
	links[ i ].setAttribute( "href", "http://www.bing.com" );
}
```

Now if you console.log `links`, you'll see that every single one points to Bing.com.