# While Loop

Runs a block of code infinitely until the while loop's condition is `false`.


## Example

The following code would keep increasing a number by 1 and writing that number in the console while it is less than 10:

```
let x = 0;

while (x < 10) {
  x++;
  console.log(x);
}
```


## When to Use a While Loop

If a [For Loop](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/arrays/loops/for-loop.md) is not practical.  For example, if the condition is going to be based on user behavior rather than on an incrementation counter, etc.

Similar to a [Do While Loop](https://github.com/toddcf/code-snippets/blob/master/javascript/objects/arrays/loops/do-while-loop.md), except that a While Loop always checks its condition before executing its code block, whereas a Do While loop executes its code block first, *then* checks its condition.