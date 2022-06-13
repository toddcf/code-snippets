# Merge Conflicts

Normally, Git can automatically merge changes together.  But if Git cannot determine which version is the correct one, a merge conflict will occur, and it will fall to the developer to figure it out.

For example, if two developers edit the same line of code, or if one developer deletes a file completely and the other developer edits that same file, a merge conflict will occur.

You must resolve all merge conflicts before you can merge a pull request.


## Preventing Merge Conflicts

First and foremost, `git diff` helps find differences between states of a repository or files.  This can help predict and prevent merge conflicts.

But let's say the merge conflict has already happened.  Here's what to do:


## Resolving in VS Code

The VS Code UI will highlight the merge conflicts and give you options to click:

1. Accept Current Change (Retain what is in the current branch)
2. Accept Incoming Change (Use what is being merged in from the other branch)
3. Accept Both Changes (Retain what is in the current branch, and add the code from the other branch)
4. Compare Changes (View side-by-side)


## Resolving with the Command Line

See [GitHub documentation](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line) for a more detailed explanation, but here is the general idea:

1. Run `git status` to see which files are unmerged.
2. Git should show you a `==========` line.  The code above it is the original code on the main branch.  The code below it is the change you were trying to make in the merging branch.
3. Manually edit the conflicted file to select the changes you want to keep in the final merge.
4. Stage the file(s) by running `git add` on each one.  This will mark them as resolved in Git.

Alternatively, you can run `git mergetool`, which will walk you through the conflicts more visually.

5. Run `git status` again to confirm that the conflicts are resolved.
6. Continue through the process of running `git commit`, etc.


## Resolving in GitHub

If you are using GitHub, you can use its conflict editor.  See [GitHub documentation](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for full details.


## Staging and Committing After Resolving

After resolving the conflict, you will need to stage and commit the resolution.


## Aborting the Merge

Instead of fixing the conflict, you can also run `git merge --abort` to exit the merge process and return the branch to the state before the merge began.


## Resetting

`git reset` can be used during a merge conflict to reset conflicted files to a known good state.  There are three main types of resets:

1. `git reset --soft`
2. `git reset --mixed`
3. `git reset --hard`

See [Undo Commits](../../undo-changes/4-undo-commits.md) for more detail.

`git reset <file name>` removes the file from the staging area, but leaves the working directory unchanged.  (This unstages the file without overwriting any changes.)

More info: https://levelup.gitconnected.com/confused-with-the-difference-between-git-reset-soft-mixed-hard-3285e8b5cd0f


## Further Merge Conflict Resources

- [Git Documentation](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#_basic_merge_conflicts)
- [GitHub Documentation](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts)
- [Bitbucket Documentation](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts) (including practice exercises)
- [opensource Article](https://opensource.com/article/20/4/git-merge-conflict)