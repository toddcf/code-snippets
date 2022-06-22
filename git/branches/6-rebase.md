# Rebase

If changes have been committed to your `main` branch since you created your `feature` branch off of it, you have the option of using "rebase" (instead of a "recursive merge").

*A rebase will rewrite your code history as if your `feature` branch was created off of the now-latest commit of the `main` branch.*

This is helpful if, for example, you have added a bugfix to `main` that needs to be incorporated into `feature` in order for you to continue your development on `feature`.  However, the fact that it rewrites your code history means that all of your existing commits on `feature` will now have new hashtags.  For this reason, you should only ever use rebase on your local; if other developers are needing to use the original commit hashtags, there will be problems.


## How It Works

For example:

1. You create the `feature` branch off of the `main` branch.
2. You add one commit to the `main` branch.
3. You add two commits to the `feature` branch.

At this point, running a rebase will do the following:

1. The newest commit in the `main` branch becomes the new *base commit* for the `feature` branch -- *as if `feature` was originally created off the current version of `main`*.
2. Your two commits in the `feature` branch now come *after* the most recent commit from the `main` branch.
3. The two `feature` commits now have new hashtags (because the code history has been rewritten).


## When to Use Rebase

You should (almost) never rebase commits outside of your repository.  This is because rebasing rewrites the code history -- your commits will have new hashtags, which can cause trouble for other developers.

But here are scenarios where rebasing is okay:

- You are working locally.  
- Your branch relies on additional commits that have been made to the `main` branch.  (Maybe you just merged a separate bugfix into `main` that will be necessary for the changes in your `feature` branch to work.  You can rebase `main` into `feature` so that `feature` now incorporates the bugfix in `main` while you continue to work on `feature`.)
- Your `feature` is finished and the implementation into `main` should be done without a merge commit.  (I don't know why this would be imperative.)  (You would rebase `main` into `feature` and then merge (Fast-Forward) into `main`.)


## Syntax

While on the branch you want to merge *from* (in this example, you are on the `feature` branch, about to rebase it to the latest commit in the `main` branch):

`git rebase main`

Once the rebase is done, you can switch to `main` and run `git merge feature`.  A [Fast-Forward Merge](merge/1-merge.md) will occur because it is as if no changes have been made to `main` since you created and edited your `feature` branch -- the HEAD will be moved.