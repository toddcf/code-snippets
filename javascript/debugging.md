# Debugging

## Using $ as a Selector Shortcut in the Console

This only works in the console, not in your code.  And if jQuery is on the page, it won't work.

Typing `$0` in the console will select the element you most recently clicked on.

Typing `$1` in the console will select the second-to-last element you clicked on.

And so forth.

You can also type `$('p')` to select the first `<p>` tag on the page.

Or two dollar signs to select ALL the `<p>` tags on the page: `$$('p')`.

Or whatever it is you want to search for.


## Breakpoints

Breakpoints allow you to pause your code while it is in the middle of running so that you can get a snapshot of what is happening at any given moment.  While paused, you will be able to see information about the call stack, what is stored in each variable at that point, etc.

There are two main ways to do this:


### Debugger

In your code, you can type the statement `debugger;` where you want your code to pause (if Dev Tools is open).


### Sources Tab in Dev Tools

You can also insert breakpoints on the fly in Dev Tools rather than adding a `debugger` statement to your code.  To do this:

1. Click the "Sources" tab.
2. Select the code file you want to debug.
3. Click the number of the line of code (left hand side) where you want to insert a breakpoint.

This remains in place even if you refresh the page.

On the right-hand sidem you can also check or uncheck the boxes for Event Listener Breakpoints.  For example, you can tell the code to pause whenever there is a mouse click.


### Stepping Through the Code

You will also have the option to click "Resume" or "Step Over Next Function Call."  "Resume" will continue running your code (until the next break point, if there is one).  "Step Over Next Function Call" just runs the next line.  This allows you to step through the code piece by piece and see what each action is.


## Break on Attributes

In Dev Tools (Elements tab), you can right-click an element, select "Break on", and select "attribute modifications".  This will set a breakpoint that pauses functionality whenever an attribute is changed on that element.  (For example, the font size is changed -- it will pause.)

You can do the same thing for "subtree modifications", such as if another element is added inside this one.