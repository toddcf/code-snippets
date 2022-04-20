# Merging

Merging is when you take the changes you've made in one branch and combine them into another branch.

Each branch is a unique set of changes.  As long as the two sets of changes don't conflict with each other, a merge is possible.

To merge, check out the branch you want to merge *into*.  For example, if you are merging your changes from a secondary branch called `changed-branch` into `master`:

1. Run `git checkout master` (the branch you are merging *into*).
2. Run `git merge changed-branch` (the branch you are merging *from*).

The changed branch has now been merged into the master branch -- that's it!

And if you run `git log`, you will see that all of the commits from your changed branch have now transferred over to your master branch.

NOTE: If you are not ready to add a tag to the master branch with a new version number of your app, you should not be merging into the master branch.  (See section on Tagging.)
