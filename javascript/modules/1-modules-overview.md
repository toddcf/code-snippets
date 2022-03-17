# Modules Overview

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

See [Local Server](https://github.com/toddcf/code-snippets/blob/master/servers/local-server.md).


### 2. Load One "Entry Point" Script Tag on Your HTML Page

And give it a `type` attribute with the value `module`:

```
<html>
<body>
  <script src="./script.js" type="module"></script>
</body>
</html>
```


### 3. "Export" the Item From Its Module

Go to the function, variable, etc. you want to be able to use elsewhere (let's say it's in a file called `utils.js`) and write the word "export" in front of it:

```
export function returnHi(name) {
  return `Hi, ${name}.`;
}
```

This allows this function to be used in other modules.


### 4. "Import" That Same Item Into the Module You Want to Invoke It From

*At the top* of the module you want to use the exported function in, use the `import` keyword, like this:

```
import { returnHi } from './utils.js';
console.log(returnHi('Todd'));
```

It's the word `import`, then the name of the function inside curly braces, then the word `from`, and then a string containing the relative filepath to the JS file containing that function.  (In this example, the `./` means the file is in the same directory as this one.)

This tells the system that this is one of the modules you want to use that exported function in.

This example will print `Hi, Todd.` to the console.