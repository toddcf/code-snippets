# Reflog

`git reflog` can help you retrieve deleted commits or branches.  The Reflog stores all the changes you've made in your current project -- but only going back 30 days.

Running `git reflog` shows you a list of all the changes you've made in your current branch.


## Retrieve a Deleted Commit

You can copy the hash (ex: `7d5d91a`) from the commit you wanted and run `git reset --hard <hash number>` to make that commit the HEAD.


## Retrieve a Deleted Branch

Hashes refer to commits, so if the hash in question is from a deleted branch, you can't use the same method as above.

Instead, checkout the commit:

`git checkout <hash number>`

You will now be in "detached HEAD" mode.  Now you can create a new branch which contains this commit:

`git switch -c <new branch name>`