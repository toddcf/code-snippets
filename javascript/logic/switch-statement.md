# Switch Statement

If you have one condition that you want to check multiple cases against, a switch is more performant than an if/else statement.  It evaluates the condition once, then checks each case for a match.

If a case does not match, it skips to the next case until a match is found.  Once found, it enters that case's code block and executes it.  At the end of each case's code block is a `break`, at which point the entire switch statement is exited.

If no matches are found, the `default` case is executed.  (The `default` case is optional.)


## Example

```
let msg;
let level = 2;

switch (level) {
	case 1:
		msg = "Good luck on the first test.";
		break;
	case 2:
		msg = "Second of three -- keep going!";
		break;
	case 3:
		msg = "Final round, almost there!";
		break;
	default:
		msg = "Good luck!";
		break;
}
```

This example will result in `msg` being set to `"Second of three -- keep going!"`.