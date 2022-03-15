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


## Importing Multiple Items From the Same Module

If there are multiple items within the same module that you want to import, you follow pretty much the same procedure:


### Export Each of the Items You Want to Share

To continue the previous example, let's say you're already exporting the `returnHi` function and now you want to also export a variable.  There are two ways: Named, or Default exports.


#### Named Exports

*Abstract this to a separate document.*

Just add the `export` keyword in front of that variable, too:

```
export const lastName = 'Tester';
export const middleName = 'Cowboy';
```

Or, instead of exporting each variable, you can list the named exports at the bottom of the file, like this:

```
export { last, middle };
```

Either method is fine; it's personal preference.

You can haveas many named exports as you want.


#### Default Exports

*Abstract this to a separate document.*

Unlike named exports, you can only have one default export per module.

```
const person = {
  firstName: 'Wes',
  lastName: 'Bos'
}

export default person;
```


### How to Import Named Exports

In the file you want to import *into*, you can list each item you want access to (comma-delimited) inside the curly braces.  In this example, `lastName` is a variable in the same imported module from the previous example:

```
import { returnHi, lastName, middleName } from './utils.js';
```

You would now have access to the `returnHi` function and both the `lastName` and `middleName` variables.


### How to Import Default Exports

Use the `import` keyword, then make up any variable name you want to use to reference it in the document you are importing into.

```
import instructor from './wes.js';
```

NOTE: Default imports *do not* go inside curly brackets.  (Only named imports do that.)


### When to Use Named vs. Default Imports

If a module does one thing, you can use `default`.

If a module is a library of many different things, you will have to use `named`.

Note that you can do both a default plus one or more named imports in a file.


### How to Import a Combination of Default and Named Exports

The default import *does not* have curly brackets; the named imports *do*:

```
import instructor, { returnHi, lastName, middleName } from './utils.js';
```


## Importing From Multiple Modules

*You can list multiple modules to import at the top of your file.*