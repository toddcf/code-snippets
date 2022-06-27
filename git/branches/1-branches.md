# Branches

A branch is a unique set of changes.  It represents and independent line of development.  It is a version of your repository.

You start off with a `main` branch, and can create more branches off of that.  When you create a new branch, it starts off as a mirror image of the branch it was created from.  As you make changes on the new branch, it will differ from its originating branch.

This is useful because you can experiment and make mistakes on the new branch without breaking your original branch.  (Non-destructive editing.)  Then, when you are finished, you can merge the changes from the new branch into the original branch.

- `git branch` will list all of your existing branches in your current repository on your local machine.  The branch you are currently on will have an asterisk next to it.
- `git branch -r` will show only your remote branches.
- `git branch -a` will show your local branches, local tracking branches, and remote tracking branches -- but not remote branches.
- `git branch -vv` will show each local tracking branch and which remote tracking branch it is connected to.  It also shows information such as commits.
- `git ls-remote` will list any remote branches that do not exist on local yet.


## Branch Model

Here is one common branch model:

1. A permanent `main` branch that production runs on.  (Development work is not done on the `main` branch.)
2. A `release` branch.
3. A `develop` branch, created off of the `main` branch.  (Create additional branches off of this branch to create new features.)
4. Individual `feature` branches, created off of the `develop` branch.
5. A `hotfix` branch, created off of the `main` branch.  (Changes from this branch can be incorporated into both the `main` and `develop` branch.)

When you want to make changes, you would create a branch off of either the `develop` or `hotfix` branch, make your changes on that branch, then merge it back into that branch.  You would not branch directly off of the `main` branch.

More detail, visuals, and best practices: https://nvie.com/posts/a-successful-git-branching-model/