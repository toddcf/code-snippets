# Undo Unstaged Changes

Let's say you have a file that is up to date in terms of commits.  If you now make a change to that file, save it, and run `git status`, you will see red text warning you that this file has changes not staged for commits.  Now, let's say you don't actually want to keep those changes.  There are a couple ways of doing this.


## Newer Option: Restore

You can roll back to the previous commit version, like so:

`git restore <name of changed file>` rolls back to that file's most recent commit.

`git restore .` rolls back all changed files in the current branch to their most recent commits.


## Original Option: Checkout

Same as above, except the `checkout` command is less specific than the `restore` command:

`git checkout <name of changed file>`

You are telling git to check out the "HEAD", or the latest commit of this file.  Which will in effect roll it back to that version.

`git checkout .` rolls back all changed files in the current branch to their most recent commits.


## Delete Files and Directories That Have Been Created But Not Committed Yet

Let's say you created a new file, made some changes to it, and saved it, but it has never been committed.  And let's say you want to delete that file.  You can use the following procedure:

`git clean -dn`

The `-d` means "delete."  The `n` means "list all entries that will be affected."

When you run this, it will display `Would remove <file name>`.  It is wise to run this check before you actually delete.  Once this looks good, run:

`git clean -df`

The `-d` still stands for "delete."  The `f` stands for "force," meaning "just execute this command without asking any further questions."