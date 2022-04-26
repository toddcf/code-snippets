# HEAD

The `HEAD` is the most recent commit of your current branch.

For example, if you check out the `main` branch and it has three commits in it, commit #3 of the `main` branch becomes your `HEAD`.  Then if you check out your `dev` branch and it has seventeen commits in it, commit #17 of the `dev` branch becomes your `HEAD`.

Sometimes when you run `git log`, you'll see something like `(HEAD -> main)` in your log next to the most recent commit.  It is telling you that `HEAD` is currently set to (or "pointing to") the `main` branch, and that this particular commit is currently your `HEAD`.


## Detached HEAD

A "detached HEAD" can occur if you check out a specific commit id, and that same commit id exists in multiple branches.  Git is now confused about which branch you want to check that commit id out in, and you will get a "detached HEAD" message.  This commit is now no longer part of a specific branch, and in fact if you run `git branch` while you are in this state, you'll see a list of your branches, but you'll also see that you are not in any of them -- you are in a separate "detached HEAD" state.

You have plenty of options to work within detached HEADs.  It's not actually a bad thing if you know what you want to do next.  Notes for this scenario will be added later.

To get out of the "detached HEAD" state, simply run `git checkout <branch name>` to check out a specific branch.


## Committing "Detached HEAD" Changes

If you are in detached HEAD mode and you stage and commit changes, those changes will be in the detached HEAD.  If you then run `git branch`, it will show you your list of branches plus the detached HEAD.


### Method #1: Switch Branches, Then Create New Branch and Commit to It Simultaneously

At this point, if you switch branches, you will be warned that you are leaving one commit behind, not connected to any of your branches.  If you now run `git branch` again, you will no longer see your detached head listed among the branch names.

But the warning message will have given you the id number of the commit.  If you want to keep this change, you'll need to create a new branch to commit it to, like this:

`git branch <new branch name> <commit id number>`

You now have a new branch with the commit from the detached HEAD saved in it.  And if you run `git branch` once more, this time you will see your new branch included in the list.

NOTE: If you wanted to save the detached HEAD change into an existing branch, you'll first need to create the new branch and commit it to that, and then merge that branch into the branch you actually want it in.


### Method #2: Create New Branch Before Merging the Detached HEAD Changes Into It

Alternatively, you can create your new branch beforehand.  The end result is the same, but *you skip the part where you get a warning first*.  As opposed to switching branches, you can stay in the detached HEAD "branch" and run `git branch <new branch name>`.  (This will create a new branch off of the detached HEAD, meaning it will include the changes that are currently committed to the detached HEAD.)

At this point, if you run `git branch`, you will see your list of branches including both the detached HEAD and the new branch you just created.

Now, switch to the branch you want to merge your changes *into*.  Run `git merge <new branch name you just created>`.

Now if you run `git branch`, your list of branches will no longer include the detached HEAD.  And you can safely delete the new branch you had created for the purpose of merging into the branch you actually wanted it in.