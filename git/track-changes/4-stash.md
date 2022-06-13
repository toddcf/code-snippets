# Stash

Stashing allows you to save unstaged and uncommitted changes.  This is less cumbersome than making a new branch off of your current branch, etc.

You can use a stash to save the changes you're working on, go back to your previous commit to fix something else, and then bring the changes you were working on before back later.


## Create a Stash

`git stash push -m "<descriptive message>"` saves the working directory and automatically puts you back into your latest commit.

You save multiple stashes.

NOTE: It is possible to simply run `git stash`, but this will result in automatic stash messages such as `WIP on master: 2402e4c file1 added` rather than a description of your own choosing, and it gets hard to keep track of what's what if you accumulate multiple stashes.


## View List of Stashes

`git stash list` will list out all of your stashes.  Each stash has an index number (starting at zero -- zero being the most recent stash, and the highest index number is the oldest stash).


## Retrieve a Stash

`git stash apply` brings your most recent stash back, which you can now stage and commit like normal.

To access a stash other than the most recent one, use `git stash apply <index number>`.

Once you access stashed data, you will see an error/abort message telling you that you need to commit or stash your changes before you merge.  (If you stash them again, you'll wind up with yet another stash in the index list, even if you haven't made any changes to the contents of the files.)


## Adding a Stash to Your Project

`git stash pop <index number>` will add that stash to your project (and remove it from the stash).

After this, you will still need to stage and commit these changes.

Alternatively, you could use `git stash apply` and the data will remain in the stash in addition to being added to your project.  (But it's cleaner to use `git stash pop` and clear out that part of your stash as you're adding it to the project.)


## Delete a Stash

`git stash drop <index number>` will delete that stash.

`git stash clear` deletes all the stashes.