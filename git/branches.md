# Branches

A branch is a unique set of changes.


## See List of Branches

`git branch` will show you all the branches in your current repository on your local machine.


## Create New Branch

While in the branch you want to create your new branch off of, run `git branch ` + branch name.  Branch names do not need to be in quotes.  They cannot have spaces.

Note that you can create a branch off of one branch, and then create another branch off the second branch, etc.


## Checkout (Switch To) Branch

`git checkout ` + the branch name you want to switch to (a.k.a. "check out").

Side Note: If you run `git log` immediately after creating and then checking out a new branch, you will see the same list of commits as the branch you created the new branch off of.  Each commit id and timestamp will be the same as they are in the original branch.


## Shortcut: Create and Checkout New Branch Simultaneously

Same as creating a new branch, except you also use `-b`, like this:

While in the branch you want to create your new branch off of, run `git branch -b ` + branch name.


## Merging

To merge one branch's changes into another, see [Merging](merging.md).