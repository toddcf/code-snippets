# Merge

Merging is when you take the changes you've made in one branch and combine them into another branch.

Each branch is a unique set of changes.  As long as the two sets of changes don't conflict with each other, a merge is possible.

To merge, check out the branch you want to merge *into*.  For example, if you are merging your changes from a secondary branch called `changed-branch` into `main`:

1. Run `git checkout main` (the branch you are merging *into*).
2. Run `git merge changed-branch` (the branch you are merging *from*).

The changed branch has now been merged into the main branch -- that's it!

And if you run `git log`, you will see that all of the commits from your changed branch have now transferred over to your main branch.

NOTE: If you are not ready to add a tag to the main branch with a new version number of your app, you should not be merging into the main branch.  (See [Tagging](../tagging.md).)


## Types of Merges

1. Fast-Forward Merge
2. Non Fast-Forward Merge
  - Recursive Merge
  - Ours Merge
  - Octopus Merge
  - Subtree Merge

(The two main types are the Fast-Forward Merge, and the Non Fast-Forward Recursive Merge.)


### Fast-Forward Merge

The Fast-Forward Merge is the default merge type when the `main` branch has not had any additional commits since you created a `feature` branch from it, made changes to the `feature` branch, and now want to merge it back into the `main` branch.

In this case, the Fast-Forward Merge simply moves the [HEAD](../head/head.md) forward to the latest commit on the `feature` branch.  It *does not* create a new commit.  It just uses the latest commit from `feature`.

NOTE: If you *don't* want to run a Fast-Forward Merge, you can use this flag:

`git merge --no-ff feature`


### Recursive Merge

The Recursive Merge is the default merge type if there have been commits to both the `main` branch and the `feature` branch after the `feature` branch was created from `main`.

A Recursive Merge will actually add a commit to the `main` branch for the merge (as opposed to just moving the [HEAD](../head/head.md) like the Fast-Forward Merge does).  Therefore, the [HEAD](../head/head.md) will now point to `main`.