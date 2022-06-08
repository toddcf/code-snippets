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

1. Fast-Forward Merge *
2. Non Fast-Forward Merge
  2a. Recursive Merge *
  2b. Ours Merge
  2c. Octopus Merge
  2d. Subtree Merge

* The two main types are the Fast-Forward Merge, and the Non Fast-Forward Recursive Merge.


### Fast-Forward Merge

This is when the `main` branch has not changed (no additional commits) since you created a `feature` branch, made changes to the `feature` branch, and now want to merge it back into the `main` branch.

In this case, the Fast-Forward Merge simply moves the [head](../head/head.md) forward to the latest commit on the `feature` branch.  It *does not* create a new commit.  It just uses the latest commit from `feature`.


## Merge Conflicts

Normally, Git can automatically merge changes together.  But if Git cannot determine which version is the correct one, a merge conflict will occur, and it will fall to the developer to figure it out.

For example, if two developers edit the same line of code, or if one developer deletes a file completely and the other developer edits that same file, a merge conflict will occur.

You must resolve all merge conflicts before you can merge a pull request.


### Preventing Merge Conflicts

First and foremost, `git diff` helps find differences between states of a repository or files.  This can help predict and prevent merge conflicts.

But let's say the merge conflict has already happened.  Here's what to do:


### Resolving with the Command Line

See [GitHub documentation](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line) for a more detailed explanation, but here is the general idea:

1. Run `git status` to see which files are unmerged.
2. Git should show you a `==========` line.  The code above it is the original code on the main branch.  The code below it is the change you were trying to make in the merging branch.
3. Manually edit the conflicted file to select the changes you want to keep in the final merge.
4. Stage the file(s) by running `git add` on each one.  This will mark them as resolved in Git.

Alternatively, you can run `git mergetool`, which will walk you through the conflicts more visually.

5. Run `git status` again to confirm that the conflicts are resolved.
6. Continue through the process of running `git commit`, etc.


### Resolving in GitHub

If you are using GitHub, you can use its conflict editor.  See [GitHub documentation](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for full details.


### Aborting the Merge

Instead of fixing the conflict, you can also run `git merge --abort` to exit the merge process and return the branch to the state before the merge began.


### Resetting

`git reset` can be used during a merge conflict to reset conflicted files to a known good state.  There are three main types of resets:

1. `git reset --soft`
2. `git reset --mixed`
3. `git reset --hard`

`git reset <file name>` removes the file from the staging area, but leaves the working directory unchanged.  (This unstages the file without overwriting any changes.)

More info: https://levelup.gitconnected.com/confused-with-the-difference-between-git-reset-soft-mixed-hard-3285e8b5cd0f


### Further Merge Conflict Resources

- [Git Documentation](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#_basic_merge_conflicts)
- [GitHub Documentation](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts)
- [Bitbucket Documentation](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts) (including practice exercises)
- [opensource Article](https://opensource.com/article/20/4/git-merge-conflict)