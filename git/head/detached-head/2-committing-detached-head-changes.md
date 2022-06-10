# Committing "Detached HEAD" Changes

If you are in detached HEAD mode and you stage and commit changes, those changes will be in the detached HEAD.  If you then run `git branch`, it will show you your list of branches plus the detached HEAD.


## Method #1: Switch Branches, Then Create New Branch and Commit to It Simultaneously

At this point, if you switch branches, you will be warned that you are leaving one commit behind, not connected to any of your branches.  If you now run `git branch` again, you will no longer see your detached head listed among the branch names.

But the warning message will have given you the id number of the commit.  If you want to keep this change, you'll need to create a new branch to commit it to, like this:

`git branch <new branch name> <commit id number>`

You now have a new branch with the commit from the detached HEAD saved in it.  And if you run `git branch` once more, this time you will see your new branch included in the list.

NOTE: If you wanted to save the detached HEAD change into an existing branch, you'll first need to create the new branch and commit it to that, and then merge that branch into the branch you actually want it in.


## Method #2: Create New Branch Before Merging the Detached HEAD Changes Into It

Alternatively, you can create your new branch beforehand.  The end result is the same, but *you skip the part where you get a warning first*.  As opposed to switching branches, you can stay in the detached HEAD "branch" and run `git branch <new branch name>`.  (This will create a new branch off of the detached HEAD, meaning it will include the changes that are currently committed to the detached HEAD.)

At this point, if you run `git branch`, you will see your list of branches including both the detached HEAD and the new branch you just created.

Now, switch to the branch you want to merge your changes *into*.  Run `git merge <new branch name you just created>`.

Now if you run `git branch`, your list of branches will no longer include the detached HEAD.  And you can safely delete the new branch you had created for the purpose of merging into the branch you actually wanted it in.