// A method that allows you to change the "this" property and use another object instead.

// Example:
john.presentation
// This will access the "presentation" in the "john" object.

john.presentation.call(emily);
// This will use john's presentation, but substitute the emily object's data into it instead of the john object's data.