# Types

SNOB 'N' US:

1. String
2. Number
3. Object
4. Boolean
5. Null
6. Undefined
7. Symbol

In the console, you can type `typeof ` and the element in question, and it will tell you which of the above types it is.


## String

Concatonation is when you combined two strings end-to-end.

Interpolation is when you insert a variable into the string.


## Numbers

When working with dollars and cents, don't store them in variables with a decimal. This can cause JavaScript calculation problems later. (Full explanation: https://0.30000000000000004.com/)

Instead, store them as cents (a whole number with no decimal place), do the calculations, and then convert to dollars and cents at the very end.

### Exponents

`**` is "to the power of." So `10 ** 2` equals `100`.

### Infinity

If you do a calculation that is too large or too small for JavaScript to handle, it converts it to either `Infinity` or `-Infinity`.

### NaN

Not a Number. Happens if you try to divide a number with a string, for example.

(Confusingly, `typeof NaN` does return `"number"`. It is techinically a number itself.)


## Undefined

Something that does not exist, or something that exists but has no set value.

`var car;`

The value of `car` would be `undefined`.


## Null

Null is a value that explicity means "nothing." As a developer, you can set values to `null`, but it is not good practice to set them to `undefined`. Leave that to the computer.

`var car = null;`

In this case, `car` actually has a value, but that value is `null`.


## Symbol

A unique identifier inside of an object.