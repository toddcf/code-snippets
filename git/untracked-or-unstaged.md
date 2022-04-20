# Tracked/Untracked, Staged/Unstaged

Here is an example of a workflow that could happen:

1. `index.html` already exists, but you make a change to it in your working directory and save it.
2. You also create a new file called `auth.js`.
3. Now if you run `git status`, it will show `index.html` as having changes not staged for commit, and `auth.js` as untracked.


## Untracked

If a file is untracked, that means it exists locally, but is not part of the Git repository.  Git does not know whether to track or ignore this file.  A tracked file is a file that has been "added."


## Unstaged

If a file is unstaged, Git has not recorded it into its own version history yet.  You have two choices with unstaged files:

1. Stage them (using `git add <filename>`).
2. Discard them (using `git checkout --<filename>`).

Any time you make a change to one of your files, it will be in the unstaged area until you do one of these things.

If you can't decide because you don't remember which changes were made to that file, use `git diff <file name>`.

NOTE: You can also type `git diff` without the file name.  But this will show multiple files, which can clutter your terminal window.