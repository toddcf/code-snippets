# Formatting Your Code

Airbnb and Google each have style guides. (Airbnb is considered by some to have a little bit nicer formatting, so I'm going to use that.)

ESLint and Prettier are two tools that can be installed in your text editor to help.


## ESLint

A linter tool used to identify potential problems in your JavaScript code. (Bad practices or design patterns. Or unused variables or functions.)

You can also paste your code into the demo on the ESLint website. After pasting, it will call out any errors. You can even configure which errors you want it to check for.

If you don't want to spend so much time configuring the exact settings that work for you over time, you can use somebody else's. (Ex: https://github.com/wesbos/eslint-config-wesbos)


## Prettier

Whereas ESLint is for catching errors, Prettier is entirely for formatting. It will make single or double quotes consistent in your document, etc.

There are some settings you can edit in Prettier, but for the most part you have to let it do things its way.


## Combined

You can use ESLint with a Prettier plugin so that it does both.