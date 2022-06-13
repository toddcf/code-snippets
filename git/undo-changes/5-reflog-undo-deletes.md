# Reflog

The reflog is a log of all the changes you've made in your current project -- including deleted commits and branches -- but only going back 30 days.

Running `git reflog` shows you a list of all the changes you've made in your current branch.

You can also use `git reflog` to retrieve deleted commits or branches.  (This can be helpful if you accidentally reset the [HEAD](../head/head.md) of your project.)


## Retrieve a Deleted Commit

You can copy the hash (ex: `7d5d91a`) from the commit you wanted and run `git reset --hard <hash number>` to make that commit the HEAD.


## Retrieve a Deleted Branch

Hashes refer to commits, so if the hash in question is from a deleted branch, you can't use the same method as above.

Instead, checkout the commit:

`git checkout <hash number>`

You will now be in [detached HEAD](../head/2-detached-head.md) mode.  Now you can create a new branch which contains this commit:

`git switch -c <new branch name>`