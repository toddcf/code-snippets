# DOM

`DOM` stands for Document Object Model.  It is essentially an outline of your web page's structure.

You might have containers nested inside containers, like this:

```
<html>
<head>
</head>
<body>
  <header>
  </header>
  <main>
    <h1></h1>
    <p>
  </main>
  <footer>
  </footer>
</body>
</html>
```

You can use JavaScript to "traverse" the DOM to get information and/or make changes to it.  You could . . .

- Select a single existing element.
- Select multiple existing elements.
- Make changes to those elements, such as adding or removing CSS classes, or removing the elements altogether.
- Create and add a new element to the page.
- Change text and images on the page.
- Play music and/or video.
- Listen for clicks on elements or scrolls on the page.


## The Document Object

The "document" object sits inside the "window" object.  The window object is concerned with things in the browser like tabs, browser bar, width, scroll bars, the URL you're on, etc.  The document object is just concerned with everything inside your code, from the doctype, to the html tag, and everything inside it down to the closing html tag.


## The Navigator Object

The "navigator" object is even higher-level than the window.  This includes information about the user's device.