# Undo Commits

Let's say you have both staged (`git add`) and committed (`git commit`) a change that you would like to undo.

You can use `git reset`:


## Reset (Soft)

A soft reset is the opposite of `git commit`.

`git reset --soft HEAD~1` tells Git to go back 1 commit on the current branch.  (Changing that to `~2` will tell Git to go back two commits on the current branch, and so forth.)

Now if you run `git log`, you will no longer see the commit(s) you rolled back.

HOWEVER, if you run `ls`, you will still see your changes in the staging area.  *Only the commits got deleted -- not the stages.*


## Reset (Default)

If you leave out the `--soft` flag, you will delete both the commit and the stage.  It is the opposite of both `git add` and `git commit`.

`git reset HEAD~1`

Now if you run `git log`, you will not see the commits, and if you run `ls`, you won't see the stages, either.

HOWEVER, the changes remain in your working directory until you delete them and run another stage and commit.  For example, if you created a file, staged and committed it, and then ran `git reset`, the stages and commits are now gone, but the new file is still in your working directory until you delete it and then stage and commit that change.  OR, you can use a hard reset (see below).


## Reset (Hard)

`git reset --hard HEAD~1`

Same as a default reset, except that it will also make the changes in your working directory.  For example, if you created a file, staged and committed it, and then ran `git reset --hard`, the stages and commits are now gone, plus the file itself will be gone from your working directory.


## Resets Only Affect the Branch You Run Them In

Let's say you merged a `feature` branch into the `main` branch.  Then you wanted to undo that merge.

While in the `main` branch, you could run `git reset --hard HEAD~1`, and `main` would roll back one to its state prior to the merge.

However, if you then switch to your `feature` branch, you'll still see your latest changes there -- they will not have been undone.


## Using in Conjunction with Reflog

See the [Reflog](5-reflog-undo-deletes.md) file for info on how to do this.