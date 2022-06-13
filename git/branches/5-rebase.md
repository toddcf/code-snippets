# Rebase

One alternative to merging is called "rebase."

If changes have been committed to your `main` branch since you created your `feature` branch off of it, you have the option of using Rebase (instead of doing a Recursive Merge).

A Rebase will add your `feature` commits to the `main` branch *after* the most recent commit that is now on the `main` branch.


## How It Works

For example:

1. You create the `feature` branch off of the `main` branch.
2. You add one commit to the `main` branch.
3. You add two commits to the `feature` branch.

At this point, running a Rebase will do the following:

1. The newest commit in the `main` branch becomes the new *base commit* for the other branches that were created off of `main`.
2. Your two commits from the `feature` branch are then added to the `main` branch, *after* the one commit that was added to the `main` branch after the `feature` branch was created.

You are "rebasing" the `main` branch to the `feature` branch, and then merging `feature` back into `main`.


## The Difference between a Rebase and a Fast-Forward Merge

- A Fast-Forward Merge moves existing commits rather than creating new ones.
- *A Rebase does not move commits*; rather, it creates new commits with new hashtags.


## When to Use Rebase

Rebasing is okay when you are working locally.  But you should (almost) never rebase commits outside of your repository.