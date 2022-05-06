# Undo Staged Changes

Once changes have been staged (`git add`), you can no longer simply `checkout` or `restore` the current version of that file in the current branch.  Instead, you will first have to bring back the commit you want to restore and copy it into your staging area.


## Original Option: git reset, Then git checkout

`git reset <file name>` simply copies the latest stage of this file (the `HEAD` of the current branch) into the staging area.  When you do this, then this file is basically no longer modified.  (It is the opposite of `git add`.)

Now you can run:

`git checkout <file name>`

You will now be back in your previous state and will have undone your staged change.

`git reset` is not the most explicit method, however, because it can also be used to do other things.


## New Option: git restore

Works the same way as `git reset` (and is also the opposite of `git add`):

`git restore --staged <file name>`

If you then run:

`git checkout <file name>`

. . . you will see the message "Updated 1 path from the index," which means you have rolled back one change.

(And if you run `git status`, it will tell you that you have nothing to commit, and that the working tree is clean.)