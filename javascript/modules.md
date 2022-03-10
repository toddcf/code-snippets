# Modules

"Modules" are a way of structuring your JavaScript into separate files that can share functionality and data.  They can even be shared across multiple projects.

Each module (file) has its own scope.  (Similar to the way a function has its own scope.)

A module could be used to hold an object containing the data you want to access.  Or a utility function that is going to be used across multiple parts of your site.

They are sometimes called "ESM" (EcmaScript Modules) or "ES6 Modules."


## Outdated Waterfall Method

The old way of doing this was to just load multiple script tags in your HTML file.  But the drawback was that you had to load those script tags in the right order so that one wasn't trying to reference something in another one before it was loaded.  It was unwieldy and confusing, especially because you might wind up with 30 different script tags, all required to be loaded in the perfect order, and by looking at just one of them you wouldn't know which of the other files your code might be invoking a function from (for example).


## How to Set Up Modules

Import the file you need into the file where you want to use it.  (In this manner, you don't need to worry about which order the files load in because you are importing what you need right before you use it.)


### 1. Make Sure You Are Running Your Code on a Server

You can't use modules on your local or you will run into CORS issues.  To set up a server for your project:

#### Server Method 1: VS Code Plugin




### 2. Load One "Entry Point" Script Tag on Your HTML Page

And give it a `type` attribute with the value `module`:

```
<html>
<body>
  <script src="./script.js" type="module"></script>
</body>
</html>
```