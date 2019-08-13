# Rest Operator

The Rest Operator (`...`) will accept any quantity of arguments and put them into an array. This is great when you don't know how many arguments are going to be passed in, or if that quantity might change on a case by case basis.

The purpose of the Rest Operator is to allow you to write less code.


## Example: Get Sum of an Array

Standard way:

```
function addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers([1, 2, 3, 4, 5]);
```

But what if the argument passed in is NOT in an array? You could refactor your function to convert the argument to an array as follows:

```
function addNumbers(a, b, c, d, e) {
  const numbers = [a, b, c, d, e];

  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5);
```

But maybe you don't know how many numbers you're going to be passing in each time. You can use the Rest Operator, which is the `...`:

```
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5);
```


## Rest vs. Spread Operators

The Rest Operator is used to gather variables together.

The Spread Operator is used to flatten or spread them out.