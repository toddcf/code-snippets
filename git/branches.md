# Branches

`git branch` will list all of your existing branches.  The branch you are currently on will have an asterisk next to it.

`git branch <branch name>` will create a new branch with the name that you type in.  For example, `git branch user-authentication` will create a new branch called `user-authentication`.

After creating your new branch, you can switch to using it by typing `git checkout <branch name>`.  (Now if you run `git branch` again, you will see `master` and the new branch listed, with an asterisk next to the new branch.)

NOTE: To do this via the Sourcetree UI instead of the command line, see [Sourcetree notes](https://github.com/toddcf/code-snippets/blob/master/sourcetree/sourcetree.md).




A branch represents and independent line of development.  It is a version of your repository.  You start off with a master branch, and can create more branches off of that.  When you create a new branch, it starts off as a mirror image of the branch it was created from.  As you make changes on the new branch, it will differ from its originating branch.

This is useful because you can experiment and make mistakes on the new branch without breaking your original branch.  (Non-destructive editing.)  Then, when you are finished, you can merge the changes from the new branch into the original branch.

Here is one common branch configuration:

1. A permanent `master` branch that production runs on.  (Development work is not done on the master branch.)
2. A `release` branch.
3. A `develop` branch, created off of the `master` branch.  (Create additional branches off of this branch to create new features.)
4. Individual `feature` branches, created off of the `develop` branch.
5. A `hotfix` branch, created off of the `master` branch.  (Changes from this branch can be incorporated into both the `master` and `develop` branch.)

When you want to make changes, you would create a branch off of either the `develop` or `hotfix` branch, make your changes on that branch, then merge it back into that branch.  You would not branch directly off of the master branch.

More detail, visuals, and best practices: https://nvie.com/posts/a-successful-git-branching-model/







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