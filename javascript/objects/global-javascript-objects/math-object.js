/*
Math.random generates a random number between zero and 1.
*/
Math.random()


/*
Math.floor rounds a the value inside its parentheses DOWN to the next whole number.
This also has the effect of making the number an integer (whole number).
*/
Math.floor()


/*
Snippet: Generate a random INTEGER between 1 and 6:
*/
Math.floor(Math.random() * 6) + 1;
/*
Explanation:
- Math.random chooses a random number between 0 and 1.
- Multiply this by 6 to make it a number between 0 and 6 (but not including 6).
- Math.floor rounds this down to a number between 0 and 5.
- Adding 1 at the end makes this a number between 1 and 6.
*/